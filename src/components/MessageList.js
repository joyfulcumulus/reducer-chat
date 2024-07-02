import Message from "./Message";

function MessageList({ messages }) {

  let rows = messages.map(message => {
    return <Message key={message.created_at} message={message} />
  })

  return(
    <div>
      {rows}
    </div>
)
}

export default MessageList;
