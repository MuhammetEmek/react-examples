import classes from "./AuthForm.module.css";

const AuthForm = () => {
    return (
        <section className={classes.auth}>
            <h1>Login</h1>
            <form>
                <div className={classes.control}>
                    <label htmlFor="email">E-Mail</label>
                    <input type="email" id="email" ></input>
                </div>
                <div className={classes.control}>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" ></input>
                </div>
                <div className={classes.actions}>
                    <button>Login</button>
                </div>
            </form>
        </section>
    )
}

export default AuthForm;