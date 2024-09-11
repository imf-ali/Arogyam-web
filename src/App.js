import { useDispatch } from "react-redux";
import NavBar from "./components/Navbar";
import Admin from "./pages/Admin";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { getClinicData, getFeedbackData } from "./store/WebDataStore/WebDataApi";
import { setLogin } from "./store/AdminDataStore/AdminDataContext";
import HomePageData from "./components/AdminPage/HomePageData";
import ManageFAQ from "./components/AdminPage/ManageFAQ";
import ManageTestimonial from "./components/AdminPage/ManageTestimonial";

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getClinicData());
    dispatch(getFeedbackData());
    dispatch(setLogin(localStorage.getItem('adminToken')))
  })

  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<Admin />}>
            <Route path="homedata" element={<HomePageData />} />
            <Route path="managefaq" element={<ManageFAQ />} />
            <Route path="testimonials" element={<ManageTestimonial />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
