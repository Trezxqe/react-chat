import { useSelector } from 'react-redux';
import SidebarDialogItem from '../sidebarDialogItem/sidebarDialogItem.jsx';

const SidebarActiveDialogs = () => {
  const { activeDialogs, currentRoomName } = useSelector((state) => state);

  return (
    <div>
      <h3>Active Dialogs</h3>
      {activeDialogs.map((dialog) => (
        <SidebarDialogItem
          key={`dialog-${dialog.soketId}`}
          dialog={dialog}
          currentRoomName={currentRoomName}
        />
      ))}
    </div>
  );
};

export default SidebarActiveDialogs;
