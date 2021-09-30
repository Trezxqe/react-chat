import s from './sidebarActiveUser.module.css';

const SidebarActiveUser = ({ user, type }) => {
  return (
    <div className={`${s.wrapper} ${type ? s.client : s.other}`}>
      <span className={s.username}>{user.username}</span>
      <span className={s.id}>{'[' + user.id + ']'}</span>
    </div>
  );
};

export default SidebarActiveUser;
