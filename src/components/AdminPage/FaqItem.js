import { BsThreeDotsVertical } from "react-icons/bs";
import styles from '../../styles/AdminPage/Managefaq.module.css';
import { useDispatch } from "react-redux";
import { useState } from "react";
import { deleteClinicData } from "../../store/AdminDataStore/AdminDataApi";

const FaqItem = ({ question, answer, _id }) => {
  const dispatch = useDispatch();
  const [showDelete, setShowDelete] = useState(false);

  const toggleDelete = () => {
    setShowDelete(!showDelete);
  }

  const handleDelete = (e) => {
    e.preventDefault();
    dispatch(deleteClinicData({ faq: _id }));
  }

  return (
    <div className={styles.faqDiv}>
      <div className={styles.dataDiv}>
        <div className={styles.question}>{question}</div>
        <div className={styles.answer}>{answer}</div>
      </div>
      <div className={styles.threeDots} onClick={toggleDelete}>
        <BsThreeDotsVertical />
        {
          showDelete && (
            <div
              className={styles.popUp}
              onClick={handleDelete}
            >
              Delete
            </div>
          )
        }
      </div>
    </div>
  )
}

export default FaqItem;