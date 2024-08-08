import BookAppointment from "./BookAppointment";
import PatientTracking from "./PatientTracking";
import WhyUs from "./WhyUs";
import styles from '../../styles/HomePage/HomeBody.module.css';

const HomeBody = () => {
  return (
    <div className={styles.homeBodyDiv}>
      <WhyUs />
      <BookAppointment />
      <PatientTracking />
    </div>
  );
}

export default HomeBody;