import Message from "./Message";
import { useMessages } from "../useMessages";
import MessageForm from "./MessageForm";
import styles from './MessageList.module.css';

function MessageList({ selected, currentUsername }) {
  const messages = useMessages(selected);

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
    <MessageForm selected={selected} currentUsername={currentUsername}/>
    </>
  )
}

export default MessageList;
