import s from './chatArea.module.css';
import { useSelector } from 'react-redux';
import ChatMessage from '../chatMessage/chatMessage.jsx';
import ChatForm from '../chatForm/chatForm.jsx';
import { useEffect, useRef } from 'react';
import checkUserType from '../../helpers/other/checkUserType.jsx';

const ChatArea = () => {
  const scrollRef = useRef(null);
  const { currentRoomHistory, currentRoomName, userId } = useSelector(
    (state) => state,
  );
  console.log(currentRoomHistory);
  useEffect(() => {
    scrollRef.current.scrollIntoView();
  }, [currentRoomHistory]);

  return (
    <div className={s.chatArea}>
      <h3 className={s.title}>Channel Name: {currentRoomName}</h3>
      <div className={s.messageArea}>
        {currentRoomHistory.map((data) => (
          <ChatMessage
            data={data}
            type={checkUserType(userId, data.socketId)}
            key={data.messageId}
          />
        ))}
        <div ref={scrollRef} />
      </div>

      <ChatForm />
    </div>
  );
};

export default ChatArea;
