import styles from './ChatroomList.module.css';

function ChatroomList( {chatrooms, selected} ) {

  let rows = chatrooms.map(chatroom => {
    return(
      <li className={chatroom.id === selected ? `${styles.list} ${styles.active}` : styles.list} key={chatroom.name} >
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
