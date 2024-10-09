import styles from '../../styles/Contact.module.css';

const Map = () => {
  return (
    <div className={styles.mapDiv}>
      <iframe 
        title="map" 
        width="100%" 
        height="600" 
        frameborder="0" 
        scrolling="no" 
        marginheight="0" 
        marginwidth="0" 
        src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Teacher%20Colony,%20Narayan%20Nagar,%20Manpur,Gaya+(Arogyam)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
      >
        <a href="https://www.gps.ie/">gps devices</a>
      </iframe>
    </div>
  )
}

export default Map;