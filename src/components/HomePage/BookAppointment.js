import Button from "../../utils/Button";
import InputField from "../../utils/InputField";
import styles from '../../styles/HomePage/HomeBody.module.css';

const BookAppointment = () => {
  return (
    <div className={styles.booking}>
      <div className={styles.title}>Book Appointment</div>
      <InputField labelName='Name*' inputType='text' placeholderText='Full Name' />
      <InputField labelName='Email address (optional)' inputType='email' placeholderText='example@gmail.com' />
      <InputField labelName='Phone Number*' inputType='number' placeholderText='9999XXXXXX' />
      <Button text='Book Appointment' />
    </div>
  );
}

export default BookAppointment;