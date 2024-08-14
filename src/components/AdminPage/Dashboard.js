import styles from '../../styles/AdminPage/Admin.module.css';
import HomePageData from './HomePageData';
import ManageFAQ from './ManageFAQ';
import ManageTestimonial from './ManageTestimonial';

const Dashboard = () => {
  return (
    <div className={styles.dashboard}>
      {/* <HomePageData /> */}
      {/* <ManageFAQ /> */}
      <ManageTestimonial />
    </div>
  )
}

export default Dashboard;