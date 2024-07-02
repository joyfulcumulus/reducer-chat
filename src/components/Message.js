import styles from './Message.module.css';

function Message({ message }) {

  let displayTime = new Date(message.created_at);

  function hashCode(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
       hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    return hash;
  }

  function intToRGB(i){
    let c = (i & 0x00FFFFFF)
        .toString(16)
        .toUpperCase();
    return "00000".substring(0, 6 - c.length) + c;
  }

  let color = intToRGB(hashCode(message.author));

  return(
    <div className={styles.messageContainer}>
      <div>
        <span className={styles.author} style={{ color: `#${color}` }}>{message.author}</span>
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
