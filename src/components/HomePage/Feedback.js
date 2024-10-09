import { useState } from 'react';
import styles from '../../styles/HomePage/Feedback.module.css';
import FeedbackModal from './FeedbackModal';

const Feedback = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <div className={styles.headingDiv} onClick={() => setShowModal(!showModal)}>
        <div>Give your feedback</div>
      </div>
      {showModal && <FeedbackModal setShowModal={setShowModal} />}
    </>
  )
}

export default Feedback;