import InputFieldNew from "../../../utils/InputFieldNew";
import SegmentedSelect from "./SegmentedSelect";
import SelectTypeQues from "./SelectTypeQues";

const QuestionItem = ({ sectionId, question, formData, handleChange }) => {
  return (
    <div key={question.id} >
      {question.type === "text" && (
        <InputFieldNew 
          labelName={question.question} 
          inputType="text" 
          value={formData[sectionId]?.[question.id] || ""}
          onChange={(e) =>
            handleChange(sectionId, question.id, e.target.value)
          }
          required={question.isRequired}
        />
      )}
      {question.type === "select" && (
        <SelectTypeQues 
          sectionId={sectionId} 
          question={question} 
          formData={formData} 
          handleChange={handleChange} 
        />
      )}
      {question.type === "segmented_select" && (
        <SegmentedSelect 
          sectionId={sectionId} 
          question={question} 
          formData={formData} 
          handleChange={handleChange} 
        />
      )}
    </div>
  ) 
}

export default QuestionItem;