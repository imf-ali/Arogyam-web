import React from 'react';
import styles from '../styles/utils/DynamicObjectInput.module.css';

const DynamicObjectInput = ({ labelName, objectKeys, values, target, handleInputChange }) => {

  const initialObject = objectKeys.reduce((acc, key) => {
    acc[key] = '';
    return acc;
  }, {});

  const handleChange = (index, key, value) => {
    const newInputs = [...values];
    newInputs[index][key] = value;
    handleInputChange(newInputs, target);
  };

  const addMoreFields = () => {
    const newInputs = [...values, initialObject];
    handleInputChange(newInputs, target);
  };

  return (
    <>
      <div className={styles.mainDiv}>
        <label>{labelName}</label>
        <table className={styles.tableDiv}>
          <thead>
            <tr>
              {objectKeys.map((key) => (
                <th key={key}>{key}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {values.map((input, index) => (
              <tr key={index}>
                {objectKeys.map((key) => (
                  <td key={key}>
                    <input
                      className={styles.inputField}
                      type="text"
                      value={input[key]}
                      onChange={(e) => handleChange(index, key, e.target.value)}
                    />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button className={styles.btn} onClick={addMoreFields}>Add More</button>
    </>
  );
};

export default DynamicObjectInput;