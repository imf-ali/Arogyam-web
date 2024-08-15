import styles from '../styles/utils/Button.module.css';

const Button = ({ text, backgroundColor, width, handleClick }) => {
  return (
    <button 
      className={styles.submitBtn} 
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