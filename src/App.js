import { useImmer } from 'use-immer';
import { initialState } from './constants/initialState';
import { ChatContext } from './ChatContext.js';
import ChatroomList from './components/ChatroomList';
import MessageList from './components/MessageList';
import './App.css';

function App() {
  const [chatPage, updateChatPage] = useImmer(initialState);

  const selectedChatroom = chatPage.chatrooms.find(chatroom =>
    chatroom.id === chatPage.selectedChatroomId
  );

  return (
    <ChatContext.Provider value={chatPage}>
      <div className="layout">
        <div className="sidebar">
          <img src="https://miro.medium.com/v2/resize:fit:2400/1*cen9t2Qh4zLWzQzlGF4CUg.png" alt="Le Wagon Logo" />
        </div>
        <div className="chatroomSidebar">
          <h1>Redux Chat</h1>
          <ChatroomList handleClick={updateChatPage}/>
        </div>
        <div className="messageContainer">
          <MessageList selected={selectedChatroom.name} currentUsername={chatPage.currentUsername}/>
        </div>
      </div>
    </ChatContext.Provider>
  );
}

export default App;
