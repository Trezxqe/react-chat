import SidebarUser from '../sidebarUser/sidebarUser.jsx';
import s from './chatSidebar.module.css';

const ChatSidebar = () => {
  const db = [
    { id: 'u1', name: 'biba' },
    { id: 'u2', name: 'boba' },
    { id: 'u3', name: 'wake' },
  ];
  return (
    <div className={s.chatSidebar}>
      <div>Active Users</div>
      {db.map((user) => (
        <SidebarUser name={user.name} id={user.id} key={user.id} />
      ))}
    </div>
  );
};

export default ChatSidebar;
