import styles from './MessageForm.module.css';

function MessageForm() {
  return(
    <div className={styles.messageFormContainer}>
      <form>
        <input type="text" name="content" placeholder="Type a message here"/>
        <button className={styles.sendButton}>Send</button>
      </form>
    </div>
  )
}

export default MessageForm;
