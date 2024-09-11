import { useState } from 'react';
import Panel from '../components/AdminPage/Panel';
import styles from '../styles/AdminPage/Admin.module.css';
import LoginSignup from '../components/AdminPage/LoginSignup';
import { useSelector } from 'react-redux';
import { adminState } from '../store/AdminDataStore/AdminDataContext';
import { Outlet } from 'react-router-dom';

const Admin = () => {

  const { isLoggedIn } = useSelector(adminState);
  const [visibleComponent, setVisibleComponent] = useState(0);

  return (
    <>
      {!isLoggedIn ? <LoginSignup /> : (
        <div className={styles.adminPage}>
          <Panel
            visibleComponent={visibleComponent}
            setVisibleComponent={setVisibleComponent}
          />
          <Outlet />
        </div>
      )}
    </>
  )
}

export default Admin;