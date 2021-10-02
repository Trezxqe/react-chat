import webSocket from '../../helpers/webSocket.jsx';
import s from './sidebarDialogItem.module.css';
const SidebarDialogItem = ({ dialog, currentRoomName }) => {
  const time = dialog.date.replace(/.+([0-9:]{8}).+/, '$1');

  const clickHandler = () => {
    if (currentRoomName !== dialog.dialogName) {
      const roomData = {
        currentRoomName: currentRoomName,
        roomName: dialog.dialogName,
        roomProfile: {
          roomType: 'dialog',
        },
      };
      webSocket.joinRoom(roomData);
    }
  };
  return (
    <div className={s.wrapper} onClick={clickHandler}>
      <p className={s.name}>{dialog.dialogName}</p>
      <p className={s.info}>
        <span className={s.time}>{`(${time})`}</span>{' '}
        <span className={s.username}>{dialog.username}:</span>{' '}
        <span className={s.message}>{dialog.message}</span>
      </p>
    </div>
  );
};

export default SidebarDialogItem;
