import { useSelector } from "react-redux";
import { webState } from "../../store/WebDataStore/WebDataContext";
import Testimonial from "./Testimonial";
// import { useState } from "react";
import styles from '../../styles/HomePage/Testimonial.module.css';

const PatientVoice = () => {
  const { testimonials } = useSelector(webState);
  // const [index, setIndex] = useState(0);

  return (
    <>
      <div className={styles.headingContainer}>
        <h2 className={styles.heading}>PATIENT'S VOICE</h2>
      </div>
      <Testimonial {...testimonials[0]} />
    </>
  )
}

export default PatientVoice;