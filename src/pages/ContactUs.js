import Map from '../components/ContactPage/Map';
import styles from '../styles/Contact.module.css';

const ContactUs = () => {
  return (
    <div className={styles.contactUs}>
      <div className={styles.dataDiv}>
        <h2>Contact Us</h2>
        <div>Teacher Colony, Narayan Nagar, Manpur,Gaya</div>
        <div>Nearby ICICI Bank Manpur</div>
        <div>P.S. - Muffasil</div>
        <div>Pin - 823003</div>
        <p><b>Mobile no. - 6203646558</b></p>
        <p><b>Email - arogyambihar@gmail.com</b></p>
      </div>
      <Map />
    </div>
  )
}

export default ContactUs;