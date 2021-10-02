import { useSelector } from 'react-redux';
import SidebarDialogItem from '../sidebarDialogItem/sidebarDialogItem.jsx';

const SidebarActiveDialogs = () => {
  const { activeDialogs } = useSelector((state) => state);

  return (
    <div>
      <h3>Active Dialogs</h3>
      {activeDialogs.map((dialog) => (
        <SidebarDialogItem key={dialog.soketId} dialog={dialog} />
      ))}
    </div>
  );
};

export default SidebarActiveDialogs;
