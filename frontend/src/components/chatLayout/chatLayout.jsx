import s from './chatLayout.module.css';
import ChatArea from '../chatArea/chatArea.jsx';
import ChatSidebar from '../chatSidebar/chatSidebar.jsx';

const ChatLayout = () => {
  return (
    <div className={s.chatLayout}>
      <ChatSidebar />
      <ChatArea />
    </div>
  );
};

export default ChatLayout;
