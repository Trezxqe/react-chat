import { useSelector } from 'react-redux';
import SidebarUser from '../sidebarUser/sidebarUser.jsx';
import s from './chatSidebar.module.css';

const ChatSidebar = () => {
  const { usersList } = useSelector((state) => state);
  return (
    <div className={s.chatSidebar}>
      <div>Active Users</div>
      {usersList.map((user) => (
        <SidebarUser name={user.username} id={user.id} key={user.id} />
      ))}
    </div>
  );
};

export default ChatSidebar;
