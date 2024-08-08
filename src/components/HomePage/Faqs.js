import { useSelector } from "react-redux";
import { webState } from "../../store/WebDataContext";
import FaqItem from "./FaqItem";
import styles from '../../styles/HomePage/Faq.module.css';

const Faqs = () => {
  const { faqs } = useSelector(webState);
  return (
    <div>
      <div className={styles.headingDiv}>
        <h2>FAQs</h2>
      </div>
      <div className={styles.faqList}>
        {faqs.map((data, ind) => <FaqItem key={ind} {...data} index={ind} />)}
      </div>
    </div>
  );
}

export default Faqs;