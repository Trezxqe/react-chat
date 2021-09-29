import MainLayout from './components/mainLayout/mainLayout.jsx';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import LoginForm from './components/loginForm/loginForm.jsx';
import ChatLayout from './components/chatLayout/chatLayout.jsx';
import { useSelector } from 'react-redux';
const App = () => {
  const { id } = useSelector((state) => state);
  return (
    <MainLayout>
      <BrowserRouter>
        <Switch>
          <Route path='/' exact>
            {id ? <Redirect to='/chat' /> : <LoginForm />}
          </Route>
          <Route path='/chat' exact>
            {id ? <ChatLayout /> : <Redirect to='/' />}
          </Route>
        </Switch>
      </BrowserRouter>
    </MainLayout>
  );
};

export default App;
