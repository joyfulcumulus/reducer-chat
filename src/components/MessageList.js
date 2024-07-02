import { useRef, useEffect } from 'react';
import Message from "./Message";
import { useMessages } from "../useMessages";
import MessageForm from "./MessageForm";
import styles from './MessageList.module.css';

function MessageList({ selected, currentUsername }) {
  const messages = useMessages(selected);
  const messageContainerRef = useRef(null);

  let rows = messages.map(message => {
    return <Message key={message.created_at} message={message} />
  })

  useEffect(()=> {
    const messageContainerHeight = messageContainerRef.current.scrollHeight;
    messageContainerRef.current.scrollTop = messageContainerHeight;
  })

  return(
    <>
    <div className={styles.messageHeader}>
      <span>Channel #</span>
      <span>{selected}</span>
    </div>
    <div ref={messageContainerRef} className={styles.messageContentContainer}>
      {rows}
    </div>
    <MessageForm selected={selected} currentUsername={currentUsername}/>
    </>
  )
}

export default MessageList;
