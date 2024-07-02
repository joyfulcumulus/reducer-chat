import { initialState } from './constants/initialState';
import { useImmer } from 'use-immer';
import { useChatroom } from './useChatroom.js';
import ChatroomList from './components/ChatroomList';
import MessageList from './components/MessageList';
import './App.css';

function App() {
  const [chatPage, updateChatPage] = useImmer(initialState);

  const selectedChatroom = chatPage.chatrooms.find(chatroom =>
    chatroom.id === chatPage.selectedChatroomId
  );

  const messages = useChatroom(selectedChatroom.name);

  return (
    <div className="layout">
      <div className="sidebar">
        <img src="https://miro.medium.com/v2/resize:fit:2400/1*cen9t2Qh4zLWzQzlGF4CUg.png" alt="Le Wagon Logo" />
      </div>
      <div className="chatroomSidebar">
        <h1>Redux Chat</h1>
        <ChatroomList chatrooms={chatPage.chatrooms} selected={chatPage.selectedChatroomId} handleClick={updateChatPage}/>
      </div>
      <div className="messageContainer">
        <MessageList messages={messages} selected={selectedChatroom.name}/>
      </div>
    </div>
  );
}

export default App;
