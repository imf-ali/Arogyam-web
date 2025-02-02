import styles from '../styles/Footer.module.css';
import logo from '../assets/logoMain.png';
import { FaFacebook } from "react-icons/fa6";
import { GrInstagram } from "react-icons/gr";
import { SiYoutube } from "react-icons/si";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.content}>
          <div className={styles.legalLinks}>
            <Link to="/terms-and-condition">Terms and Conditons</Link>
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/disclaimer">Disclaimer</Link>
          </div>

          <div className={styles.socialIcons}>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook size={25} /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><GrInstagram size={25} /></a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><SiYoutube size={25} /></a>
          </div>

        </div>
        <div className={styles.contentTwo}>
          <Link to="/contact">
            <div>
              <FaLocationDot size={20} /> Find Us Here
            </div>
          </Link>
        </div>
      </div>
      <div className={styles.logoDiv}>
        <img src={logo} alt='logo' />
        <p>© 2025 Arogyam Bihar | All Rights Reserved</p>
      </div>
    </div>
  )
};

export default Footer;