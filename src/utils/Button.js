import styles from '../styles/utils/Button.module.css';

const Button = ({ text }) => {
  return (
    <button className={styles.submitBtn}>{text}</button>
  );
}

export default Button;