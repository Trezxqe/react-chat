import s from './chatMessage.module.css';
const ChatMessage = ({ data }) => {
  const { username, message } = data;
  return (
    <div className={`${s.message}`}>
      <span>{username}:</span> <span>{message}</span>
    </div>
  );
};

export default ChatMessage;
