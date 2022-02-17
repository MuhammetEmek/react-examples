import classes from "./Notification.module.css";

const Notification = (props) => {
    let messageCss = '';
    if (props.status === 'error') {
        messageCss = classes.error;
    } else {
        messageCss = classes.success;
    }

    const cssClasses = `${classes.notification} ${messageCss}`
    
    return (
        <section className={cssClasses}>
            <h2>{props.title}</h2>
            <p>{props.message}</p>
        </section>
    )
}

export default Notification;