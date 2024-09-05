import { useSelector } from "react-redux";
import { webState } from "../../store/WebDataStore/WebDataContext";
import FaqItem from "./FaqItem";
import styles from '../../styles/HomePage/Faq.module.css';
import { useState } from "react";

const Faqs = () => {
  const { faqs } = useSelector(webState);
  const [openFaq, setOpenFaq] = useState(-1);

  const handleToggleFaq = (index) => {
    setOpenFaq(openFaq === index ? -1 : index);
  }

  return (
    <div>
      <div className={styles.headingDiv}>
        <h2>FAQs</h2>
      </div>
      <div className={styles.faqList}>
        {faqs.map((data, ind) => (
          <FaqItem
            key={ind}
            {...data}
            index={ind}
            openFaq={openFaq}
            handleToggleFaq={handleToggleFaq}
          />
        ))}
      </div>
    </div>
  );
}

export default Faqs;