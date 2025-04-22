import Questions from "./Questions";

const SectionItem = ({ section, handleChange, formData }) => {
  return (
      <div key={section.sectionId}>
        <Questions 
          section={section} 
          handleChange={handleChange} 
          formData={formData} 
        />
      </div>
  )
}

export default SectionItem;