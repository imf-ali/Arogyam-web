import styles from '../styles/Navbar.module.css';
import icon from '../assets/icon.png';
import { Link } from 'react-router-dom';
import { FaBars } from "react-icons/fa";
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { adminState, logoutAdmin } from '../store/AdminDataStore/AdminDataContext';
import { logout } from '../store/api';

const NavBar = () => {
  const dispatch = useDispatch();
  const { isLoggedIn, token } = useSelector(adminState);
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  const handleLogout = async () => {
    const res = await logout(token);
    console.log(res);
    if(res.status === 200){
      dispatch(logoutAdmin());
      window.location.href = '/';
    }
  };

  return (
    <nav className={styles.navBar}>
      <div className={styles.imgDiv}>
        <img src={icon} alt='icon' />
      </div>
      <div className={styles.barNav} onClick={handleShowNavbar}>
        <FaBars style={{ fontSize: "2em" }} />
      </div>
      <div className={`${styles.itemDiv} ${showNavbar && styles.show}`}>
        <Link to="/" className={styles.linkItem}>HOME</Link>
        <Link className={styles.linkItem}>ABOUT</Link>
        <Link className={styles.linkItem}>TREATMENTS</Link>
        <Link className={styles.linkItem}>DOCTORS</Link>
        <Link to="/patient-portal" className={styles.linkItem}>PATIENT PORTAL</Link>
        <Link className={styles.linkItem}>CONTACT US</Link>
        {isLoggedIn && <Link className={styles.linkItem} onClick={handleLogout}>LOGOUT</Link>}
      </div>
    </nav>
  );
}

export default NavBar;