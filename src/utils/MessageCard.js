import styles from '../styles/utils/MessageCard.module.css';

const MessageCard = ({ message, isError }) => {
  return (
    <div className={`${styles.messageCard} ${isError && styles.error}`}>
      <div>{message}</div>
    </div>
  )
};

export default MessageCard;