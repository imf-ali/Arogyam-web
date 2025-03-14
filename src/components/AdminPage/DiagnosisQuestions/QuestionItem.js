import TextInputField from "../../CustomComponents/TextInputField";
import SegmentedSelect from "./SegmentedSelect";
import SelectTypeQues from "./SelectTypeQues";
import styles from '../../../styles/AdminPage/Diagnosis.module.css';

const QuestionItem = ({ sectionId, sectionTitle, question, formData, handleChange }) => {
  return (
    <div key={question.id} >
      {question.type === "text" && (
        <TextInputField 
          labelName={question.question} 
          value={
            formData.find(data => data.sectionId === sectionId)?.questions.find(ques => ques.id === question.id)?.answer || ""
          }
          onChange={(e) =>
            handleChange(sectionId, sectionTitle, question.id, question.question, e.target.value)
          }
          required={question.isRequired}
        />
      )}
      {question.type === "select" && (
        <SelectTypeQues 
          sectionId={sectionId} 
          sectionTitle={sectionTitle}
          question={question} 
          formData={formData} 
          handleChange={handleChange} 
        />
      )}
      {question.type === "segmented_select" && (
        <SegmentedSelect 
          sectionId={sectionId} 
          sectionTitle={sectionTitle}
          question={question} 
          formData={formData} 
          handleChange={handleChange} 
        />
      )}
      {question.type === "multiSelect" && (
        <>
          <label className={styles.multiSelectLabel}>{question.question}</label>
          {question.followUp.map((ques, ind) => (
            <QuestionItem 
              key={ind}
              sectionId={sectionId}
              sectionTitle={sectionTitle}
              question={ques} 
              formData={formData} 
              handleChange={handleChange}
            />
          ))}
        </>
      )}
    </div>
  ) 
}

export default QuestionItem;