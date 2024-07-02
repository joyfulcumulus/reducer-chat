import { useRef, useEffect, useContext } from 'react';
import { ChatContext } from '../ChatContext';
import { useMessages } from "../useMessages";
import Message from "./Message";
import MessageForm from "./MessageForm";
import styles from './MessageList.module.css';

function MessageList() {
  const chatPage = useContext(ChatContext);
  const selected = chatPage.chatrooms.find(chatroom =>
    chatroom.id === chatPage.selectedChatroomId
  ).name;

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
    <MessageForm />
    </>
  )
}

export default MessageList;
