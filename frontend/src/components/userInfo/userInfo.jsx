import s from './userInfo.module.css';
const UserInfo = () => {
  const db = { username: 'wake', id: 'u3' };
  return (
    <div className={s.userInfo}>
      Username: {db.username}, id: {db.id}
    </div>
  );
};
export default UserInfo;
