import React,{Fragment} from "react";
import HeaderCartButton from "./HeaderCartButton";
import mealImage from '../../assets/meals.jpg';

import classes from './Header.module.css';

const Header = (props) => {

    return(
        <Fragment>
            <header className={classes.header}>
                <h1>React Food App</h1>
                <HeaderCartButton />
            </header>
            <div className={classes['main-image']}>
                <img src={mealImage} />
            </div>
        </Fragment>
    )
}

export default Header;