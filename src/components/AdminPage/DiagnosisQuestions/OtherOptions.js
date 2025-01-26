const OtherOptions = ({ sectionId, question, formData, handleChange }) => {
  return (
    <div >
      <label >{question.otherOption.label}</label>
      <input
        type={question.otherOption.type}
        value={
          formData[sectionId]?.[`${question.id}_other`] || ""
        }
        onChange={(e) =>
          handleChange(
            sectionId,
            `${question.id}_other`,
            e.target.value
          )
        }
      />
    </div>
  )
}

export default OtherOptions;