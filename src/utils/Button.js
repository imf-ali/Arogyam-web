import styles from '../styles/utils/Button.module.css';

const Button = ({ text, backgroundColor, width }) => {
  return (
    <button 
      className={styles.submitBtn} 
      style={
        { 
          backgroundColor,
          width, 
        }
      }
    >
      {text}
    </button>
  );
}

export default Button;