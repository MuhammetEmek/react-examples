import CartIcon from "../Cart/CartIcon";

import React,{useState} from "react";

import classes from './HeaderCartButton.module.css';

const HeaderCartButton = (props) => {

    const [btnIsHighlighted,setBtnIsHighligted] = useState(false);


    const btnClasses =  `${classes.button} ${btnIsHighlighted ? classes.bump : ''}`;

    return(
        <button className={btnClasses}>
            <span className={classes.icon}>
               <CartIcon />
            </span>
            <span>
                Sepetiniz
            </span>
            <span className={classes.badge}>
                12
            </span>

        </button>

    )

}

export default HeaderCartButton;