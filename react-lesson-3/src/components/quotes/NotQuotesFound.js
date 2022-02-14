import { Link } from "react-router-dom";


import classes from './NotQuotesFound.module.css';

const NotQuotesFound = () => {
    return (
        <div className={classes.noquotes}>
            <p>Yazı bulunamadı!</p>
            <Link to='/new-quote'>
                Yeni Yazı Ekle
            </Link>
        </div>
    )
}

export default NotQuotesFound;