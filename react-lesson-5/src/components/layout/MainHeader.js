import classes from "./MainHeader.module.css";

const MainHeader = (props) => {

    return(
        <header className={classes.header}>
            <h1>Alışveriş</h1>
            <nav>
                <ul>
                    <li>
                        Sepet
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default MainHeader;