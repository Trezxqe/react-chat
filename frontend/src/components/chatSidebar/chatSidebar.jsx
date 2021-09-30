import SidebarRoomInfo from '../sidebarRoomInfo/sidebarRoomInfo.jsx';
import s from './chatSidebar.module.css';

const ChatSidebar = () => {
  return (
    <div className={s.wrapper}>
      <SidebarRoomInfo />
    </div>
  );
};

export default ChatSidebar;
