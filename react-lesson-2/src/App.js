import logo from './logo.svg';
import './App.css';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import { useState } from 'react';
import Cart from './components/Cart/Cart';

function App() {

  const [cartShow,setCartShow] = useState(false);

  const showCartHandler = () =>{
    setCartShow(true);
  }
  const closeCartHandler = () =>{
    setCartShow(false);
  }

  return (
    <div>
      {cartShow && <Cart onClose={closeCartHandler} />}
      <Header showCartHandler={showCartHandler} />
      <main>
        <Meals />
      </main>
    </div>
  );
}

export default App;