import { useState } from 'react';
import styles from '../styles/utils/EditableDiv.module.css';
import { BsThreeDotsVertical } from "react-icons/bs";
import { useDispatch } from 'react-redux';
import { deleteClinicData } from '../store/WebDataStore/WebDataApi';

const EditableDiv = ({ text }) => {
  const dispatch = useDispatch();
  const [showDelete, setShowDelete] = useState(false);

  const toggleDelete = () => {
    setShowDelete(!showDelete);
  }

  const handleDelete = (e) => {
    e.preventDefault();
    dispatch(deleteClinicData({ descBody: text }));
  }

  return (
    <div className={styles.editDiv}>
      {text}
      <div className={styles.dotsDiv} onClick={toggleDelete}>
        <BsThreeDotsVertical />
      </div>
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
  )
}

export default EditableDiv;