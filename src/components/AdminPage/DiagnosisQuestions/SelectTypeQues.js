import OtherOptions from "./OtherOptions";
import SelectWithOptions from "./SelectWithOptions";

const SelectTypeQues = ({ sectionId, question, formData, handleChange }) => {
  return (
    <div>
      <SelectWithOptions 
        sectionId={sectionId} 
        question={question}
        formData={formData}
        handleChange={handleChange} 
      />
      {question.otherOption && (
        <OtherOptions 
          sectionId={sectionId} 
          question={question}
          formData={formData}
          handleChange={handleChange}
        />
      )}
    </div>
  )
}

export default SelectTypeQues;