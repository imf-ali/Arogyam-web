import Button from "../../utils/Button";
import InputField from "../../utils/InputField";

const BookAppointment = () => {
  return (
    <div>
      <h3>Book Appointment</h3>
      <InputField labelName='Name*' inputType='text' placeholderText='Full Name' />
      <InputField labelName='Email address (optional)' inputType='email' placeholderText='example@gmail.com' />
      <InputField labelName='Phone Number*' inputType='number' placeholderText='9999XXXXXX' />
      <Button text='Book Appointment' />
    </div>
  );
}

export default BookAppointment;