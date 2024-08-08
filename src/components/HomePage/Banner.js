import banner from '../../assets/banner.png';
import styles from '../../styles/HomePage/banner.module.css';

const Banner = () => {
  return (
    <div className={styles.bannerDiv}>
      <img src={banner} alt='banner' />
    </div>
  );
}

export default Banner;