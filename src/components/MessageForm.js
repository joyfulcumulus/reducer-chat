import { useImmer } from 'use-immer';
import styles from './MessageForm.module.css';

function MessageForm({selected, currentUsername}) {
  const [userInput, updateUserInput] = useImmer('');

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
  }

  return(
    <div className={styles.messageFormContainer}>
      <form>
        <input
          type="text" name="content" placeholder="Type a message here"
          value={userInput}
          onChange={(e) => updateUserInput(e.target.value)}
        />
        <button className={styles.sendButton} onClick={handleSubmit}>Send</button>
      </form>
    </div>
  )
}

export default MessageForm;
