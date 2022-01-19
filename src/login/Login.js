import React, { useState } from "react";
import { ApiClient } from "../apiClient";
import App from '../App';
import LoginUser from "./LoginUser";
import SignUp from "./SignUp";



function Login(props) {
    const [token, changeToken] = useState(window.localStorage.getItem("token"));
    const [user, changeUser] = useState(window.localStorage.getItem("user"));
    const [signUp, changeSignUp] = useState(false);
    const client = new ApiClient(
        token,
        () => logout()
    );

    const login = (newToken, newUser) => {
        window.localStorage.setItem("token", newToken);
        window.localStorage.setItem("user", newUser);
        changeToken(newToken);
        changeUser(newUser);
    }
    const signUpClick = () => {
        changeSignUp(true);
    }

    const logout = () => {
        window.localStorage.removeItem("token");
        changeToken(undefined);
    }

    return (

        <>

            {token ? (
                <App client={client} logout={logout} user={user} />
            ) :
                (signUp ?
                    (<div><SignUp client={client} changeSignUp={changeSignUp} /></div>) : (<LoginUser loggedIn={(token, newUser) => login(token, newUser)}
                        client={client}
                        signUp={signUp}
                        signUpClick={signUpClick} />))}


        </>
    );
}

export default Login;

/** <div>{props.children}</div> */