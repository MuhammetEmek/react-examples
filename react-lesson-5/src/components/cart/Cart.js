import CartItem from "./CartItem";
import classes from "./Cart.module.css";
import Card from "../UI/Card";

const Cart = (props) => {
    let cartItems = [];

    return (
        <Card className={classes.cart}>
            <h2>Alışveriş Sepetiniz</h2>
            <ul>
                {cartItems.map((item) => (
                    <CartItem
                        key={item.id}
                        item={{
                            id: item.id,
                            title:item.name,
                            quantitiy: item.quantitiy,
                            total: item.total,
                            price: item.price
                        }} />
                ))}
            </ul>
        </Card>
    )
}

export default Cart;