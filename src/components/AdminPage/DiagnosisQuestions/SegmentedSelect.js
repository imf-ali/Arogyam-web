import { useState } from "react";

const SegmentedSelect = ({ sectionId, question, formData, handleChange  }) => {
  const [segment, setSegment]  = useState("")
  const [subSegment, setSubSegment]  = useState("")
  const [subSubsegment, setSubSubSegment]  = useState("")

  return (
    <>
      <div>
        <label>{question.question}</label>
        <select
          value={segment}
          onChange={(e) =>
            setSegment(e.target.value)
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
      </div>
      {segment && question.sub_segment && question.sub_segment.options[segment] && (
        <div>
          <label>{question.sub_segment.question}</label>
          <select
            value={subSegment}
            onChange={(e) => setSubSegment(e.target.value)}
          >
            <option value="">Select a sub-segment</option>
            {question.sub_segment.options[segment].map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      )}
      {subSegment && question.sub_sub_segment && question.sub_sub_segment.options[subSegment] && (
        <div>
          <label>{question.sub_sub_segment.question}</label>
          <select
            value={subSubsegment}
            onChange={(e) => setSubSubSegment(e.target.value)}
          >
            <option value="">Select a sub-sub-segment</option>
            {question.sub_sub_segment.options[subSegment].map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      )}
    </>
  );
}

export default SegmentedSelect;