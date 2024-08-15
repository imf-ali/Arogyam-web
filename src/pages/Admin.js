import { useState } from 'react';
import Dashboard from '../components/AdminPage/Dashboard';
import Panel from '../components/AdminPage/Panel';
import styles from '../styles/AdminPage/Admin.module.css';

const Admin = () => {

  const [visibleComponent, setVisibleComponent] = useState(0);

  return (
    <div className={styles.adminPage}>
      <Panel 
        visibleComponent={visibleComponent}
        setVisibleComponent={setVisibleComponent} 
      />
      <Dashboard visibleComponent={visibleComponent} />
    </div>
  )
}

export default Admin;