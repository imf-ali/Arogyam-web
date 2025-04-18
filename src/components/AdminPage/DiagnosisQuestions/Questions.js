import QuestionItem from "./QuestionItem";

const Questions = ({ section, handleChange, formData }) => {
  return (
    <>
      {section.questions.map((question, ind) => (
        <QuestionItem 
          key={ind}
          sectionId={section.sectionId}
          sectionTitle={section.sectionTitle}
          question={question} 
          formData={formData} 
          handleChange={handleChange}
        />
      ))}
    </>
  )
}

export default Questions;