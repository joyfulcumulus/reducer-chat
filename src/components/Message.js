import styles from './Message.module.css';

function Message({ message }) {

  let displayTime = new Date(message.created_at);

  return(
    <div className={styles.messageContainer}>
      <div>
        <span className={styles.author}>{message.author}</span>
        {' - '}
        <span className={styles.timestamp}>{displayTime.toLocaleTimeString()}</span>
      </div>
      <div>
        <p>{message.content}</p>
      </div>
    </div>
  )
}

export default Message;
