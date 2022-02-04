import MenuItemForm from "./MenuItemForm";

import classes from './MenuItem.module.css';
import { useContext } from "react";
import CartContext from "../../Store/CartContext";

const MenuItem =(props)=> {


    const cartCtx = useContext(CartContext);


    const addToCartHandler = amount=> {
        // liste içerisinde redux!!!!!

        cartCtx.addItem({
            id:props.id,
            name: props.name,
            amount: amount,
            price: props.price
        });

        console.log(cartCtx.items)

    }

    return(

        <li className={classes.meal}>
            <div>
            <h3>{props.name}</h3>
            <div className={classes.description}>{props.description}</div>
            <div className={classes.price}>{props.price}</div>
            </div>
            <div>
                <MenuItemForm id={props.id} onAddToCart={addToCartHandler} />
            </div>
        </li>

    )

}

export default MenuItem;