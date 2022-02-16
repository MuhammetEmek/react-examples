import logo from './logo.svg';
import './App.css';
import Layout from './components/Layout/Layout';
import { Redirect, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import UserProfile from './components/Profile/UserProfile';
import AuthPage from './pages/AuthPage';
import { useContext } from 'react';
import AuthContext from './store/auth-context';

function App() {

  const authContext = useContext(AuthContext);

  return (
    <Layout>
      <Switch>
        <Route path='/' exact>
          <HomePage></HomePage>
        </Route>

        <Route path='/profile'>
          {authContext.isLoggedin && <UserProfile />}
          {!authContext.isLoggedin && <Redirect to='/auth' />}
          <UserProfile />
        </Route>

        {!authContext.isLoggedin && (
          <Route path='/auth'>
            <AuthPage />
          </Route>
        )}

        <Route path='*'>
          <Redirect to="/" />
        </Route>
      </Switch>

    </Layout>
  );
}

export default App;
