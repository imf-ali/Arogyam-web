import QuestionItem from "./QuestionItem";

const Questions = ({ section, handleChange, formData }) => {
  return (
    <>
      {section.questions.map((question) => (
        <QuestionItem 
          key={question.questionId}
          sectionId={section.sectionId}
          question={question} 
          formData={formData} 
          handleChange={handleChange}
        />
      ))}
    </>
  )
}

export default Questions;