import InputFieldNew from "../../utils/InputFieldNew";

const PrescriptionItem = ({ index, state, medicineKeys, handleInputChange }) => {
  return (
    <div>
      <h3>Prescription Item</h3>
      <div>
        {medicineKeys.map((key) => (
          <div key={key}>
            <InputFieldNew
              labelName={key}
              placeholderText={`Enter the ${key}`}
              value={state[key]}
              onChange={(e) => handleInputChange(index, key, e.target.value)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default PrescriptionItem;