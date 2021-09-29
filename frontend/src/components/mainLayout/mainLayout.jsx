import s from './mainLayout.module.css';

const MainLayout = ({ children }) => {
  return <div className={s.mainLayout}>{children}</div>;
};

export default MainLayout;
