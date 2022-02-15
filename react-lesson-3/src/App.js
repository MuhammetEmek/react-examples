import './App.css';
import Layout from './components/layout/Layout';
import { Route, Switch, Redirect, BrowserRouter } from 'react-router-dom';
import AllQuotes from './pages/AllQuotes';
import QuoteDetail from './pages/QuoteDetail';
import NewQuote from './pages/NewQuote';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/quotes" />
          </Route>
          <Route path="/quotes" exact>
            <AllQuotes />
          </Route>
          <Route path="/quotes/:quoteId" exact>
            <QuoteDetail />
          </Route>
          <Route path="/new-quote/" exact>
            <NewQuote />
          </Route>
          <Route path="*" exact>
            <NotFound />
          </Route>
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
