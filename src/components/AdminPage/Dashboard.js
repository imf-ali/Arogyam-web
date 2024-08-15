import styles from '../../styles/AdminPage/Admin.module.css';
import HomePageData from './HomePageData';
import ManageFAQ from './ManageFAQ';
import ManageTestimonial from './ManageTestimonial';

const Dashboard = ({ visibleComponent }) => {

  const selectComponent = () => {
    switch (visibleComponent) {
      case 0:
        return <HomePageData />;
      case 1:
        return <ManageFAQ />;
      case 2:
        return <ManageTestimonial />;
      default:
        return <HomePageData />;
    }
  }
  return (
    <div className={styles.dashboard}>
      {selectComponent()}
    </div>
  )
}

export default Dashboard;