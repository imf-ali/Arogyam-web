import styles from '../../styles/HomePage/Testimonial.module.css';
import leftQuote from '../../assets/leftQuote.png';
import rightQuote from '../../assets/rightQuote.png';
import leftArrow from '../../assets/leftArrow.png';
import rightArrow from '../../assets/rightArrow.png';
import profilePic from '../../assets/testingPic.png';

const Testimonial = ({ name, testimonial, image_url }) => {
  return (
    <div className={styles.testimonialDiv}>
      <div className={styles.leftArrow}>
        <img src={leftArrow} alt='left arrow' />
      </div>
      <div className={styles.dataContainer}>
        <div className={styles.data}>
          <div>
            <img src={leftQuote} alt='left quote' />
          </div>
          <div className={styles.textContainer}>
            <div className={styles.text}>{testimonial}</div>
            <div className={styles.name}>{name}</div>
          </div>
          <div className={styles.rightQuote}>
            <img src={rightQuote} alt='right quote' />
          </div>
        </div>
      </div>
      <div className={styles.imageDiv}>
        <img src={profilePic} alt='testimonial' />
      </div>
      <div className={styles.rightArrow}>
        <img src={rightArrow} alt='right arrow' />
      </div>
    </div>
  );
}

export default Testimonial;