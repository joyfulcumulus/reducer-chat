import { useImmer } from 'use-immer';
import { useContext } from 'react';
import { ChatContext } from '../ChatContext';
import styles from './MessageForm.module.css';

function MessageForm() {
  const [userInput, updateUserInput] = useImmer('');
  const chatPage = useContext(ChatContext);
  const currentUsername = chatPage.currentUsername;
  const selected = chatPage.chatrooms.find(chatroom =>
    chatroom.id === chatPage.selectedChatroomId
  ).name;

  function handleSubmit(e) {
    const url = `https://chat.api.lewagon.com/${selected}/messages`;
    e.preventDefault();
    const body = {
      author: currentUsername,
      content: userInput
    }
    fetch(url, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    })
    .then(r => r.json());
    updateUserInput('');
  }

  return(
    <div className={styles.messageFormContainer}>
      <form>
        <input
          type="text" name="content" placeholder="Type a message here"
          value={userInput}
          autoFocus={true}
          onChange={(e) => updateUserInput(e.target.value)}
        />
        <button className={styles.sendButton} onClick={handleSubmit}>Send</button>
      </form>
    </div>
  )
}

export default MessageForm;
