import './App.css';
import Layout from './components/layout/Layout';
import { Route, Switch, Redirect, BrowserRouter } from 'react-router-dom';
import AllQuotes from './pages/AllQuotes';

function App() {
  return (
    <Layout>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/quotes" />
          </Route>
          <Route path="/quotes" exact>
            <AllQuotes />
          </Route>
        </Switch>
      </BrowserRouter>
    </Layout>
  );
}

export default App;
