import styles from '../../styles/HomePage/HomeBody.module.css';
import Button from '../../utils/Button';

const AppointmentModal = ({ setShowModal, date, time, status, position }) => {
  return (
    <>
      <div className={styles.backdrop} onClick={() => setShowModal(false)} />
      <div className={styles.modalTwo} >
        <div className={styles.modalHeading}>Appointment Details</div>
        <div className={styles.appointmentData}>
          <div className={styles.smallText}>Date: {date}</div>
          <div className={styles.smallText}>Time: {time}</div>
          <div className={styles.smallText}>Status: {status}</div>
          <div className={styles.smallText}>Position: {position}</div>
          <div className={styles.closeBtn}>
            <Button text='Close' width='30%' handleClick={() => setShowModal(false)} />
          </div>
        </div>
      </div>
    </>
  )
}

export default AppointmentModal;