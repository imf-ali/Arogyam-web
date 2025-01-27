import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getJsonConfig } from "../../store/AdminDataStore/AdminDataApi";
import { adminState } from "../../store/AdminDataStore/AdminDataContext";
import Sections from "./DiagnosisQuestions/Sections";
import Button from "../../utils/Button";
import styles from '../../styles/AdminPage/Diagnosis.module.css';

const DiagnosisDetails = () => {
  const dispatch = useDispatch();
  const { diagnosisJsonConfig } = useSelector(adminState);
  const [formData, setFormData] = useState({});

  const handleChange = (sectionId, questionId, value) => {
    setFormData((prev) => ({
      ...prev,
      [sectionId]: {
        ...prev[sectionId],
        [questionId]: value,
      },
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
          handleClick={() => console.log('form Data')}
        />
      </div>
    </div>
  );
};

export default DiagnosisDetails;