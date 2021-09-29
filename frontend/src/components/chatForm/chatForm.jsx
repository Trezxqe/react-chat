import webSocket from '../../helpers/webSocket.jsx';
import s from './chatForm.module.css';
const ChatForm = () => {
  const submitHandler = (e) => {
    e.preventDefault();
    webSocket.sendMessage(e.target.message.value);
    e.target.reset();
  };
  return (
    <form className={s.chatForm} onSubmit={submitHandler}>
      <input type='text' name='message' />
      <button type='submit'>Submit</button>
    </form>
  );
};

export default ChatForm;
