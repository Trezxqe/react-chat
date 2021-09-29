import s from './chatArea.module.css';
import { useSelector } from 'react-redux';
import ChatMessage from '../chatMessage/chatMessage.jsx';
import ChatForm from '../chatForm/chatForm.jsx';
import { useEffect, useRef } from 'react';

const ChatArea = () => {
  const scrollRef = useRef(null);
  const { currentRoomChatHistory, currentRoomName, username } = useSelector(
    (state) => state,
  );

  useEffect(() => {
    scrollRef.current.scrollIntoView();
  }, [currentRoomChatHistory]);

  return (
    <div className={s.chatArea}>
      <div className={s.channelName}>Channel Name: {currentRoomName}</div>
      <div className={s.messageArea}>
        {currentRoomChatHistory.map((data) => (
          <ChatMessage
            data={data}
            type={data.username === username ? true : false}
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
