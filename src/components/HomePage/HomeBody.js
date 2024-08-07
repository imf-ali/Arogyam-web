import BookAppointment from "./BookAppointment";
import PatientTracking from "./PatientTracking";
import WhyUs from "./WhyUs";

const HomeBody = () => {
  return (
    <div>
      <WhyUs />
      <BookAppointment />
      <PatientTracking />
    </div>
  );
}

export default HomeBody;