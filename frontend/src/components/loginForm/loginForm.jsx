import webSocket from '../../helpers/webSocket.jsx';

const LoginForm = () => {
  const submitHandler = (e) => {
    e.preventDefault();
    webSocket.connect(e.target.username.value);
  };
  return (
    <form onSubmit={submitHandler}>
      <input type='text' name='username' />
      <br />
      <button type='submit'>Join</button>
    </form>
  );
};

export default LoginForm;
