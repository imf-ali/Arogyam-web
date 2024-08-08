import Button from "../../utils/Button";
import InputField from "../../utils/InputField";
import styles from '../../styles/HomePage/HomeBody.module.css';

const PatientTracking = () => {
  return (
    <div className={styles.tracking}>
      <div className={styles.title}>Patient Tracking</div>
      <InputField labelName='Name*' inputType='text' placeholderText='Full Name' />
      <InputField labelName='Phone Number*' inputType='number' placeholderText='9999XXXXXX' />
      <Button text='Track' />
    </div>
  );
}

export default PatientTracking;