import { useEffect, useMemo, useReducer } from "react";
import DynamicInput from "../../utils/DynamicInput";
import InputField from "../../utils/InputField";
import DynamicObjectInput from "../../utils/DynamicObjectInput";
import styles from '../../styles/AdminPage/Prescription.module.css';
import Button from "../../utils/Button";
import { useDispatch } from "react-redux";
import { generatePrescription, updateAppointment, updatePrescriptionData } from "../../store/AdminDataStore/AdminDataApi";
import { convertFromISOIST, convertToISOIST } from "../../utils/Helper";

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

  const initialState = useMemo(() => ({
      patient: patient.patient,
      diagnosis: [''],
      complaints: [''],
      findings: [''],
      prescriptionItems: [{
        dosage: '',
        drugName: '',
        period: '',
        potency: '',
        qty: '',
        remarks: '',
        repetition: ''
      }],
      advice: [''],
      followUpDate: null,
  }), [patient]);

  const [state, dispatchReducer] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatchReducer({ type: 'RESET', payload: {
        patient: patient.patient,
        diagnosis: (patient.diagnosis && patient.diagnosis.length) ? patient.diagnosis : initialState.diagnosis,
        complaints: (patient.complaints && patient.complaints.length) ? patient.complaints : initialState.complaints,
        findings: (patient.findings && patient.findings.length) ? patient.findings : initialState.findings,
        prescriptionItems: (patient.prescriptionItems && patient.prescriptionItems.length) ? patient.prescriptionItems : initialState.prescriptionItems,
        advice: (patient.advice && patient.advice.length) ? patient.advice : initialState.advice,
        followUpDate: patient.followUpDate ? convertFromISOIST(patient.followUpDate).date : initialState.followUpDate,
      } 
    });
  }, [patient, initialState]);

  const handleInputChange = (value, field) => {
    dispatchReducer({ type: 'SET_FIELD', field, value });
  };

  const handleSaveDetails = () => {
    var followUpDate = null;
    if (state.followUpDate != null) {
      followUpDate = convertToISOIST(state.followUpDate, '00:00 AM');
    }
    dispatch(updatePrescriptionData({ id: patient.prescriptionId, ...state, followUpDate }));
  };

  const handleCompleted = (e) => {
    e.preventDefault();
    if (patient.appointmentStatus === 'INPROGRESS') {
      dispatch(updateAppointment({ appointmentId: patient.appointmentId, status: 'VISITED' }))
      dispatch(generatePrescription({ patientId: patient.patient.patientId }));
    }
  }
  
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
      <DynamicObjectInput 
        labelName="Prescription" 
        values={state?.prescriptionItems} 
        objectKeys={['drugName', 'potency', 'dosage', 'repetition', 'qty', 'period', 'remarks']} 
        target='prescriptionItems'
        handleInputChange={handleInputChange} 
      />
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
          value={state?.followUpDate || ''}
          target={'followUpDate'}
          setText={handleInputChange}
        />
      </div>
      <div className={styles.btnDiv}>
        <Button 
          width='20%' 
          backgroundColor='#3C6B3D'
          text='Save Prescription' 
          handleClick={handleSaveDetails} 
        />
        <Button
          text="Mark Visited"
          backgroundColor='#3c6b3d'
          width='20%'
          handleClick={handleCompleted}
        />
      </div>
    </div>
  )
}

export default Prescription;