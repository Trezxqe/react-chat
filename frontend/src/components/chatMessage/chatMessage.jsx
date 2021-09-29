import s from './chatMessage.module.css';
const ChatMessage = ({ data, type }) => {
  const { username, message, date } = data;
  const time = date.replace(/.+([0-9:]{8}).+/, '$1');
  return (
    <div className={`${s.message} ${type ? s.messageClient : s.messageOther}`}>
      <span className={s.time}>({time})</span>{' '}
      <span className={s.username}>{username}:</span> <span>{message}</span>
    </div>
  );
};

export default ChatMessage;
