import { useSelector } from "react-redux";
import { webState } from "../../store/WebDataStore/WebDataContext";
import Testimonial from "./Testimonial";
import styles from '../../styles/HomePage/Testimonial.module.css';
import { useCallback, useEffect, useState } from "react";

const PatientVoice = () => {
  const { feedbacks } = useSelector(webState);
  const [index, setIndex] = useState(0);

  const checkNumber = useCallback((number) => {
    if (number > feedbacks.length - 1) {
      return 0;
    } else if (number < 0) {
      return feedbacks.length - 1;
    }
    return number;
  }, [feedbacks]);

  const nextImage = useCallback(() => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  }, [checkNumber]);

  const prevImage = useCallback(() => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  }, [checkNumber]);

  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 4000);

    return () => clearInterval(interval);
  }, [nextImage]);

  const frontItem = (direction) => {
    if (direction) nextImage();
    else prevImage();
  };

  return (
    <>
      <div className={styles.headingContainer}>
        <h2 className={styles.heading}>PATIENT'S VOICE</h2>
      </div>
      <Testimonial {...feedbacks[index]} frontItem={frontItem} />
    </>
  )
}

export default PatientVoice;