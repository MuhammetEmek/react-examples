import classes from './Checkout.module.css';

const Checkout = (props) => {
    return (
        <form className={classes.form}>
            <div className={classes.control}>
                <label>Your Name</label>
                <input type='text' />
            </div>
            <div className={classes.control}>
                <label>Street</label>
                <input type='text' />
            </div>
            <div className={classes.control}>
                <label>Postal Code</label>
                <input type='text' />
            </div>
            <div className={classes.control}>
                <label>City</label>
                <input type='text' />
            </div>
            <div className={classes.actions}>
                <button className={classes.submit}>Confim</button>
                <button type='button'>Cancel</button>
            </div>
        </form>
    )
}

export default Checkout;