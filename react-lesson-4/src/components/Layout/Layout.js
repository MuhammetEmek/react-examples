import {Fragment} from "react"
import MainNavigation from "./MainNavigation";

const Layout = (props) => {

    return (
        <Fragment>
            <MainNavigation></MainNavigation>
            <main>{props.children}</main>
        </Fragment>
    )
}

export default Layout;