import { useSelector } from "react-redux";
import { webState } from "../../store/WebDataContext";
import FaqItem from "./FaqItem";
import styles from '../../styles/AdminPage/Managefaq.module.css';
import InputField from "../../utils/InputField";
import Button from "../../utils/Button";

const ManageFAQ = () => {
  const { faqs } = useSelector(webState);
  return (
    <div>
      <h2 className={styles.heading}>Manage FAQs</h2>
      {faqs.map((data, ind) => <FaqItem key={ind} {...data} />)}
      <div className={styles.inputData}>
        <InputField inputType='text' placeholderText='Write question' labelName='Enter the question' />
        <InputField inputType='text' placeholderText='Write answer' labelName='Enter the answer' />
        <Button text='Add the faq' width='20%' backgroundColor='#3c6b3d' />
      </div>
    </div>
  )
}

export default ManageFAQ;