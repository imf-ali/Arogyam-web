import React, { useEffect, useMemo, useReducer } from "react";
import InputFieldNew from "../../utils/InputFieldNew";
import styles from '../../styles/AdminPage/PatientDetails.module.css';
import Button from "../../utils/Button";
import { useDispatch } from "react-redux";
import { savePrescriptionData, updatePrescriptionData } from "../../store/AdminDataStore/AdminDataApi";

const calculateBMI = (action, weight, heightInCm) => {
  let bmi;
  let heightInMeters;
  if(action.field === 'height') {
    heightInMeters = action.value / 100;
    bmi = weight / (heightInMeters * heightInMeters)
  } else {
    heightInMeters= heightInCm /100;
    bmi = action.value / (heightInMeters * heightInMeters)
  }
  return bmi.toFixed(2);
}

const precheckForBMI = (field, state) => {
  return (field === 'height' && state.weight) || (field === 'weight' && state.height);
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_FIELD':
      return {
        ...state,
        [action.field]: action.value,
        ...(precheckForBMI(action.field, state) && { bmi: calculateBMI(action, state.weight, state.height) })
      };
    case 'RESET':
      return action.payload;
    default:
      return state;
  }
};

const BasicDetails = ({ patient }) => {

  const dispatch = useDispatch();

  const initialState = useMemo(() => ({
    name: '',
    gender: '',
    phone: '',
    patientId: '',
    age: '',
    weight: '',
    height: '',
    bmi: '',
    bp: '',
    address: '',
  }), []);

  const [state, dispatchReducer] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatchReducer({ type: 'RESET', payload: patient || initialState });
  }, [patient, initialState]);

  const handleInputChange = (field, value) => {
    dispatchReducer({ type: 'SET_FIELD', field, value });
  };

  const handleSaveDetails = () => {
    if (!patient || patient.diagnosis.length) {
      dispatch(savePrescriptionData({ patient: state }));
    } else {
      dispatch(updatePrescriptionData({ id: patient.id, patient: state }));
    }
  };

  return (
    <div className={styles.basicDetails}>
      <div>
        <div className={styles.rowDiv}>
          <InputFieldNew
            labelName="Name"
            placeholderText="Enter the name"
            value={state.name}
            onChange={(e) => handleInputChange('name', e.target.value)}
          />
          <InputFieldNew
            labelName="Phone"
            placeholderText="Enter the phone number"
            value={state.phone}
            onChange={(e) => handleInputChange('phone', e.target.value)}
          />
          <InputFieldNew
            labelName="Gender"
            placeholderText="Enter the gender"
            value={state.gender}
            onChange={(e) => handleInputChange('gender', e.target.value)}
          />
          <InputFieldNew
            labelName="Age"
            placeholderText="Enter the age"
            value={state.age}
            onChange={(e) => handleInputChange('age', e.target.value)}
          />
        </div>
        <div className={styles.rowDiv}>
          <InputFieldNew
            labelName="Weight"
            placeholderText="Enter the weight"
            value={state.weight}
            onChange={(e) => handleInputChange('weight', e.target.value)}
          />
          <InputFieldNew
            labelName="Height"
            placeholderText="Enter the height"
            value={state.height}
            onChange={(e) => handleInputChange('height', e.target.value)}
          />
          <InputFieldNew
            labelName="BMI"
            placeholderText="Enter the BMI"
            value={state.bmi}
            onChange={(e) => handleInputChange('bmi', e.target.value)}
          />
          <InputFieldNew
            labelName="B.P."
            placeholderText="Enter the BP"
            value={state.bp}
            onChange={(e) => handleInputChange('bp', e.target.value)}
          />
        </div>
        <div className={styles.rowDiv}>
          <InputFieldNew
            labelName="Address"
            placeholderText="Enter the address"
            value={state.address}
            onChange={(e) => handleInputChange('address', e.target.value)}
          />
        </div>
      </div>
      <div className={styles.btnDiv}>
        <Button width='15%' text='Save details' handleClick={handleSaveDetails} />
      </div>
    </div>
  );
};

export default BasicDetails;