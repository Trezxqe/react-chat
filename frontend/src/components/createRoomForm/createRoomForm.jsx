import { useSelector } from 'react-redux';
import webSocket from '../../helpers/webSocket.jsx';

const CreateRoomForm = () => {
  const { username } = useSelector((state) => state);
  const submitHandler = (e) => {
    e.preventDefault();
    const data = {
      username,
      roomName: e.target.roomName.value,
      private: e.target.roomType.checked,
    };
    webSocket.createRoom(data);
    e.target.reset();
  };
  return (
    <form onSubmit={submitHandler}>
      <label>
        <span>Room name:</span>
        <input type='text' name='roomName' required />
      </label>
      <label>
        <span>Private:</span>
        <input type='checkbox' name='roomType' />
      </label>
      <button type='submit'>Create</button>
    </form>
  );
};

export default CreateRoomForm;
