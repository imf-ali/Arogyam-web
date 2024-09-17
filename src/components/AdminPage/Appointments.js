import { useEffect, useState } from 'react';
import styles from '../../styles/AdminPage/Appointments.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { adminState } from '../../store/AdminDataStore/AdminDataContext';
import CurrentAppointments from './CurrentAppointments';
import { getAllAppointments } from '../../store/AdminDataStore/AdminDataApi';

const Appointments = () => {

  const dispatch = useDispatch();
  const { appointments } = useSelector(adminState);
  const [active, setActive] = useState('BOOKED');
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);

  useEffect(() => {
    dispatch(getAllAppointments({ date, page: 1 }));
  }, [dispatch, date]);

  return (
    <div className={styles.appointments}>
      <div className={styles.appointmentHead}>
        <input 
          className={styles.date} 
          type='date'
          value={date}
          max={new Date(new Date().setDate(new Date().getDate() + 6)).toISOString().split('T')[0]}
          onChange={(e) => setDate(e.target.value)}
        />
        <div className={styles.statusTab}>
          <span className={`${active === 'BOOKED' && styles.active}`} onClick={() => setActive('BOOKED')}>BOOKED</span>
          <span className={`${active === 'INPROGRESS' && styles.active}`} onClick={() => setActive('INPROGRESS')}>INPROGRESS</span>
          <span className={`${active === 'VISITED' && styles.active}`} onClick={() => setActive('VISITED')}>VISITED</span>
        </div>
      </div>
      <CurrentAppointments active={active} appointments={appointments} />
    </div>
  );
}

export default Appointments;