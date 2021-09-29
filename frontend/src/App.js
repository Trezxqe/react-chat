import MainLayout from './components/mainLayout/mainLayout.jsx';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LoginForm from './components/loginForm/loginForm.jsx';
import ChatLayout from './components/chatLayout/chatLayout.jsx';
const App = () => {
  return (
    <MainLayout>
      <BrowserRouter>
        <Switch>
          <Route path='/' exact>
            <LoginForm />
          </Route>
          <Route path='/chat' exact>
            <ChatLayout />
          </Route>
        </Switch>
      </BrowserRouter>
    </MainLayout>
  );
};

export default App;
