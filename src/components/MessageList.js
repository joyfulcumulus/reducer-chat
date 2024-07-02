import Message from "./Message";
import MessageForm from "./MessageForm";
import styles from './MessageList.module.css';

function MessageList({ messages, selected }) {

  let rows = messages.map(message => {
    return <Message key={message.created_at} message={message} />
  })

  return(
    <>
    <div className={styles.messageHeader}>
      <span>Channel #</span>
      <span>{selected}</span>
    </div>
    <div className={styles.messageContentContainer}>
      {rows}
    </div>
    <MessageForm />
    </>

)
}

export default MessageList;
