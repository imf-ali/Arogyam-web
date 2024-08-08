import styles from '../styles/Navbar.module.css';
import icon from '../assets/icon.png';

const NavBar = () => {
  return (
    <nav className={styles.navBar}>
      <div className={styles.imgDiv}>
        <img src={icon} alt='icon' />
      </div>
      <div className={styles.itemDiv}>
        <span>HOME</span>
        <span>ABOUT</span>
        <span>TREATMENTS</span>
        <span>DOCTORS</span>
        <span>PATIENT PORTAL</span>
        <span>CONTACT US</span>
      </div>
    </nav>
  );
}

export default NavBar;