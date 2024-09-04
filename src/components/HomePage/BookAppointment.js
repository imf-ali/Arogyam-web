import Button from "../../utils/Button";
import InputField from "../../utils/InputField";
import styles from '../../styles/HomePage/HomeBody.module.css';
import { useState } from "react";
import SlotModal from "./SlotModal";

const BookAppointment = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.length < 4 || (phone.length < 10 && phone.length > 13)) {
      alert('Please fill in the details');
      return;
    }
    setShowModal(true);
  }

  return (
    <>
      <div className={styles.booking}>
        <div className={styles.title}>Book Appointment</div>
        <InputField
          labelName='Name*'
          inputType='text'
          placeholderText='Full Name'
          value={name}
          setText={setName}
        />
        <InputField
          labelName='Email address (optional)'
          inputType='email'
          placeholderText='example@gmail.com'
          value={email}
          setText={setEmail}
        />
        <InputField
          labelName='Phone Number*'
          inputType='number'
          placeholderText='9999XXXXXX'
          value={phone}
          setText={setPhone}
        />
        <Button
          text='Book Appointment'
          handleClick={handleSubmit}
        />
      </div>
      {showModal && (
        <SlotModal
          name={name}
          phone={phone}
          email={email}
          setShowModal={setShowModal} />
      )}
    </>
  );
}

export default BookAppointment;