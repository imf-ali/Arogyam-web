import styles from '../../../styles/AdminPage/Diagnosis.module.css';
import OtherOptions from './OtherOptions';

const SelectWithOptions = ({ sectionId, question, formData, handleChange }) => {
  return (
    <div className={styles.inputBoxDiv}>
      <div className={styles.labelDiv}>
        <label>
          {question.question}
          {question.isRequired && <span >*</span>}
        </label>
      </div>
      <div className={styles.inputDiv}>
        <div>
          <select
            value={formData[sectionId]?.[question.id] || ""}
            onChange={(e) =>
              handleChange(sectionId, question.id, e.target.value)
            }
            required={question.isRequired}
          >
            <option value="">Select an option</option>
            {question.options && question.options.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        {question.otherOption && (
        <OtherOptions
          sectionId={sectionId} 
          question={question}
          formData={formData}
          handleChange={handleChange}
        />
      )}
      </div>
    </div>
  )
}

export default SelectWithOptions;