import sitiller from './Card.module.css';

const Card = props => {
    return <div className={sitiller.card}>{props.children}</div>
};

export default Card;