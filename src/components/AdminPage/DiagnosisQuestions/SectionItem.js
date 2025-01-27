import Questions from "./Questions";
import styles from '../../../styles/AdminPage/Diagnosis.module.css';

const SectionItem = ({ section, handleChange, formData }) => {
  return (
      <div key={section.sectionId}>
        <h2 className={styles.heading}>{section.sectionTitle}</h2>
        <Questions 
          section={section} 
          handleChange={handleChange} 
          formData={formData} 
        />
      </div>
  )
}

export default SectionItem;