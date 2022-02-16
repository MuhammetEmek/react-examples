import { useEffect, useRef } from "react";
import useHttp from "../../hooks/use-http";
import { addComment } from "../../lib/api";
import LoadingSpinner from "../UI/LoadingSpinner";
import classes from "./NewComment.module.css";

const NewComment = (props) => {
    const {sendRequest, status, error} = useHttp(addComment);
    const commentInputRef = useRef();
    const {onAddedComment} = props;

    useEffect(() => {
        if(status === 'completed' && !error) {
            onAddedComment();
        }
    }, [status, error, onAddedComment])

    const submitFormHandler = (event) => {
        debugger
        event.preventDefault();
        const commentValue = commentInputRef.current.value;

        sendRequest({commentData: {text:commentValue}, quoteId: props.quoteId})
    }

    return (
        <form className={classes.form} onSubmit={submitFormHandler}>
            {status === 'pending' && (
                <div><LoadingSpinner></LoadingSpinner></div>
            )}
        
            <div className={classes.control}>
                <label htmlFor="comment">Yorum</label>
                <textarea id="comment" rows='5' ref={commentInputRef}></textarea>
            </div>
            <div className={classes.actions}>
                <button className="btn">Yorum Ekle</button>
            </div>
        </form>
    )
}

export default NewComment;