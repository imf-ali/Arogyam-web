import { useDispatch } from "react-redux";
import NavBar from "./components/Navbar";
import Admin from "./pages/Admin";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { getClinicData } from "./store/WebDataStore/WebDataApi";

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getClinicData()); 
  })

  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
