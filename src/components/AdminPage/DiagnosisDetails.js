import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getJsonConfig, getPatientDiagnosis, saveDiagnosisData, updateDiagnosisData } from "../../store/AdminDataStore/AdminDataApi";
import { adminState } from "../../store/AdminDataStore/AdminDataContext";
import Sections from "./DiagnosisQuestions/Sections";
import Button from "../../utils/Button";
import styles from '../../styles/AdminPage/Diagnosis.module.css';
import { showError } from "../../store/ToastStore/ToastContext";

const DiagnosisDetails = ({ appointmentStatus }) => {
  const dispatch = useDispatch();
  const { diagnosisJsonConfig, currentPatient, patientDiagnosisData, isDoctor } = useSelector(adminState);
  const [formData, setFormData] = useState([]);

  const handleChange = (sectionId, sectionTitle, questionId, question, answer, isOtherOption = false) => {
    
    if (isOtherOption) {
      setFormData((prev) => ([
        ...prev.map((item) => {
          if (item.sectionId === sectionId) {
            return {
              ...item,
              questions: item.questions.map((ques) => {
                if (ques.id === questionId) {
                  return {
                    ...ques,
                    otherOption: {
                      label: question,
                      answer
                    }
                  }
                }
                return ques;
              })
            }
          }
          return item;
        })
      ]));
      return;
    }
    
    setFormData((prev) => {
      const existingSection = prev.find((item) => item.sectionId === sectionId);
      if (existingSection) {
        return prev.map((item) => {
          if (item.sectionId === sectionId) {
            return {
              ...item,
              questions: (() => {
                const existingQuestion = item.questions.find((ques) => ques.id === questionId);
                if (existingQuestion) {
                  return item.questions.map((ques) => {
                    if (ques.id === questionId) {
                      return {
                        ...ques,
                        answer
                      };
                    }
                    return ques;
                  });
                } else {
                  return [
                    ...item.questions,
                    {
                      id: questionId,
                      question,
                      answer
                    }
                  ];
                }
              })()
            }
          }
          return item;
        })
      }
      return [
        ...prev,
        {
          sectionId,
          sectionTitle,
          questions: [
            {
              id: questionId,
              question,
              answer
            }
          ]
        }
      ]
    });
  };

  const handleSave = (e) => {
    e.preventDefault();

    if (appointmentStatus !== 'INPROGRESS') {
      dispatch(showError('Move the patient to INPROGRESS'));
      return;
    }
    if (patientDiagnosisData) {
      dispatch(updateDiagnosisData({
        patientId: currentPatient.data.patient.patientId,
        sections: formData
      }))
      return;
    }
    dispatch(saveDiagnosisData({ 
      patientId: currentPatient.data.patient.patientId, 
      sections: formData 
    }));
  };

  useEffect(() => {
    if (isDoctor) {
      dispatch(getJsonConfig());
      dispatch(getPatientDiagnosis({ patientId: currentPatient.data.patient.patientId }));
    }
  }, [dispatch, currentPatient, isDoctor])

  useEffect(() => {
    if (isDoctor && patientDiagnosisData && patientDiagnosisData.sections) {
      setFormData(patientDiagnosisData.sections)
    }
  }, [patientDiagnosisData, isDoctor])

  useEffect(() => {
    if (isDoctor && appointmentStatus !== 'INPROGRESS') {
      dispatch(showError('Move the patient to INPROGRESS'));
    }
  }, [dispatch, appointmentStatus, isDoctor]);

  if (!isDoctor) {
    return (
      <div className={styles.notAuthorized}>
        <h2>You are not allowed to view or edit this page</h2>
      </div>
    );
  }

  return (
    <div>
      <Sections 
        diagnosisJsonConfig={diagnosisJsonConfig} 
        handleChange={handleChange} 
        formData={formData} 
      />
      <div className={styles.submitDiv}>
        <Button
          text="Save Details"
          backgroundColor='#3c6b3d'
          width='15%'
          handleClick={handleSave}
        />
      </div>
    </div>
  );
};

export default DiagnosisDetails;