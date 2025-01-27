import styles from '../../styles/AdminPage/Diagnosis.module.css';

const TextInputField = ({ labelName, value, onChange, required }) => {
  return (
    <div className={styles.inputBoxDiv}>
      <div className={styles.labelDiv}>
        <label>{labelName} {required && <span className='required'>*</span>}</label>  
      </div>
      <div className={styles.inputDiv}>
        <input type='text' value={value} onChange={onChange} />
      </div>
    </div>
  )
}

export default TextInputField;