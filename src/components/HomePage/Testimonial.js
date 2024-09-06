import styles from '../../styles/HomePage/Testimonial.module.css';
import leftQuote from '../../assets/leftQuote.png';
import rightQuote from '../../assets/rightQuote.png';
import leftArrow from '../../assets/leftArrow.png';
import rightArrow from '../../assets/rightArrow.png';
import profilePic from '../../assets/testingPic.png';
import { useEffect, useState } from 'react';

const Testimonial = ({ name, desc, imageUrl }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [leftImageSrc, setLeftImageSrc] = useState(leftArrow);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    if (windowWidth < 900) {
      setLeftImageSrc(rightArrow);
    } else {
      setLeftImageSrc(leftArrow);
    }
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [windowWidth]);

  return (
    <div className={styles.testimonialDiv}>
      <div className={styles.dataContainer}>
        <div className={styles.data}>
          <div className={styles.leftQuote}>
            <img src={leftQuote} alt='left quote' />
          </div>
          <div className={styles.textContainer}>
            <div className={styles.text}>{desc}</div>
            <div className={styles.name}>{name}</div>
          </div>
          <div className={styles.rightQuote}>
            <img src={rightQuote} alt='right quote' />
          </div>
        </div>
      </div>
      <div className={styles.imageDiv}>
        <img src={imageUrl} alt='testimonial' />
      </div>
      <div className={styles.arrowDiv}>
        <div className={styles.leftArrow}>
          <img src={leftImageSrc} alt='left arrow' />
        </div>
        <div className={styles.rightArrow}>
          <img src={rightArrow} alt='right arrow' />
        </div>
      </div>
    </div>
  );
}

export default Testimonial;