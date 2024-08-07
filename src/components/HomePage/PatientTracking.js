import Button from "../../utils/Button";
import InputField from "../../utils/InputField";

const PatientTracking = () => {
  return (
    <div>
      <h3>Patient Tracking</h3>
      <InputField labelName='Name*' inputType='text' placeholderText='Full Name' />
      <InputField labelName='Phone Number*' inputType='number' placeholderText='9999XXXXXX' />
      <Button text='Track' />
    </div>
  );
}

export default PatientTracking;