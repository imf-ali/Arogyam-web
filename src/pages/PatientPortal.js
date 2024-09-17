import { useReducer, useState } from 'react';
import styles from '../styles/PatientPortal/portal.module.css';
import Button from '../utils/Button';
import InputField from '../utils/InputField';
import { loginPatientPortal } from '../store/api';
import MessageCard from '../utils/MessageCard';

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_FIELD':
      return {
        ...state,
        [action.field]: action.value,
      };
    case 'RESET':
      return action.payload;
    default:
      return state;
  }
}

const PatientPortal = () => {

  const [state, dispatch] = useReducer(reducer, {
    patientId: '',
    phone: ''
  })
  const [error, setError] = useState(undefined);
  const [patient, setPatient] = useState();

  const handleInputChange = (value, field) => {
    dispatch({ type: 'SET_FIELD', field, value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await loginPatientPortal(state.patientId, state.phone);
    if (res.status !== 200)
      setError(res.data.message);
    else {
      setError(undefined);
      setPatient(res.data);
    }
  }

  return (
    <>
      {!patient && (
        <div className={styles.patientPortal}>
          {error && <MessageCard isError={true} message={error} />}
          <div className={styles.header}>Patient Portal</div>
          <InputField
            labelName="Patient-Id"
            placeholderText="Enter the patient Id from prescription"
            value={state.patientId}
            setText={handleInputChange}
            target="patientId"
          />
          <InputField
            labelName="Phone"
            inputType="number"
            placeholderText="Enter the phone number of the appointment"
            value={state.phone}
            setText={handleInputChange}
            target="phone"
          />
          <div className={styles.btnDiv}>
            <Button text="Get Details" width='50%' handleClick={handleSubmit} />
          </div>
        </div>
      )}
      {patient && (
        <div className={styles.patientDetails}>
          <div className={styles.header}>Patient Details</div>
          <div className={styles.patient}>
            <div className={styles.rowItem}>
              <div className={styles.rowName}>Patient-Id:</div>
              <div>{patient.patientId}</div>
            </div>
            <div className={styles.rowItem}>
              <div className={styles.rowName}>Name:</div>
              <div>{patient.name}</div>
            </div>
            <div className={styles.rowItem}>
              <div className={styles.rowName}>Phone:</div>
              <div>{patient.phone}</div>
            </div>
            <div className={styles.rowItem2}>
              <div className={styles.rowName}>Visited prescriptions</div>
              <div>
                {patient.visitedPrescriptionUrls.map((prescription) => (
                  <div>
                    <a href={prescription} target="_blank" rel="noopener noreferrer">
                      View Prescription
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default PatientPortal;