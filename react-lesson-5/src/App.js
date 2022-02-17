import logo from './logo.svg';
import './App.css';
import { Fragment } from 'react';
import Layout from './components/layout/Layout';
import Products from './components/shop/Products';
import Notification from './components/UI/Notification';
import Cart from './components/cart/Cart';

function App() {
  return (
    <Fragment>
      <Notification
        status='error'
        title='Mesaj'
        message='Bu bir mesajdır' />
      <Layout>
        <Cart />
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
