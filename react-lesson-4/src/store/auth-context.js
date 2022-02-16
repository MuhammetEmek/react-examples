import React, { useCallback, useEffect, useState } from "react";

const AuthContext = React.createContext({
    token: '',
    isLoggedin:false,
    login: (token) => {},
    logout: () => {}
});

const calculateRemainingTime = (expirationTime) => {
    const currentTime = new Date().getTime();
    const adjExpirationTime = new Date(expirationTime).getTime();
    return adjExpirationTime-currentTime;
}

const retrieveStoredToken = () => {
    const storedToken = localStorage.getItem('token');
    const storedExpirationDate = localStorage.getItem('expirationTime')
    const remainingTime = calculateRemainingTime(storedExpirationDate);
    if(remainingTime <= 3600) {
        localStorage.removeItem('token');
        localStorage.removeItem('expirationTime');
        return null;
    }

    return{
        token:storedToken,
        duration:remainingTime
    }
}

let logoutTimer;

export const AuthContextProvider = (props) =>  {
    const tokenData = retrieveStoredToken();
    let initialToken;

    if(tokenData) {
        initialToken = tokenData;        
    }

    const[token, setToken] = useState(initialToken);

    const userIsLoggedIn = !!token; // Not Undefined !

    const logoutHandler = useCallback(() => {
        setToken(null);
        localStorage.removeItem('token');
        localStorage.removeItem('expirationTime');

        if(logoutTimer) {
            clearTimeout(logoutTimer);
        }
    },[]);
    
    const loginHandler = (token, expirationTime) => {
        setToken(token);
        localStorage.setItem('token', token);
        localStorage.setItem('expirationTime', expirationTime);

        const remainingTime = calculateRemainingTime(expirationTime);        
        logoutTimer = setTimeout(logoutHandler, remainingTime);
        
    }

    useEffect(() => {
        if(tokenData) {
            console.log(tokenData.duration);
            logoutTimer = setTimeout(logoutHandler, tokenData.duration);
        }
    }, [tokenData, logoutHandler]);

    const contextValue = {
        token: '',
        isLoggedin:false,
        login: (token) => {},
        logout: () => {}
    };

    return (
        <AuthContext.Provider value={contextValue}>
            {props.children}
        </AuthContext.Provider>
    );

}

export default AuthContext;