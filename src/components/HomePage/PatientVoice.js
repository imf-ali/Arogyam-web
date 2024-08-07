import { useSelector } from "react-redux";
import { webState } from "../../store/WebDataContext";
import Testimonial from "./Testimonial";

const PatientVoice = () => {
  const { testimonials } = useSelector(webState);

  return (
    <>
      <h2>Patient's Voice</h2>
      {testimonials.map((data, ind) => <Testimonial key={ind} {...data} />)}
    </>
  )
}

export default PatientVoice;