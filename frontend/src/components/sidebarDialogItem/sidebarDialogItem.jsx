import s from './sidebarDialogItem.module.css';
const SidebarDialogItem = ({ dialog }) => {
  const time = dialog.date.replace(/.+([0-9:]{8}).+/, '$1');
  return (
    <div className={s.wrapper}>
      <p className={s.name}>{dialog.dialogName}</p>
      <p className={s.info}>
        <span className={s.time}>{`(${time})`}</span>{' '}
        <span className={s.username}>{dialog.username}:</span>{' '}
        <span className={s.message}>{dialog.message}</span>
      </p>
    </div>
  );
};

export default SidebarDialogItem;
