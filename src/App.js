import { useDispatch } from "react-redux";
import NavBar from "./components/Navbar";
import Admin from "./pages/Admin";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { getClinicData, getFeedbackData } from "./store/WebDataStore/WebDataApi";
import HomePageData from "./components/AdminPage/HomePageData";
import ManageFAQ from "./components/AdminPage/ManageFAQ";
import ManageTestimonial from "./components/AdminPage/ManageTestimonial";
import Appointments from "./components/AdminPage/Appointments";
import Patient from "./components/AdminPage/Patient";
import PatientPortal from "./pages/PatientPortal";
import Footer from "./components/Footer";
import styles from './App.module.css';
import Treatment from "./pages/Treatment";
import TreatmentItem from "./components/TreatmentPage/TreatmentItem";
import NotFound from "./components/NotFound";
import ContactUs from "./pages/ContactUs";
import Doctors from "./pages/Doctors";
import TnC from "./pages/TnC";
import Privacy from "./pages/Privacy";
import LegalCenter from "./pages/LegalCenter";

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getClinicData());
    dispatch(getFeedbackData());
  })

  return (
    <>
      <Router>
        <div className={styles.app}>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/patient-portal" element={<PatientPortal />} />
            <Route path="/treatments" element={<Treatment />} />
            <Route path="/treatments/:name" element={<TreatmentItem />} />
            <Route path="/admin" element={<Admin />}>
              <Route path="appointments" element={<Appointments />} />
              <Route path="homedata" element={<HomePageData />} />
              <Route path="managefaq" element={<ManageFAQ />} />
              <Route path="testimonials" element={<ManageTestimonial />} />
              <Route path="patient/:patientId" element={<Patient />} />
            </Route>
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/doctors" element={<Doctors />} />
            <Route path="/terms-and-condition" element={<TnC />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/legal-center" element={<LegalCenter />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </>
  );
}

export default App;
