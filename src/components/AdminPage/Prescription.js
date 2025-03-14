import { useEffect, useMemo, useReducer, useState } from "react";
import DynamicInput from "../../utils/DynamicInput";
import InputField from "../../utils/InputField";
import DynamicObjectInput from "../../utils/DynamicObjectInput";
import styles from '../../styles/AdminPage/Prescription.module.css';
import Button from "../../utils/Button";
import { useDispatch } from "react-redux";
import { updatePrescriptionData } from "../../store/AdminDataStore/AdminDataApi";

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
};

const Prescription = ({ patient }) => {

  const dispatch = useDispatch();
  const [date, setDate] = useState('');

  const initialState = useMemo(() => ({
      patient: patient.patient,
      diagnosis: [''],
      complaints: [''],
      findings: [''],
      prescriptionItems: [],
      advice: [''],
      followUp: null,
  }), [patient]);

  const [state, dispatchReducer] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatchReducer({ type: 'RESET', payload: {
        patient: patient.patient,
        diagnosis: patient.diagnosis || initialState.diagnosis,
        complaints: patient.complaints || initialState.complaints,
        findings: patient.findings || initialState.findings,
        prescriptionItems: patient.prescriptionItems || initialState.prescriptionItems,
        advice: patient.advice || initialState.advice,
        followUp: patient.followUp || initialState.followUp,
      } 
    });
  }, [patient, initialState]);

  const handleInputChange = (field, value) => {
    dispatchReducer({ type: 'SET_FIELD', field, value });
  };

  const handleSaveDetails = () => {
    console.log(patient);
    dispatch(updatePrescriptionData({ id: patient.prescriptionId, ...state }));
  };
  
  return (
    <div className={styles.parentDiv}>
      <div className={styles.multiInput}>
        <DynamicInput 
          labelName="Diagnosis" 
          values={state?.diagnosis} 
          handleInputChange={handleInputChange} 
        />
      </div>
      <div className={styles.multiInput}>
        <DynamicInput 
          labelName="Complaints" 
          values={state?.complaints} 
          handleInputChange={handleInputChange} 
        />
        <DynamicInput 
          labelName="Findings" 
          values={state?.findings} 
          handleInputChange={handleInputChange} 
        />
      </div>
      <DynamicObjectInput labelName="Prescription" medicineKeys={['drugName', 'potency', 'dosage', 'repetition', 'qty', 'period', 'remarks']} />
      <DynamicInput 
        labelName="Advice" 
        values={state?.advice} 
        handleInputChange={handleInputChange} 
      />
      <div className={styles.followUp}>
        <InputField
          inputType='date' 
          placeholderText='Follow up date' 
          labelName='Follow up date' 
          value={date}
          setText={setDate}
        />
      </div>
      <div className={styles.btnDiv}>
        <Button width='15%' text='Save Prescription' handleClick={handleSaveDetails} />
      </div>
    </div>
  )
}

export default Prescription;