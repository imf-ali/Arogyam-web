import { useNavigate } from 'react-router-dom';
import styles from '../../styles/AdminPage/Appointments.module.css';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { updateAppointment } from '../../store/AdminDataStore/AdminDataApi';

const CurrentAppointments = ({ active, appointments }) => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const filteredAppointments = appointments.filter(appointment => appointment.status === active);

  const handleClick = (appointment) => {
    const { _id, patientId, status } = appointment;
    if (status === 'BOOKED') {
      dispatch(updateAppointment({ appointmentId: _id, status: 'WAITING' }))
    }
    navigate(`/admin/patient/${patientId}`);
  }

  return (
    <div>
      {filteredAppointments.length !== 0 ? (
        <div className={styles.appointmentHeader}>
          <div className={styles.patientId}>Id</div>
          <div className={styles.name}>Name</div>
          <div className={styles.phone}>Phone</div>
          <div className={styles.paid}>Paid</div>
          <div className={styles.appointmentTime}>Appointment Time</div>
        </div>
      ) : (
        <div className={styles.noAppointments}>No appointments found for the selected status</div>
      )}
      {filteredAppointments.map((appointment, index) => (
        <div className={styles.appointmentItem} key={index} onClick={() => handleClick(appointment)}>
          <div className={styles.patientId}>{appointment.patientId}</div>
          <div className={styles.name}>{appointment.name}</div>
          <div className={styles.phone}>{appointment.phone}</div>
          <div className={styles.paid}>{appointment.isPaid ? 'YES' : 'NO'}</div>
          <div className={styles.appointmentTime}>{moment(appointment.appointmentTime).subtract(11, 'hours').format('LT')}</div>
        </div>
      ))}
    </div>
  )
}

export default CurrentAppointments; 