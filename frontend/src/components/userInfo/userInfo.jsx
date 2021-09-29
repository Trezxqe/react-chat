import { useSelector } from 'react-redux';
import s from './userInfo.module.css';
const UserInfo = () => {
  const { username, id } = useSelector((state) => state);
  return (
    <div className={s.userInfo}>
      Username: {username}, id: {id}
    </div>
  );
};
export default UserInfo;
