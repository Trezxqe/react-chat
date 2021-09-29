import { Redirect } from 'react-router';
import chatStore from '../../helpers/chatStore.jsx';

const LoginForm = () => {
  const submitHandler = (e) => {
    const username = e.target.username.value;
    const id = 'u3';
    e.preventDefault();
    console.log('submit');
    chatStore.dispatch({ type: 'user/login', payload: { username, id } });
    console.log(chatStore.getState());
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
