import webSocket from '../../helpers/webSocket.jsx';
import s from './loginForm.module.css';

const LoginForm = () => {
  const submitHandler = (e) => {
    e.preventDefault();
    webSocket.connect(e.target.username.value);
  };
  return (
    <form className={s.wrapper} onSubmit={submitHandler}>
      <h1>React Chat</h1>
      <h3>Enter Your Name</h3>
      <input type='text' name='username' required />
      <br />
      <button className={s.button} type='submit'>
        Join
      </button>
    </form>
  );
};

export default LoginForm;
