import styles from '../styles/Footer.module.css';
import logo from '../assets/iconNew.jpg';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.content}>
        <div>Legal Center</div>
        <div>Privacy</div>
        <div>FAQs</div>
        <div>Terms of Service</div>
      </div>
      <div className={styles.logoDiv}>
        <img src={logo} alt='logo' />
        <div>© 2024 Arogyam Bihar</div>
      </div>
    </div>
  )
};

export default Footer;