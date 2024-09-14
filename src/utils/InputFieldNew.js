import styles from '../styles/utils/InputFieldNew.module.css';

const InputFieldNew = ({ labelName, placeholderText, value, onChange }) => {
  return (
    <div className={styles.inputDiv}>
      <label>{labelName}</label>
      <input type="text" placeholder={placeholderText} value={value} onChange={onChange} />
    </div>
  )
}

export default InputFieldNew;