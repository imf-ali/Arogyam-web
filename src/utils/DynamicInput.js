import styles from '../styles/utils/DynamicInput.module.css';

const DynamicInput = ({ labelName, values, handleInputChange }) => {

  const handleChange = (index, event) => {
    const newValues = [...values];
    newValues[index] = event.target.value;
    handleInputChange(labelName.toLowerCase(), newValues);
  };

  const addInput = () => {
    const newValues = [...values, ""];
    handleInputChange(labelName.toLowerCase(), newValues);
  };

  return (
    <div className={styles.dynamicInput}>
      <label>{labelName}</label>
      {values?.map((value, index) => (
        <input 
          key={index}
          type="text" 
          placeholder={`${labelName} ${index + 1}`}
          value={value}
          onChange={(e) => handleChange(index, e)}
        />
      ))}
      <button onClick={addInput}>+ Add More</button>
    </div>
  );
}

export default DynamicInput;