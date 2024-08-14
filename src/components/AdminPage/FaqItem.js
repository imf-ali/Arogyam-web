import { BsThreeDotsVertical } from "react-icons/bs";
import styles from '../../styles/AdminPage/Managefaq.module.css';

const FaqItem = ({ question, answer }) => {
  return (
    <div className={styles.faqDiv}>
      <div className={styles.dataDiv}>
        <div className={styles.question}>{question}</div>
        <div className={styles.answer}>{answer}</div>
      </div>
      <div className={styles.threeDots}>
        <BsThreeDotsVertical />
      </div>
    </div>
  )
}

export default FaqItem;