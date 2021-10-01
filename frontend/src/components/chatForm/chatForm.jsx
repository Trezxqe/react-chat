import { useSelector } from 'react-redux';
import webSocket from '../../helpers/webSocket.jsx';
import s from './chatForm.module.css';
const ChatForm = () => {
  const { currentRoomName, username, roomType } = useSelector((state) => state);
  const submitHandler = (e) => {
    const data = {
      message: e.target.message.value,
      room: currentRoomName,
      username,
      roomType,
    };
    e.preventDefault();
    if (data.message) {
      webSocket.sendMessage(data);
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
