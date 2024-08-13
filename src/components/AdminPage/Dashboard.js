import styles from '../../styles/AdminPage/Admin.module.css';
import HomePageData from './HomePageData';

const Dashboard = () => {
  return (
    <div className={styles.dashboard}>
      <HomePageData />
    </div>
  )
}

export default Dashboard;