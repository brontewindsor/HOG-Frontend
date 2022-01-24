import React, { useState, useEffect } from "react";
import { ApiClient } from "../apiClient";
import App from '../App';
import ParticipantDashboard from "../pages/ParticipantDashboard";
import LoginUser from "./LoginUser";
import SignUp from "./SignUp";
import Axios from "axios";




function Login(props) {
    // const [userType, setRole] = useState("");

    // useEffect(() => {

    //     Axios.get('http://localhost:3000/').then((response) => {
    //         if (response.data.loggedIn == true) {
    //             setRole(response.data.user.userType);
    //         }
    //     })

    // }, []);


    const [token, changeToken] = useState(window.localStorage.getItem("token"));
    const [user, changeUser] = useState(window.localStorage.getItem("user"));
    const [userType, changeUserType] = useState(window.localStorage.getItem("userType"));
    const [signUp, changeSignUp] = useState(false);
    const client = new ApiClient(
        token,
        () => logout()
    );

    const login = (newToken, newUser, newUserType) => {
        window.localStorage.setItem("token", newToken);
        window.localStorage.setItem("user", newUser);
        window.localStorage.setItem("userType", newUserType);
        changeToken(newToken);
        changeUser(newUser);
        changeUserType(newUserType);
    }
    const signUpClick = () => {
        changeSignUp(true);
    }

    const logout = () => {
        window.localStorage.removeItem("token");
        window.localStorage.removeItem("user");
        changeToken(undefined);
    }

    return (

        <>
{/* 
<div>
      <h1>{userType}</h1>
    </div> */}

            {token ? (
                <App client={client} logout={logout} user={user} userType={userType} />
            ) :
                (signUp ?
                    (<div><SignUp client={client} changeSignUp={changeSignUp} /></div>) : (<LoginUser loggedIn={(token, newUser, newUserType) => login(token, newUser, newUserType)}
                        client={client}
                        signUp={signUp}
                        signUpClick={signUpClick} />))}


        </>
    );
}

export default Login;

/** <div>{props.children}</div> */

