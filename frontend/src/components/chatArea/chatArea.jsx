import s from './chatArea.module.css';
import { useSelector } from 'react-redux';
import ChatMessage from '../chatMessage/chatMessage.jsx';
import ChatForm from '../chatForm/chatForm.jsx';

const ChatArea = () => {
  const { currentRoomChatHistory } = useSelector((state) => state);
  return (
    <div className={s.chatArea}>
      <div>Channel Name: NaN</div>
      <div>
        {currentRoomChatHistory.map((data) => (
          <ChatMessage data={data} key={data.messageId} />
        ))}
      </div>
      <div>
        <ChatForm />
      </div>
    </div>
  );
};

export default ChatArea;
