const InputField = ({ labelName, inputType, placeholderText }) => {
  return (
    <>
      <label>{labelName}</label>
      <input type={inputType} placeholder={placeholderText} />
    </>
  );
}

export default InputField;