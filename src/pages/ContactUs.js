import Map from '../components/ContactPage/Map';
import styles from '../styles/Contact.module.css';

const ContactUs = () => {
  return (
    <div className={styles.contactUs}>
      <div className={styles.dataDiv}>
        <h2>Contact Us</h2>
        <div>Teacher Colony, Sri Narayan Nagar, Manpur,Gaya</div>
        <div>Nearby ICICI Bank Manpur</div>
        <div>P.S. - Muffasil</div>
        <div>Pin - 823003</div>
        <p><b>Mobile no. -{' '} <a className={styles.link} href="tel:9430030564">
          9430030564
        </a></b></p>
        <p><b>Email -{' '} <a className={styles.link} href="mailto:arogyambihar@gmail.com">
          arogyambihar@gmail.com
        </a></b></p>
      </div>
      <Map />
    </div>
  )
}

export default ContactUs;