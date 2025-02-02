import React, { useState } from 'react';
import PrescriptionItem from '../components/AdminPage/PrescriptionItem';

const DynamicObjectInput = ({ labelName, medicineKeys }) => {

  const initialObject = medicineKeys.reduce((acc, key) => {
    acc[key] = '';
    return acc;
  }, {});

  const [totalObjects, setTotalObjects] = useState([initialObject]);

  const handleInputChange = (index, key, value) => {
    const newInputs = [...totalObjects];
    newInputs[index][key] = value;
    setTotalObjects(newInputs);
  };

  const addMoreFields = () => {
    setTotalObjects(prevState => [...prevState, initialObject]);
  };

  return (
    <>
      <label>{labelName}</label>
      {totalObjects.map((object, index) => {
        return (
          <PrescriptionItem
            state={object}
            key={index}
            index={index}
            medicineKeys={medicineKeys}
            handleInputChange={handleInputChange}
          />
        );
      })}
      <button onClick={addMoreFields}>Add More</button>
    </>
  );
};

export default DynamicObjectInput;