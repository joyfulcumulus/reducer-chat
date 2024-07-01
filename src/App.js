import ChatroomList from './components/ChatroomList';
import MessageList from './components/MessageList';
import './App.css';

function App() {
  return (
    <div className="layout">
      <div className="sidebar">
        <img src="https://miro.medium.com/v2/resize:fit:2400/1*cen9t2Qh4zLWzQzlGF4CUg.png" alt="Le Wagon Logo" />
      </div>
      <div className="chatroomSidebar">
        <h1>Redux Chat</h1>
        <ChatroomList />
      </div>
      <div className="messageContainer">
        <MessageList />
      </div>
    </div>
  );
}

export default App;
