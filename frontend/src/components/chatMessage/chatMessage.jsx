import s from './chatMessage.module.css';
const ChatMessage = ({ author, message, client }) => {
  return (
    <div className={`${s.message} ${client ? s.messageClient : s.messageOther}`}>
      <span>{author}:</span> <span>{message}</span>
    </div>
  );
};

export default ChatMessage;
