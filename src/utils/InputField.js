import styles from '../styles/utils/Input.module.css';

const InputField = ({ labelName, inputType, placeholderText, value, setText }) => {
  return (
    <div className={styles.inputDiv}>
      <label>{labelName}</label>
      <input 
        type={inputType} 
        placeholder={placeholderText} 
        value={value}
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  );
}

export default InputField;