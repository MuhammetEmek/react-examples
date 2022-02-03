import { useRef, useState } from "react";
import Input from "../../UI/Input";

import classes from './MenuItemForm.module.css';

// useXXX => hooks

const MenuItemForm = (props) => {

    const [amountIsValid, setAmountIsValid] = useState(false);


    const amountInputRef = useRef();
    

    const submitHandler =(event) => {


        event.preventDefault();

    
        const enteredAmount =amountInputRef.current.value;
        const enteredAmountNumber = +enteredAmount;

        if(enteredAmount.trim().length ===0 || enteredAmountNumber <1 || enteredAmountNumber >5){
            setAmountIsValid(true);
            return;
        }

        props.onAddToCart(enteredAmountNumber);
    }


    return (

        <form className={classes.form} onSubmit={submitHandler}>
            <Input
                ref={amountInputRef}
                label="Amount"
                input={{
                    id: 'amount_' + props.id,
                    type: 'number',
                    min: '1',
                    max: '5',
                    step: '1',
                    defaultValue: '1',
                }}
            />

            <button>+ Ekle</button>
            {amountIsValid && <p>Miktar 1 ila 5 arasında olmalıdır!</p>}
        </form>

    )
}

export default MenuItemForm;