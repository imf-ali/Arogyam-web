import Dashboard from '../components/AdminPage/Dashboard';
import Panel from '../components/AdminPage/Panel';
import styles from '../styles/AdminPage/Admin.module.css';

const Admin = () => {
  return (
    <div className={styles.adminPage}>
      <Panel />
      <Dashboard />
    </div>
  )
}

export default Admin;