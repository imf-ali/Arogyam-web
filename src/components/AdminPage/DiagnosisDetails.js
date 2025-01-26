import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getJsonConfig } from "../../store/AdminDataStore/AdminDataApi";
import { adminState } from "../../store/AdminDataStore/AdminDataContext";
import Sections from "./DiagnosisQuestions/Sections";

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
      <div>
        <button
          onClick={() => console.log("Form Data:", formData)}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default DiagnosisDetails;