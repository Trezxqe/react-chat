import { useSelector } from 'react-redux';
import webSocket from '../../helpers/webSocket.jsx';
import s from './chatForm.module.css';
const ChatForm = () => {
  const { currentRoomName, username } = useSelector((state) => state);
  const submitHandler = (e) => {
    const message = e.target.message.value;
    e.preventDefault();
    if (message) {
      webSocket.sendMessage({ room: currentRoomName, message, username });
      e.target.reset();
    }
  };
  return (
    <form className={s.chatForm} onSubmit={submitHandler}>
      <input type='text' name='message' required />
      <button type='submit'>Submit</button>
    </form>
  );
};

export default ChatForm;
