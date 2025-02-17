import React, { useState } from 'react';
import styles from '../styles/utils/DynamicObjectInput.module.css';

const DynamicObjectInput = ({ labelName, medicineKeys }) => {
  const initialObject = medicineKeys.reduce((acc, key) => {
    acc[key] = '';
    return acc;
  }, {});

  const [inputs, setInputs] = useState([initialObject]);

  const handleInputChange = (index, key, value) => {
    const newInputs = [...inputs];
    newInputs[index][key] = value;
    setInputs(newInputs);
  };

  const addMoreFields = () => {
    setInputs(prevState => [...prevState, initialObject]);
  };

  return (
    <div className={styles.mainDiv}>
      <label>{labelName}</label>
      <table>
        <thead>
          <tr>
            {medicineKeys.map((key) => (
              <th key={key}>{key}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {inputs.map((input, index) => (
            <tr key={index}>
              {medicineKeys.map((key) => (
                <td key={key}>
                  <input
                    type="text"
                    value={input[key]}
                    onChange={(e) => handleInputChange(index, key, e.target.value)}
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={addMoreFields}>Add More</button>
    </div>
  );
};

export default DynamicObjectInput;