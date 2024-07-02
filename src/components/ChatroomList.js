function ChatroomList( {chatrooms} ) {

  let rows = chatrooms.map(chatroom => {
    return <li key={chatroom.name} >{chatroom.name}</li>
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
