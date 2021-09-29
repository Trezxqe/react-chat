const LoginForm = () => {
  const submitHandler = (e) => {
    e.preventDefaul();
    console.log('submit');
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
