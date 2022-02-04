import { useReducer } from "react";
import CartContext from "./CartContext";
import * as ACTION from './actions';

const defaultCartState = {
    items: [],
    totalAmount: 0
}

const cartReducer = (state, action) => {
    let updatedItems;

    const existingCartItemIndex = state.items.findIndex(
        (item) => item.id === action.item.id
    );

    const existingCartItem = state.items[existingCartItemIndex];

    if (action.type === ACTION.ADD) {
        debugger
        const updatedTotalAmount = state.totalAmount + (action.item.price * action.item.amount);

        if (existingCartItem) {
            const updatedItem = {
                ...existingCartItem,
                amount: existingCartItem.amount + action.item.amount
            }

            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex] = updatedItem;
        } 
        else {
            updatedItems = state.items.concat(action.item);
        }

        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        }
    }

    if (action.type === ACTION.REMOVE) {
        const updatedTotalAmount = state.totalAmount - existingCartItem.price;

        if (existingCartItem.amount == 1) {
            updatedItems = state.items.filter(item => item.id !== action.id);
        } 
        else {
            const updatedItem = {
                ...existingCartItem,
                amount: existingCartItem.amount - action.item.amount
            }

            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex] = updatedItem;
        }

        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        }
    }

    return defaultCartState;

}

const CartProvider = (props) => {

    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);
    const addItemToCartHandler = (item) => {
        dispatchCartAction({ type: ACTION.ADD, item: item });
    }

    const removeItemFromCartHandler = (id) => {
        dispatchCartAction({ type: ACTION.REMOVE, id: id })
    }

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler
    };

    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider;