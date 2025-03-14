import { useNavigate } from 'react-router-dom';
import styles from '../../styles/AdminPage/Appointments.module.css';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { downloadPrescription, updateAppointment } from '../../store/AdminDataStore/AdminDataApi';
import { FaDownload } from "react-icons/fa6";
import { adminState } from '../../store/AdminDataStore/AdminDataContext';
import { useEffect } from 'react';

const CurrentAppointments = ({ active, appointments }) => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { pdfBuffer } = useSelector(adminState);
  const filteredAppointments = appointments.filter(appointment => appointment.status === active);

  const handleClick = (appointment) => {
    const { _id, patientId, status } = appointment;
    if (status === 'VISITED')
      return;
    if (status === 'BOOKED') {
      dispatch(updateAppointment({ appointmentId: _id, status: 'WAITING' }))
    }
    navigate(`/admin/patient/${patientId}`);
  }

  const handleDownload = (appointment) => {
    if (appointment.status !== 'VISITED') {
      return;
    }
    dispatch(downloadPrescription({ patientId: appointment.patientId }));
  }

  useEffect(() => {
    const openPdfInNewTab = async () => {
      try {
        const uint8Array = new Uint8Array(pdfBuffer.data);
        const pdfBlob = new Blob([uint8Array], { type: 'application/pdf' });
        const pdfUrl = URL.createObjectURL(pdfBlob);
        window.open(pdfUrl, '_blank');
      } catch (error) {
        console.error('Error loading PDF:', error);
      }
    };
    
    if (pdfBuffer) {
      openPdfInNewTab();
    }

  }, [pdfBuffer])

  return (
    <div>
      {filteredAppointments.length !== 0 ? (
        <div className={styles.appointmentHeader}>
          <div className={styles.patientId}>Id</div>
          <div className={styles.name}>Name</div>
          <div className={styles.phone}>Phone</div>
          <div className={styles.paid}>Paid</div>
          <div className={styles.appointmentTime}>Appointment</div>
          {active === 'VISITED' && <div className={styles.paid}>Download</div>}
        </div>
      ) : (
        <div className={styles.noAppointments}>No appointments found for the selected status</div>
      )}
      {filteredAppointments.map((appointment, index) => (
        <div 
          className={`${styles.appointmentItem} ${active !== 'VISITED' && styles.appointmentItemHover}`} 
          key={index} 
          onClick={() => handleClick(appointment)}
        >
          <div className={styles.patientId}>{appointment.patientId}</div>
          <div className={styles.name}>{appointment.name}</div>
          <div className={styles.phone}>{appointment.phone}</div>
          <div className={styles.paid}>{appointment.isPaid ? 'YES' : 'NO'}</div>
          <div className={styles.appointmentTime}>{moment(appointment.appointmentTime).subtract(11, 'hours').format('LT')}</div>
          {active === 'VISITED' && <div className={styles.download} onClick={() => handleDownload(appointment)}><FaDownload size={17} /></div>}
        </div>
      ))}
    </div>
  )
}

export default CurrentAppointments; 