import { Fragment, useRef, useState } from "react";
import { Prompt } from "react-router-dom";
import Card from "../UI/Card";
import LoadingSpinner from "../UI/LoadingSpinner";
import classes from "./QuoteForm.module.css";

const QuoteForm = (props) => {

    const [isEnter, setIsEnter] = useState(false);

    const authorInputRef = useRef();
    const textInputRef   = useRef();

    const submitFormHandler = (event) => {
        event.preventDefault();
        const authorValue = authorInputRef.current.value;
        const textValue = textInputRef.current.value;

        props.onAddQuote({author:authorValue, text:textValue});
    }

    const finishEnterHandler = () => {
        setIsEnter(true);
    }

    const formFocusHandler = () => {
        setIsEnter(true);
    }

    return (
        <Fragment>
            <Prompt when={isEnter} message={(location) => 'Emin misiniz?'} />            
            <Card>
                <form className={classes.form} onSubmit={submitFormHandler} onFocus={formFocusHandler}>
                    {props.isLoading && (
                        <div className={classes.loading}>
                            <LoadingSpinner></LoadingSpinner>
                        </div>
                    )}
                    <div className={classes.control}>
                        <label>Author</label>
                        <input type="text" id="author" ref={authorInputRef} />
                    </div>
                    <div className={classes.control} >
                        <label>Text</label>
                        <textarea id="text" ref={textInputRef} />
                    </div>
                    <div className={classes.actions}>
                        <button onClick={finishEnterHandler}>Add Quote</button>
                    </div>
                </form>
            </Card>
        </Fragment>
    )
}

export default QuoteForm;