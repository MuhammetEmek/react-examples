import { useRef } from 'react';
import classes from './Checkout.module.css';

const Checkout = (props) => {
    
    const nameInputRef = useRef();
    const streetInputRef = useRef();
    const postalCodeInputRef = useRef();
    const cityInputRef = useRef();

    const confirmHandler = (event) => {
        event.preventDefault();

        const enteredName = nameInputRef.current.value;
        const enteredStreet = streetInputRef.current.value;
        const enteredPostalCode = postalCodeInputRef.current.value;
        const enteredCity = cityInputRef.current.value;

        props.onConfirm({
            name: enteredName,
            street: enteredStreet,
            city: enteredCity,
            postalCode: enteredPostalCode
        });

    }
    return (        
        <form className={classes.form} onSubmit={confirmHandler}>
            <div className={classes.control}>
                <label>Your Name</label>
                <input type='text' ref={nameInputRef}/>
            </div>
            <div className={classes.control}>
                <label>Street</label>
                <input type='text' ref={streetInputRef} />
            </div>
            <div className={classes.control}>
                <label>Postal Code</label>
                <input type='text' ref={postalCodeInputRef} />
            </div>
            <div className={classes.control}>
                <label>City</label>
                <input type='text' ref={cityInputRef} />
            </div>
            <div className={classes.actions}>
                <button className={classes.submit}>Confim</button>
                <button type='button'>Cancel</button>
            </div>
        </form>
    )
}

export default Checkout;