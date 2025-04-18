import styles from '../../styles/Contact.module.css';

const Map = () => {
  return (
    <div className={styles.mapDiv}>
      <iframe
        title="map"
        width="100%"
        height="600"
        frameBorder="0"
        scrolling="no"
        marginHeight="0"
        marginWidth="0"
        src="https://maps.google.com/maps?q=24.791276,85.022244&z=15&output=embed"
      ></iframe>
    </div>
  );
};

export default Map;
