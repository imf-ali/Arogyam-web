import styles from '../styles/Navbar.module.css';
import icon from '../assets/logoLight.png';
import smallIcon from '../assets/logoMain.png';
import { Link } from 'react-router-dom';
import { FaBars } from "react-icons/fa";
import { useEffect, useState } from 'react';
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
    if (res.status === 200) {
      dispatch(logoutAdmin());
      window.location.href = '/';
    }
  };

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth > 1200) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      <nav className={styles.navBar}>
        <div className={styles.imgDiv}>
          <img src={icon} alt='icon' />
        </div>
        <div className={styles.barNav} onClick={handleShowNavbar}>
          <FaBars style={{ fontSize: "2em" }} />
        </div>
        {showNavbar && (
          <div className={`${styles.itemDiv} ${showNavbar && styles.show}`}>
            <Link to="/" className={styles.linkItem} onClick={handleShowNavbar}>HOME</Link>
            <Link to="/treatments" className={styles.linkItem} onClick={handleShowNavbar}>TREATMENTS</Link>
            <Link to="/doctors" className={styles.linkItem} onClick={handleShowNavbar}>DOCTOR</Link>
            <Link to="/patient-portal" className={styles.linkItem} onClick={handleShowNavbar}>PATIENT PORTAL</Link>
            <Link to="/contact" className={styles.linkItem} onClick={handleShowNavbar}>CONTACT US</Link>
            {isLoggedIn && <Link className={styles.linkItem} onClick={handleLogout}>LOGOUT</Link>}
          </div>
        )}
      </nav>
      <nav className={styles.navBar2}>
        <div className={styles.itemDiv2}>
          <img src={smallIcon} alt='leftIcon' className={styles.icon} />
          <Link to="/" className={styles.linkItem2} onClick={handleShowNavbar}>BOOK APPOINTMENT</Link>
          <img src={smallIcon} alt='rightIcon' className={styles.icon} />
        </div>
      </nav>
    </div>
  );
}

export default NavBar;