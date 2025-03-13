import styles from '../../../styles/AdminPage/Diagnosis.module.css';

const OtherOptions = ({ sectionId, sectionTitle, question, formData, handleChange }) => {
  return (
    <div className={styles.nestedInputBoxDiv}>
      <div className={styles.nestedLabelDiv}>
        <label >{question.otherOption.label}</label>
      </div>
      <div className={styles.nestedInputDiv}>
        <input
          type={question.otherOption.type}
          value={
            formData.find(data => data.sectionId === sectionId)?.questions.find(ques => ques.id === question.id)?.otherOption?.answer || ""
          }
          onChange={(e) =>
            handleChange(
              sectionId,
              sectionTitle,
              question.id,
              question.otherOption.label,
              e.target.value,
              true
            )
          }
        />
      </div>
    </div>
  )
}

export default OtherOptions;