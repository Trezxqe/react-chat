import CreateRoomForm from '../createRoomForm/createRoomForm.jsx';
import SidebarRoomInfo from '../sidebarRoomInfo/sidebarRoomInfo.jsx';
import s from './chatSidebar.module.css';

const ChatSidebar = () => {
  return (
    <div className={s.wrapper}>
      <CreateRoomForm />
      <SidebarRoomInfo />
    </div>
  );
};

export default ChatSidebar;
