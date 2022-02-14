import classes from './DetailQuote.module.css';

const DetailQuote = (props) => {

    return(
        <figure className={classes.quote}>
            <p>{props.text}</p>
            <figcaption>{props.author}</figcaption>
        </figure>
    )
}

export default DetailQuote;