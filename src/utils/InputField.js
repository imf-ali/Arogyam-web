import styles from '../styles/utils/Input.module.css';

const InputField = ({ labelName, inputType, placeholderText, value, setText, target = null, isTextArea = false }) => {
  
  if(isTextArea) {
    return (
      <div className={styles.inputDiv}>
        <label>{labelName}</label>
        <textarea 
          rows={7}
          placeholder={placeholderText} 
          value={value}
          onChange={(e) => setText(e.target.value, target)}
        />
      </div>
    )
  }
  
  return (
    <div className={styles.inputDiv}>
      <label>{labelName}</label>
      <input 
        type={inputType} 
        placeholder={placeholderText} 
        value={value}
        onChange={(e) => setText(e.target.value, target)}
      />
    </div>
  );
}

export default InputField;