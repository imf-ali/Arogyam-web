const SelectWithOptions = ({ sectionId, question, formData, handleChange }) => {
  return (
    <>
      <label>
        {question.question}
        {question.isRequired && <span >*</span>}
      </label>
      <select
        value={formData[sectionId]?.[question.id] || ""}
        onChange={(e) =>
          handleChange(sectionId, question.id, e.target.value)
        }
        required={question.isRequired}
      >
        <option value="">Select an option</option>
        {question.options && question.options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </>
  )
}

export default SelectWithOptions;