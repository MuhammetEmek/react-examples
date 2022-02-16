import CommentItem from "./CommentItem";
import classes from "./CommentList.module.css";

const CommentList = (props) => {

    return (
       <ul className={classes.comments}>
       {
           props.comments.map((comment) => {
            <CommentItem key={comment.id} text={comment.text} />
           })
       } 
       </ul>
    )
}

export default CommentList;