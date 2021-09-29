import s from './chatForm.module.css';
const ChatForm = () => {
  const submitHandler = (e) => {
    e.preventDefault();
    console.log('submit');
  };
  return (
    <form className={s.chatForm} onSubmit={submitHandler}>
      <input type='text' name='message' />
      <button type='submit'>Submit</button>
    </form>
  );
};

export default ChatForm;
