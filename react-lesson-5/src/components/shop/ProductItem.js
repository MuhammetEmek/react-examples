import Card from "../UI/Card";
import classes from "./ProductItem.module.css";

const ProductItem = (props) => {
    return (
        <li className={classes.item}>
            <Card>
                <header>
                    <h3>{props.title}</h3>
                    <div className={classes.price}>{props.price}</div>
                </header>
                <p>{props.description}</p>
                <div className={classes.actions}> 
                    <button>Sepete Ekle</button>
                </div>
            </Card>
        </li>
    )
}

export default ProductItem;