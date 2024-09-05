import styles from '../../styles/HomePage/Faq.module.css';
import downWhite from '../../assets/downArrowWhite.png';
import downBlue from '../../assets/downArrowBlue.png';

const FaqItem = ({ question, answer, index, openFaq, handleToggleFaq }) => {

  return (
    <div className={`${styles.faqItem} ${openFaq === index && styles.openAns}`} >
      <div className={styles.questionDiv}>
        <div className={`${styles.question} ${index % 2 && `${styles.evenItem}`}`}>{question}</div>
        <div className={`${styles.imageDiv} ${index % 2 && `${styles.evenItem}`}`}>
          <img className={styles.arrow} onClick={() => handleToggleFaq(index)} src={index % 2 ? downWhite : downBlue} alt='down-blue' />
        </div>
      </div>
      <div className={`${styles.answer}`}>{answer}</div>
    </div>
  )
}

export default FaqItem;