import { useContext } from "react";
import CartContext from "../Store/CartContext";
import Modal from "../UI/Modal";

import classes from './Cart.module.css';
import CartItem from "./CartItem";
import Checkout from "./Checkout";

const Cart = (props) => {

    const cartCtx = useContext(CartContext);
    const totalAmount = cartCtx.totalAmount.toFixed(2);

    const cartItemRemoveHandler = (id) => {
        cartCtx.removeItem(id);
    }

    const cartItemAddHandler = (item) => {
        cartCtx.addItem({ ...item, amount: 1 });
    }

    const submitOrderHandler = async (userData) => {
        await fetch('https://mkk-react-edu-default-rtdb.firebaseio.com/orders.json', {
            method: 'POST',
            body: JSON.stringify({
                user: userData,
                orderedItems: cartCtx.items
            })
        })
    }

    const cartItems = (
        <ul>
            {
                cartCtx.items.map((item) => (
                    <CartItem
                        key={item.id}
                        name={item.name}
                        amount={item.amount}
                        price={item.price}
                        onRemove={cartItemRemoveHandler.bind(null, item.id)}
                        onAdd={cartItemAddHandler.bind(null, item)}
                    />
                ))
            }
        </ul>
    )

    return (
        <Modal onClose={props.onClose}>
            {cartItems}
            <div className={classes.total}>
                <span>Toplam</span>
                <span>{totalAmount}</span>
            </div>
            <Checkout onConfirm={submitOrderHandler} />
            <div className={classes.actions}>
                <button className={classes['button-alt']}>Kapat</button>
                <button className={classes.button}>Siparişi Tamamla</button>
            </div>
        </Modal>

    )
}

export default Cart;