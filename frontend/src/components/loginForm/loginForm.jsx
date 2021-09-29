import { useState } from 'react';
import { Redirect } from 'react-router';

const LoginForm = () => {
  const [redirect, setRedirect] = useState(false);
  const submitHandler = (e) => {
    e.preventDefault();
    console.log('submit');
    setRedirect(true);
  };
  return (
    <>
      {!redirect ? (
        <form onSubmit={submitHandler}>
          <input type='text' name='username' />
          <br />
          <button type='submit'>Join</button>
        </form>
      ) : (
        <Redirect to='/chat' />
      )}
    </>
  );
};

export default LoginForm;
