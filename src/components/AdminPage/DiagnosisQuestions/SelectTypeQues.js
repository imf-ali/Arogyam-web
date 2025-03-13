import SelectWithOptions from "./SelectWithOptions";

const SelectTypeQues = ({ sectionId, sectionTitle, question, formData, handleChange }) => {
  return (
    <div>
      <SelectWithOptions 
        sectionId={sectionId} 
        sectionTitle={sectionTitle}
        question={question}
        formData={formData}
        handleChange={handleChange} 
      />
    </div>
  )
}

export default SelectTypeQues;