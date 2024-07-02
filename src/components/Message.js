function Message({ message }) {
  return(
    <div>
      <div>
        <span>{message.author}</span>
        <span>{message.created_at}</span>
      </div>
      <div>
        <p>{message.content}</p>
      </div>
    </div>
  )
}

export default Message;
