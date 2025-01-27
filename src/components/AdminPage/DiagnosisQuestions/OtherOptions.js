import styles from '../../../styles/AdminPage/Diagnosis.module.css';

const OtherOptions = ({ sectionId, question, formData, handleChange }) => {
  return (
    <div className={styles.nestedInputBoxDiv}>
      <div className={styles.nestedLabelDiv}>
        <label >{question.otherOption.label}</label>
      </div>
      <div className={styles.nestedInputDiv}>
        <input
          type={question.otherOption.type}
          value={
            formData[sectionId]?.[`${question.id}_other`] || ""
          }
          onChange={(e) =>
            handleChange(
              sectionId,
              `${question.id}_other`,
              e.target.value
            )
          }
        />
      </div>
    </div>
  )
}

export default OtherOptions;