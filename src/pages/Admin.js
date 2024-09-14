import { useEffect, useState } from 'react';
import Panel from '../components/AdminPage/Panel';
import styles from '../styles/AdminPage/Admin.module.css';
import LoginSignup from '../components/AdminPage/LoginSignup';
import { useDispatch, useSelector } from 'react-redux';
import { adminState } from '../store/AdminDataStore/AdminDataContext';
import { Outlet } from 'react-router-dom';
import { validateUser } from '../store/AdminDataStore/AdminDataApi';

const Admin = () => {

  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector(adminState);
  const [visibleComponent, setVisibleComponent] = useState(0);

  useEffect(() => {
    dispatch(validateUser({ token: localStorage.getItem('adminToken') }));
  }, [dispatch])

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