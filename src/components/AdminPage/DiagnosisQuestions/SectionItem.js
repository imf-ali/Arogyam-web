import Questions from "./Questions";

const SectionItem = ({ section, handleChange, formData }) => {
  return (
      <div key={section.sectionId}>
        <h2>{section.sectionTitle}</h2>
        <Questions 
          section={section} 
          handleChange={handleChange} 
          formData={formData} 
        />
      </div>
  )
}

export default SectionItem;