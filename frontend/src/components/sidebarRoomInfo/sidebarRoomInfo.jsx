import { useSelector } from 'react-redux';
import checkUserType from '../../helpers/other/checkUserType.jsx';
import SidebarActiveUser from '../sidebarActiveUser/sidebarActiveUser.jsx';
import s from './sidebarRoomInfo.module.css';

const SidebarRoomInfo = () => {
  const { username, usersList, currentRoomSize } = useSelector((state) => state);
  return (
    <div className={s.wrapper}>
      <h3 className={s.title}>Active Users</h3>
      <p className={s.online}>
        Online: <span>{currentRoomSize}</span>
      </p>
      <div className={s.listing}>
        {usersList.map((user) => (
          <SidebarActiveUser
            user={user}
            key={user.id}
            type={checkUserType(user.username, username)}
          />
        ))}
      </div>
    </div>
  );
};

export default SidebarRoomInfo;
