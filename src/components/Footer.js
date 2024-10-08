import styles from '../styles/Footer.module.css';
import logo from '../assets/iconNew.jpg';
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
          <div>Legal Center</div>
          <div>Privacy</div>
          <div>Terms of Service</div>
          <FaFacebook size={25} />
          <GrInstagram size={25} />
          <SiYoutube size={25} />
        </div>
        <div className={styles.contentTwo}>
          <Link to="/contact">
            <div>
              Locate Our Clinic 
            </div>
            <FaLocationDot size={25} />
          </Link>
        </div>
      </div>
      <div className={styles.logoDiv}>
        <img src={logo} alt='logo' />
        <div>© 2024 Arogyam Bihar</div>
      </div>
    </div>
  )
};

export default Footer;