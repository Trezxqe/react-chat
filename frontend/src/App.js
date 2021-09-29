import MainLayout from './components/mainLayout/mainLayout.jsx';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LoginForm from './components/loginForm/loginForm.jsx';
const App = () => {
  return (
    <MainLayout>
      <BrowserRouter>
        <Switch>
          <Route path='/' exact>
            <LoginForm />
          </Route>
        </Switch>
      </BrowserRouter>
    </MainLayout>
  );
};

export default App;
