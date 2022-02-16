import classes from "./MainNavigation.module.css";

const MainNavigation = () => {

    return (
        <header className={classes.header}>
            <div className={classes.logo}>MKK Yönetim</div>
            <nav>
                <ul>
                    <li>
                        Login
                    </li>
                    <li>
                        Profile
                    </li>
                    <li>
                        Logout
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default MainNavigation;