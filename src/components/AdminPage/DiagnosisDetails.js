import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getJsonConfig, saveDiagnosisData } from "../../store/AdminDataStore/AdminDataApi";
import { adminState } from "../../store/AdminDataStore/AdminDataContext";
import Sections from "./DiagnosisQuestions/Sections";
import Button from "../../utils/Button";
import styles from '../../styles/AdminPage/Diagnosis.module.css';

const DiagnosisDetails = () => {
  const dispatch = useDispatch();
  const { diagnosisJsonConfig, currentPatient } = useSelector(adminState);
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
    dispatch(saveDiagnosisData({ 
      patientId: currentPatient.data.patient.patientId, 
      sections: formData 
    }));
  };

  useEffect(() => {
    dispatch(getJsonConfig());
  }, [dispatch])

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