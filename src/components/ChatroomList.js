import styles from './ChatroomList.module.css';

function ChatroomList( {chatrooms, selected, handleClick} ) {

  function changeChatroom(e) {
    const chatroomName = e.target.innerText.slice(1);
    const newSelected = chatrooms.find(chatroom =>
      chatroom.name === chatroomName
    );
    handleClick(draft => {
      draft.selectedChatroomId = newSelected.id;
    });
  }

  let rows = chatrooms.map(chatroom => {
    return(
      <li
        className={chatroom.id === selected ? `${styles.list} ${styles.active}` : styles.list}
        key={chatroom.name}
        onClick={changeChatroom}
      >
        #{chatroom.name}
      </li>
    )
  })

  return(
    <div>
      <ul>
        {rows}
      </ul>
    </div>
  )
}

export default ChatroomList;
