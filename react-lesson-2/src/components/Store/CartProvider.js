import { useReducer } from "react";

import CartContext from "./cart-context";


const defaultCartState = {
    items: [],
    totalAmount: 0
}

const cartReducer = (state, action) => {
    if (action.type === 'ADD') {

    }

    if (action.type === 'REMOVE') {

    }

    return {
        items: updatedItems,
    }

} 