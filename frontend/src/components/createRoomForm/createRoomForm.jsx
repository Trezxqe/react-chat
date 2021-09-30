const CreateRoomForm = () => {
  const submitHandler = (e) => {
    e.preventDefault();
    console.log('creating room');
    e.target.reset();
  };
  return (
    <form onSubmit={submitHandler}>
      <label>
        <span>Room name:</span>
        <input type='text' name='roomName' />
      </label>
      <label>
        <span>Private:</span>
        <input type='checkbox' name='roomType' />
      </label>
      <button>Create</button>
    </form>
  );
};

export default CreateRoomForm;
