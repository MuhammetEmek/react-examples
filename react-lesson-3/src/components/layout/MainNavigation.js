import {NavLink} from "react-router-dom";

import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
    return(
        <header className={classes.header}>
            <div className={classes.logo}>

            </div>
            <nav className={classes.nav}>
                <ul>
                    <li>
                       Bütün Yazılar
                    </li>
                    <li>
                        Yeni Yazı Ekle
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default MainNavigation;