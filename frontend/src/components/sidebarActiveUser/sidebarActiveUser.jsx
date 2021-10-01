import s from './sidebarActiveUser.module.css';
import dialog from './dialog.svg';
import webSocket from '../../helpers/webSocket.jsx';

const SidebarActiveUser = ({ user, type, client, currentRoomName }) => {
  const clickHandler = () => {
    const data = {
      dialogProfile: {
        client: {
          username: client,
        },
        recipient: {
          username: user.username,
          socketId: user.socketId,
        },
        currentRoomName,
        roomType: 'dialog',
      },
    };
    webSocket.startDialog(data);
  };
  return (
    <div className={`${s.wrapper} ${type ? s.client : s.other}`}>
      <span className={s.username}>{user.username}</span>
      <span className={s.id}>{'[' + user.socketId + ']'}</span>
      {!type ? (
        <img
          className={s.dialog}
          src={dialog}
          alt='Send private message'
          onClick={clickHandler}
        />
      ) : (
        ''
      )}
    </div>
  );
};

export default SidebarActiveUser;
