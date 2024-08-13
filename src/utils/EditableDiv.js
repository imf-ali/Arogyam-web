import styles from '../styles/utils/EditableDiv.module.css';
import { BsThreeDotsVertical } from "react-icons/bs";

const EditableDiv = ({ text }) => {
  return (
    <div className={styles.editDiv}>
      {text}
      <div className={styles.dotsDiv}>
        <BsThreeDotsVertical />
      </div>
    </div>
  )
}

export default EditableDiv;