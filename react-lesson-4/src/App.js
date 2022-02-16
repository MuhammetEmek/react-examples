import logo from './logo.svg';
import './App.css';
import Layout from './components/Layout/Layout';
import { Redirect, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import UserProfile from './components/Profile/UserProfile';
import AuthPage from './pages/AuthPage';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path='/' exact>
          <HomePage></HomePage>
        </Route>
        <Route path='/profile'>
          <UserProfile />
        </Route>
        <Route path='/auth'>
          <AuthPage />
        </Route>
        <Route path='*'>
          <Redirect to="/" />
        </Route>
      </Switch>

    </Layout>
  );
}

export default App;
