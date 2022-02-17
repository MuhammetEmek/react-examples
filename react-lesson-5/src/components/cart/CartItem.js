import classes from "./CartItem.module.css";

const CartItem = (props) => {
    const {title, total, price, id, quantity} = props.item;
    return (
        <li className={classes.item}>
            <header>
                <h3>{title}</h3>
                <div className={classes.price}>
                    ${total} {' '}
                    <span className={classes.itemprice}>(${price.toFixed(2)} / adet)</span>
                </div>
            </header>
            <div className={classes.details}>
                <div className={classes.quantity}>
                    x <span>{quantity}</span>                    
                </div>
                <div className={classes.actions}>
                    <button>-</button>
                    <button>+</button>
                </div>
            </div>
        </li>
    )
}

export default CartItem;