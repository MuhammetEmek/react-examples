import logo from './logo.svg';
import './App.css';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import { useState } from 'react';
import Cart from './components/Cart/Cart';
import CartProvider from './components/Store/CartProvider';

function App() {

  const [cartShow,setCartShow] = useState(false);

  const showCartHandler = () =>{
    setCartShow(true);
  }

  const closeCartHandler = () =>{
    setCartShow(false);
  }

  return (
    <CartProvider>
      {cartShow && <Cart onClose={closeCartHandler} />}
      <Header showCartHandler={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
  
}

export default App;