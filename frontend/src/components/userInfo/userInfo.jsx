import { useSelector } from 'react-redux';
import s from './userInfo.module.css';
const UserInfo = () => {
  const { username, userId } = useSelector((state) => state);
  return (
    <div className={s.userInfo}>
      Username: {username}, id: {userId}
    </div>
  );
};
export default UserInfo;
