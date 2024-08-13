import styles from '../../styles/AdminPage/HomeEdit.module.css';
import EditHomeBanner from "./EditHomeBanner";
import EditHomeHeader from "./EditHomeHeader";
import EditHomeHeaderList from './EditHomeHeaderList';

const HomePageData = () => {
  return (
    <>
      <EditHomeBanner />
      <div className={styles.editHomeData}>
        <EditHomeHeader />
        <EditHomeHeaderList />
      </div>
    </>
  )
}

export default HomePageData;