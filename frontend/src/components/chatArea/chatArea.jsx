import s from './chatArea.module.css';
import ChatMessage from '../chatMessage/chatMessage.jsx';
import ChatForm from '../chatForm/chatForm.jsx';

const ChatArea = () => {
  const db = [
    { id: 0, author: 'biba', message: 'Hello There!' },
    { id: 1, author: 'boba', message: 'General Kenobi?' },
    { id: 2, author: 'wake', message: 'Ooops...', client: true },
    { id: 3, author: 'biba', message: 'Yes!' },
  ];
  return (
    <div className={s.chatArea}>
      <div>Channel Name: NaN</div>
      <div>
        {db.map((dbElement) => (
          <ChatMessage
            author={dbElement.author}
            message={dbElement.message}
            client={dbElement.client}
            key={dbElement.id}
          />
        ))}
      </div>
      <div>
        <ChatForm />
      </div>
    </div>
  );
};

export default ChatArea;
