import styles from '../../styles/AdminPage/Admin.module.css';

const Panel = ({ visibleComponent, setVisibleComponent }) => {
  const handleClick = (index) => {
    setVisibleComponent(index);
  }
  return (
    <div className={styles.panel}>
      <div 
        onClick={() => handleClick(0)} 
        style={{ backgroundColor: visibleComponent === 0 && '#1c588c'  }}
      >
          Home page data
      </div>
      <div 
        onClick={() => handleClick(1)} 
        style={{ backgroundColor: visibleComponent === 1 && '#1c588c'  }}
      >
        Manage FAQs
      </div>
      <div 
        onClick={() => handleClick(2)} 
        style={{ backgroundColor: visibleComponent === 2 && '#1c588c'  }}
      >
        Manage Testimonials
      </div>
    </div>
  )
}

export default Panel;