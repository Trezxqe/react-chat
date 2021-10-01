import CreateRoomForm from '../createRoomForm/createRoomForm.jsx';
import JoinRoomForm from '../joinRoomForm/joinRoomForm.jsx';
import SidebarActiveDialogs from '../sidebarActiveDialogs/sidebarActiveDialogs.jsx';
import SidebarRoomInfo from '../sidebarRoomInfo/sidebarRoomInfo.jsx';
import s from './chatSidebar.module.css';

const ChatSidebar = () => {
  return (
    <div className={s.wrapper}>
      <CreateRoomForm />
      <JoinRoomForm />
      <SidebarRoomInfo />
      <SidebarActiveDialogs />
    </div>
  );
};

export default ChatSidebar;
