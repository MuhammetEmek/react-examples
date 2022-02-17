import Card from "../UI/Card";
import classes from "./ProductItem.module.css";

import { cartActions } from "../../store/cart-slice";
import { useDispatch } from "react-redux";

const ProductItem = (props) => {

    const {id, title, price, description} = props;

    const dispatch = useDispatch();
    
    const addToCartHandler = () => {
        dispatch(
            cartActions.addItemCart({
                id,
                title,
                price
            })
        )
    }

    return (
        <li className={classes.item}>
            <Card>
                <header>
                    <h3>{title}</h3>
                    <div className={classes.price}>{price}</div>
                </header>
                <p>{description}</p>
                <div className={classes.actions}> 
                    <button onClick={addToCartHandler}>Sepete Ekle</button>
                </div>
            </Card>
        </li>
    )
}

export default ProductItem;