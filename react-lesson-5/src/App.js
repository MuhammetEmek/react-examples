import logo from './logo.svg';
import './App.css';
import { Fragment, useEffect } from 'react';
import Layout from './components/layout/Layout';
import Products from './components/shop/Products';
import Notification from './components/UI/Notification';
import Cart from './components/cart/Cart';
import { sendCartData, fetchCartData } from './store/cart-actions';
import { useDispatch, useSelector } from 'react-redux';

let isInitial = true;

function App() {
  const dispatch = useDispatch();
   // First createStore for using useSelector (look store/index.js)
  const showCart    = useSelector((state) => state.ui.cartIsVisible);
  const cart         = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.ui.notification);

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  useEffect(() => {

    if(isInitial) {
      isInitial = false;
      return;
    }

    if(cart.changed) {
      dispatch(sendCartData(cart));
    }    
  }, [cart, dispatch]);

  return (
    <Fragment>
      {notification && (<Notification
        status='error'
        title='Mesaj'
        message='Bu bir mesajdır' />
      )}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
