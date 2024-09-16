import { useSelector } from 'react-redux';
import styles from '../../styles/HomePage/banner.module.css';
import { webState } from '../../store/WebDataStore/WebDataContext';

const Banner = () => {
  const { bannerUrl } = useSelector(webState);
  return (
    <div className={styles.bannerDiv}>
      <img src={bannerUrl} alt='banner' />
    </div>
  );
}

export default Banner;