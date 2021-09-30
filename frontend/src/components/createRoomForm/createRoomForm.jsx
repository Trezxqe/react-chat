import { useSelector } from 'react-redux';
import webSocket from '../../helpers/webSocket.jsx';
import s from './createRoomForm.module.css';

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
    <div>
      <h3>Create Room</h3>
      <form className={s.form} onSubmit={submitHandler}>
        <label>
          <span>Room name:</span>
          <input className={s.input} type='text' name='roomName' required />
        </label>
        <label>
          <span>Private:</span>
          <input type='checkbox' name='roomType' />
        </label>
        <button className={s.button} type='submit'>
          Create
        </button>
      </form>
    </div>
  );
};

export default CreateRoomForm;