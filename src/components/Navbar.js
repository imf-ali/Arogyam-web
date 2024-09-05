import styles from '../styles/Navbar.module.css';
import icon from '../assets/icon.png';
import { Link } from 'react-router-dom';
import { FaBars } from "react-icons/fa";
import { useState } from 'react';

const NavBar = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  const closeNavbar = () => {
    setShowNavbar(false);
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
        <Link className={styles.linkItem}>PATIENT PORTAL</Link>
        <Link className={styles.linkItem}>CONTACT US</Link>
      </div>
    </nav>
  );
}

export default NavBar;