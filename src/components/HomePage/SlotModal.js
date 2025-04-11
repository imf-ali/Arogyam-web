import styles from '../../styles/HomePage/HomeBody.module.css';
import { useEffect, useState } from 'react';
import Button from '../../utils/Button';
import { confirmSlotData, fetchSlotsData } from '../../store/api';
import moment from 'moment';
import { convertToISOIST } from '../../utils/Helper';

const generateTimeSlotsWithDisplay = (startHour, endHour, slotTimes) => {
  const times = [];
  for (let hour = startHour; hour <= endHour; hour++) {
    const formattedHour = String(hour).padStart(2, '0') + ":00";
    if (hour === 12) {
      times.push({
        time: `${formattedHour} PM`,
        display: slotTimes.includes(formattedHour + ":00"),
      });
      continue;
    }
    times.push({
      time: hour > 12 ? `${String(hour - 12).padStart(2, '0') + ":00"} PM` : `${formattedHour} AM`,
      display: slotTimes.includes(formattedHour + ":00"),
    });
  }
  return times;
}

const SlotModal = ({ name, email, phone, setName, setEmail, setPhone, setShowModal }) => {

  const [slots, setSlots] = useState([]);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState([]);
  const [selectedSlotInd, setSelectedSlotInd] = useState(-1);
  const [errorMessage, setErrorMessage] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    setSelectedTime(generateTimeSlotsWithDisplay(9, 17, slots))
  }, [slots])

  const handleDate = async (e) => {
    e.preventDefault();
    const res = await fetchSlotsData(selectedDate);
    setSlots(res.availableSlots);
  }

  const handleConfirm = async () => {
    if (selectedSlotInd === -1) {
      alert('Please select a slot');
      return;
    }
    const appointmentTime = convertToISOIST(selectedDate, selectedTime[selectedSlotInd].time);
    const res = await confirmSlotData(name, phone, appointmentTime);
    if (res.status === 400)
      setErrorMessage(res.data.message);
    else if (res.status === 201) {
      setSuccess(`Slot booked successfully on ${moment(appointmentTime).utc(true).format('MMMM Do YYYY, h:mm:ss a')}`);
      // backDropClick();
    }
  }

  const backDropClick = () => {
    setShowModal(false);
    setSelectedDate('');
    setSelectedTime([]);
    setSelectedSlotInd(-1);
    setEmail('');
    setName('');
    setPhone('');
  }

  return (
    <>
      <div className={styles.backdrop} onClick={backDropClick} />
      <div className={styles.modal}>
        {success !== '' ? (
          <>
            <div className={styles.success}>
              {success}
            </div>
            <div className={styles.closeBtn}>
              <Button text='Close' width='30%' handleClick={backDropClick} />
            </div>
          </>
        ) : (
          <>
            <div className={styles.modalHeading}>AVAILABLE SLOTS</div>
            <div className={styles.dateDiv}>
              <div className={styles.modalText}>Select the date of booking within the next 7 days</div>
              <div className={styles.dateSelectDiv}>
                <input
                  className={styles.inputDate}
                  type='date'
                  min={new Date().toISOString().split('T')[0]}
                  max={new Date(new Date().setDate(new Date().getDate() + 7)).toISOString().split('T')[0]}
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                />
                <Button
                  text='Select Date'
                  handleClick={handleDate}
                  width='20%'
                />
              </div>
            </div>
            {slots.length !== 0 && (
              <div className={styles.timeDiv}>
                <div className={styles.modalText}>Select the time of booking</div>
                <div className={styles.timeSlotDiv}>
                  {selectedTime.map((slot, ind) => (
                    <div
                      key={ind}
                      className={`${styles.slotTime} ${slot.display && styles.available} ${selectedSlotInd === ind && styles.selectedSlot}`}
                      onClick={() => {
                        if (slot.display) setSelectedSlotInd(ind)
                      }}
                    >
                      {slot.time}
                    </div>
                  ))}
                </div>
                {errorMessage !== '' && <div className={styles.errorMessage}>{errorMessage}</div>}
                <div className={styles.confirmBtn}>
                  <Button
                    text='Confirm Slot'
                    width='30%'
                    handleClick={handleConfirm}
                  />
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </>
  )
}

export default SlotModal;