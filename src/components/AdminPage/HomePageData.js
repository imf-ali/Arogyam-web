import styles from '../../styles/AdminPage/HomeEdit.module.css';
import EditHomeBanner from "./EditHomeBanner";
import EditHomeHeader from "./EditHomeHeader";
import EditHomeHeaderList from './EditHomeHeaderList';

const HomePageData = () => {
  return (
    <div className={styles.homeEditDiv}>
      <EditHomeBanner />
      <div className={styles.editHomeData}>
        <EditHomeHeader />
        <EditHomeHeaderList />
      </div>
    </div>
  )
}

export default HomePageData;