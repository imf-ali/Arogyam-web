import { useMemo, useReducer, useState } from "react";
import InputFieldNew from "../../utils/InputFieldNew";
import DynamicInput from "../../utils/DynamicInput";
import InputField from "../../utils/InputField";
import DynamicObjectInput from "../../utils/DynamicObjectInput";
import styles from '../../styles/AdminPage/Prescription.module.css';

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

const Prescription = () => {

  const [date, setDate] = useState('');

  const initialState = useMemo(() => ({
      diagnosis: '',
  }), []);

  const [state, dispatchReducer] = useReducer(reducer, initialState);

  const handleInputChange = (field, value) => {
    dispatchReducer({ type: 'SET_FIELD', field, value });
  };
  
  return (
    <div className={styles.parentDiv}>
      <InputFieldNew
        labelName="Diagnosis"
        placeholderText="Enter the diagnosis"
        value={state.diagnosis}
        onChange={(e) => handleInputChange('diagnosis', e.target.value)}
      />
      <div className={styles.multiInput}>
        <DynamicInput labelName="Complaints" />
        <DynamicInput labelName="Findings" />
      </div>
      <DynamicObjectInput labelName="Prescription" medicineKeys={['drugName', 'potency', 'dosage', 'repetition', 'qty', 'period', 'remarks']} />
      <DynamicInput labelName="Advice" />
      <div className={styles.followUp}>
        <InputField
          inputType='date' 
          placeholderText='Follow up date' 
          labelName='Follow up date' 
          value={date}
          setText={setDate}
        />
      </div>
    </div>
  )
}

export default Prescription;