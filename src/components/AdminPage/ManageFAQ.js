import { useDispatch, useSelector } from "react-redux";
import { webState } from "../../store/WebDataStore/WebDataContext";
import FaqItem from "./FaqItem";
import styles from '../../styles/AdminPage/Managefaq.module.css';
import InputField from "../../utils/InputField";
import Button from "../../utils/Button";
import { useState } from "react";
import { updateClinicData } from "../../store/AdminDataStore/AdminDataApi";

const ManageFAQ = () => {
  const { faqs } = useSelector(webState);
  const dispatch = useDispatch();
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');

  const handleClick = () => {
    dispatch(updateClinicData({ faqs: [{ question, answer }] }));
    setAnswer('');
    setQuestion('');
  }

  return (
    <div>
      <h2 className={styles.heading}>Manage FAQs</h2>
      {faqs.map((data, ind) => <FaqItem key={ind} {...data} />)}
      <div className={styles.inputData}>
        <InputField 
          inputType='text' 
          placeholderText='Write question' 
          labelName='Enter the question' 
          value={question}
          setText={setQuestion}
        />
        <InputField 
          inputType='text' 
          placeholderText='Write answer' 
          labelName='Enter the answer' 
          value={answer}
          setText={setAnswer}
        />
        <Button 
          text='Add the faq' 
          width='20%' 
          backgroundColor='#3c6b3d' 
          handleClick={handleClick}
        />
      </div>
    </div>
  )
}

export default ManageFAQ;