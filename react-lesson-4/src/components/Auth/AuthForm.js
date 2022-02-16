import { useContext, useRef, useState } from "react";
import { useHistory } from 'react-router-dom';
import AuthContext from "../../store/auth-context";
import classes from "./AuthForm.module.css";

const API_KEY = "AIzaSyD6a2l5QJEIAjU_Z0cjjNDaJU3EhIW3fUg";

const AuthForm = () => {

    const history = useHistory();

    const emailInputRef = useRef();
    const passwordInputRef = useRef();

    const authContext = useContext(AuthContext);

    const [isLogin, setIsLogin] = useState(true);
    const [isLoading, setIsLoading] = useState(false);

    const submitHandler = (event) => {
        event.preventDefault();

        const email = emailInputRef.current.value;
        const password = passwordInputRef.current.value;

        setIsLoading(true);

        let url;
        if (isLogin) {
            url = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=";
        } else {
            url = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=";
        }
        url = url + API_KEY;

        fetch(url, {
            method: 'POST',
            body: JSON.stringify({
                email: email,
                password: password,
                returnSecureToken: true,
            }),
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then((res) => {

                setIsLoading(false);
                if (res.ok) {
                    return res.json();
                }
                else {
                    return res.json().then((data) => {

                        throw new Error("Authetication failed! ");

                    })
                }
            })
            .then((data) => {

                const expirationTime = new Date(
                    new Date().getTime() + data.expiresIn * 1000
                );

                authContext.login(data.idToken, expirationTime.toISOString());
                history.replace('/')
            })
            .catch((err) => {
                alert(err.message);
            })
    };

    const switchAuthModeHandler = () => {
        setIsLogin((prevState) => !prevState);
    }

    return (
        <section className={classes.auth}>
            <h1> {isLogin ? 'Login' : 'Sign Up'}</h1>
            <form onSubmit={submitHandler}>
                <div className={classes.control}>
                    <label htmlFor="email">E-Mail</label>
                    <input type="email" id="email" ref={emailInputRef}></input>
                </div>
                <div className={classes.control}>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" ref={passwordInputRef}></input>
                </div>
                <div className={classes.actions}>
                    {!isLoading && (
                        <button>{isLogin ? 'Login' : 'Create New User'}</button>
                    )}

                    {isLoading && <p>Pending...</p>}

                    <button type='button' className={classes.toggle} onClick={switchAuthModeHandler}>
                        {isLogin ? 'Create New User' : 'Login'}
                    </button>

                </div>
            </form>
        </section>
    )
}

export default AuthForm;