import { Link } from 'react-router-dom';
import styles from '../../styles/AdminPage/Admin.module.css';

const Panel = ({ visibleComponent, setVisibleComponent }) => {
  const handleClick = (index) => {
    setVisibleComponent(index);
  }
  return (
    <div className={styles.panel}>
      <Link to="/admin/homedata"
        onClick={() => handleClick(0)}
        style={{ backgroundColor: visibleComponent === 0 && '#1c588c' }}
      >
        Home page data
      </Link>
      <Link to="/admin/managefaq"
        onClick={() => handleClick(1)}
        style={{ backgroundColor: visibleComponent === 1 && '#1c588c' }}
      >
        Manage FAQs
      </Link>
      <Link to="/admin/testimonials"
        onClick={() => handleClick(2)}
        style={{ backgroundColor: visibleComponent === 2 && '#1c588c' }}
      >
        Manage Testimonials
      </Link>
    </div>
  )
}

export default Panel;