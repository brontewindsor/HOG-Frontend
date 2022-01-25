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
    const [firstName, changeFirstName] = useState(window.localStorage.getItem("firstName"));
    const [lastName, changeLastName] = useState(window.localStorage.getItem("lastName"));
    const [email, changeEmail] = useState(window.localStorage.getItem("email"));
    const [bio, changeBio] = useState(window.localStorage.getItem("bio"));
    const [location, changeLocation] = useState(window.localStorage.getItem("location"));
    const [signUp, changeSignUp] = useState(false);

    const client = new ApiClient(
        token,
        userType,
        user,
        () => logout()
    );

    const login = (newToken, newUser, newUserType, newFirstName, newLastName, newEmail, newBio, newLocation) => {
        window.localStorage.setItem("token", newToken);
        window.localStorage.setItem("user", newUser);
        window.localStorage.setItem("userType", newUserType);
        window.localStorage.setItem("firstName", newFirstName);
        window.localStorage.setItem("lastName", newLastName);
        window.localStorage.setItem("email", newEmail);
        window.localStorage.setItem("bio", newBio);
        window.localStorage.setItem("location", newLocation);



        changeToken(newToken);
        changeUser(newUser);
        changeUserType(newUserType);
        changeFirstName(newFirstName);
        changeLastName(newLastName);
        changeEmail(newEmail);
        changeBio(newBio);
        changeLocation(newLocation);
    }
    const signUpClick = () => {
        changeSignUp(true);
    }

    const logout = () => {
        window.localStorage.removeItem("token");
        window.localStorage.removeItem("user");
        window.localStorage.removeItem("userType");

        changeToken(undefined);
        changeUser("");
        changeUserType("");


    }

    return (

        <>
        


            {token ? (
                <App client={client} logout={logout} user={user} userType={userType} firstName={firstName} lastName={lastName} email={email} bio={bio} location={location}/>
            ) :
                (signUp ?
                    (<div><SignUp client={client} changeSignUp={changeSignUp} /></div>) : (<LoginUser loggedIn={(token, newUser, newUserType, newFirstName, newLastName, newEmail, newBio, newLocation) => login(token, newUser, newUserType, newFirstName, newLastName, newEmail, newBio, newLocation)}
                        client={client}
                        signUp={signUp}
                        signUpClick={signUpClick} />))
                        
            }


        </>
    );
}

export default Login;

/** <div>{props.children}</div> */

