import styles from '../styles/utils/Button.module.css';

const Button = ({ text, backgroundColor, width, handleClick, disabled = false }) => {
  return (
    <button 
      className={styles.submitBtn} 
      disabled={disabled}
      style={
        { 
          backgroundColor,
          width, 
        }
      }
      onClick={handleClick}
    >
      {text}
    </button>
  );
}

export default Button;