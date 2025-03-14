import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { adminState } from "../../store/AdminDataStore/AdminDataContext";
import { getPatientData } from "../../store/AdminDataStore/AdminDataApi";
import styles from '../../styles/AdminPage/Patient.module.css';
import BasicDetails from "./BasicDetails";
import DiagnosisDetails from "./DiagnosisDetails";
import Prescription from "./Prescription";

const Patient = () => {

  const { patientId } = useParams();
  const dispatch = useDispatch();
  const { currentPatient } = useSelector(adminState);
  const [activeTab, setActiveTab] = useState(0);

  console.log(currentPatient)

  useEffect(() => {
    dispatch(getPatientData({ patientId }));
  }, [dispatch, patientId]);

  return (
    <div className={styles.captureData}>
      <div className={styles.patientDetails}>
        <span className={styles.patientIdText}>PATIENT ID: </span>
        <span className={styles.patientId}>&nbsp;{patientId}</span>
      </div>
      <div className={styles.diagnosis}>
        <div className={`${styles.diagnosisItem} ${activeTab === 0 && styles.activeTab}`} onClick={() => setActiveTab(0)}>Basic Details</div>
        <div className={`${styles.diagnosisItem} ${activeTab === 1 && styles.activeTab}`} onClick={() => setActiveTab(1)}>Diagnosis</div>
        <div className={`${styles.diagnosisItem} ${activeTab === 2 && styles.activeTab}`} onClick={() => setActiveTab(2)}>Prescription</div>
      </div>
      {activeTab === 0 && <BasicDetails patient={{...currentPatient?.data, patientId}} />}
      {activeTab === 1 && <DiagnosisDetails />}
      {activeTab === 2 && <Prescription patient={{...currentPatient?.data, patientId}} />}
    </div>
  )
}

export default Patient;