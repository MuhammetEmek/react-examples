import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../store/auth-context";
import classes from "./MainNavigation.module.css";

const MainNavigation = () => {

    const authContext = useContext(AuthContext);
    const isLoggedIn = authContext.isLoggedin;
   
    const logoutHandler = () => {
        authContext.logout();
    }

    return (
        <header className={classes.header}>
            <Link to='/'><div className={classes.logo}>MKK Yönetim</div></Link>
            <nav>
                <ul>
                    {!isLoggedIn && (
                        <li>
                            <Link to='/auth'>Login</Link>
                        </li>
                    )}

                    {isLoggedIn && (
                        <li>
                            <Link to='/profile'>Profile</Link>
                        </li>
                    )}

                    {isLoggedIn && (
                        <li>
                            <button onClick={logoutHandler}>Logout</button>
                        </li>
                    )}                    
                </ul>
            </nav>
        </header>
    )
}

export default MainNavigation;