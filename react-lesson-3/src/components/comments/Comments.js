import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useHttp from "../../hooks/use-http";
import LoadingSpinner from "../UI/LoadingSpinner";
import CommentList from "./CommentList";
import NewComment from "./NewComment";
import classes from "./Comments.module.css";
import { getAllComments } from "../../lib/api";

const Comments = () => {

    const [isAddedComment, setIsAddedComment] = useState(false);
    debugger
    // similar with URLSearchParams 
    const params = useParams();

    const { quoteId } = params;

    const { sendRequest, status, data: loadedComments } = useHttp(getAllComments);

    // First call for component
    useEffect(() => {
        sendRequest(quoteId);
    }, [quoteId, sendRequest])

    const addedCommentHandler = useCallback(() => {
        sendRequest(quoteId)
    }, [sendRequest, quoteId])

    const startAddCommentHandler = () => {
        setIsAddedComment(true);
    }

    let comments;

    if (status === 'pending') {
        comments = (
            <div>
                <LoadingSpinner />
            </div>
        )
    }

    if (status === 'completed' && loadedComments && loadedComments.length > 0) {
        comments = <CommentList comments={loadedComments} />;
    }

    debugger
    return (
        <section className={classes.comments}>
            <h2>Kullanıcı Yorumları</h2>
            
            {!isAddedComment && (
                <button className="btn" onClick={startAddCommentHandler}>Yorum Ekle</button>
            )}

            {isAddedComment && (
                <NewComment quoteId={quoteId} onAddedComment={addedCommentHandler} />                
            )}

            {comments}
        </section>
    )
}

export default Comments;