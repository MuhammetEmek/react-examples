import MenuItemForm from "./MenuItemForm";

import classes from './MenuItem.module.css';

const MenuItem =(props)=> {

    const addToCartHandler = amount=> {
        // liste içerisinde redux!!!!!
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