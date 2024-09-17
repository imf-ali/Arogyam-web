import Button from "../../utils/Button";
import InputField from "../../utils/InputField";
import styles from '../../styles/HomePage/HomeBody.module.css';
import { useState } from "react";
import AppointmentModal from "./AppointmentModal";
import { trackStatus } from "../../store/api";

const PatientTracking = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState(undefined);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (name.length < 4 || (phone.length < 10 && phone.length > 13)) {
      alert('Please fill in the details');
      return;
    }
    const res = await trackStatus(name, phone);
    if(res.status === 'Success'){
      setName('');
      setPhone('');
      setModalData(res.data);
      setShowModal(true);
    }
  }
  return (
    <div className={styles.tracking}>
      <div className={styles.title}>Patient Tracking</div>
      <InputField 
        labelName='Name*' 
        inputType='text' 
        placeholderText='Full Name' 
        value={name}
        setText={setName}
      />
      <InputField 
        labelName='Phone Number*' 
        inputType='number' 
        placeholderText='9999XXXXXX' 
        value={phone}
        setText={setPhone}
      />
      <Button 
        text='Track' 
        handleClick={handleSubmit}
      />
      {showModal && <AppointmentModal setShowModal={setShowModal} {...modalData} />}
    </div>
  );
}

export default PatientTracking;