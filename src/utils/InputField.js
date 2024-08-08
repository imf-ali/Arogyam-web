import styles from '../styles/utils/Input.module.css';

const InputField = ({ labelName, inputType, placeholderText }) => {
  return (
    <div className={styles.inputDiv}>
      <label>{labelName}</label>
      <input type={inputType} placeholder={placeholderText} />
    </div>
  );
}

export default InputField;