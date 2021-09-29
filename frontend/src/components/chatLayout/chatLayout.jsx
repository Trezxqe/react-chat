import s from './chatLayout.module.css';
import ChatArea from '../chatArea/chatArea.jsx';
import ChatSidebar from '../chatSidebar/chatSidebar.jsx';
import UserInfo from '../userInfo/userInfo.jsx';

const ChatLayout = () => {
  return (
    <div>
      <UserInfo />
      <div className={s.chatLayout}>
        <ChatSidebar />
        <ChatArea />
      </div>
    </div>
  );
};

export default ChatLayout;
