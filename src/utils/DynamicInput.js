import { useState } from "react";
import styles from '../styles/utils/DynamicInput.module.css';

const DynamicInput = ({ labelName }) => {
  const [values, setValues] = useState([""]);

  const handleChange = (index, event) => {
    const newValues = [...values];
    newValues[index] = event.target.value;
    setValues(newValues);
  };

  const addInput = () => {
    setValues([...values, ""]);
  };

  return (
    <div className={styles.dynamicInput}>
      <label>{labelName}</label>
      {values.map((value, index) => (
        <input 
          key={index}
          type="text" 
          placeholder={`Value ${index + 1}`}
          value={value}
          onChange={(e) => handleChange(index, e)}
        />
      ))}
      <button onClick={addInput}>+ Add More</button>
    </div>
  );
}

export default DynamicInput;