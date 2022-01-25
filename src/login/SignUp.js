import React, { useState } from "react";
const createError = require('http-errors');



function SignUp(props) {
    const [disabled, cDisabled] = useState(false);
    const [current, cCurrent] = useState(undefined);
    const submitHandlerCreate = (e) => {
        console.log("submitted");
        e.preventDefault();
        cDisabled(true);
        let newUser;
        newUser = props.client.signUp(
            e.target.username.value,
            e.target.password.value,
            e.target.email.value,
            e.target.userType.value,
            e.target.firstName.value,
            e.target.lastName.value,
            e.target.bio.value,
            e.target.location.value,



        );
        newUser.then(() => {
            cDisabled(false);
            document.getElementById("addUser").reset();
            alert("Signed up!")
            props.changeSignUp(false);
        })
            .catch(() => {
                alert("an error occurred, please try again");
                cDisabled(false);
            });
    }
    return (
        <div className="outer-container">
            <div className="login-container">
                <div className="login-div">
                    <form onSubmit={(e) => submitHandlerCreate(e)} id="addUser">
                        <div className="form-inner">
                            <h2 >Create an Account</h2>
                            <div className="form-group">
                            <label htmlFor="chooseAccount">Who are you signing up as?</label>
                                <div className="radio-button-employer">
                                    <input type="radio" value="employer" name="userType" id="a1" />
                                    <label for="a1" className="employer-radio">Employer</label>
                                    </div>
                                <div className="radio-button-participant">
                                <input type="radio" value="participant" name="userType" id="a2"  />
                                <label for="a2" className="participant-radio" > Participant </label>
                                </div>
                                <br />
                                <br />
                                
                                <label htmlFor="name">New Username:</label>
                                <input type="text" name="username" defaultValue={props.currentUser?.username || ""}
                                    placeholder="type your username"
                                    disabled={disabled}
                                    required="required" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Create password:</label>
                                <input type="password" name="password" defaultValue={props.currentUser?.password || ""}
                                    placeholder="type your new password"
                                    disabled={disabled}
                                    required="required" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="first_name">First Name:</label>
                                <input type="text" name="firstName" defaultValue={props.currentUser?.firstName || ""}
                                    placeholder="First Name"
                                    disabled={disabled}
                                    required="required" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Last Name:</label>
                                <input type="text" name="lastName" defaultValue={props.currentUser?.lastName || ""}
                                    placeholder="Last Name"
                                    disabled={disabled}
                                    required="required" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Your email:</label>
                                <input type="email" name="email" defaultValue={props.currentUser?.email || ""}
                                    placeholder="example@email.com"
                                    disabled={disabled}
                                    required="required" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Bio:</label>
                                <input type="text" name="bio" defaultValue={props.currentUser?.bio || ""}
                                    placeholder="about me..."
                                    disabled={disabled}
                                    required="required" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="location">Location:</label>
                                <input type="text" name="location" defaultValue={props.currentUser?.location || ""}
                                    placeholder="City, County, Country"
                                    disabled={disabled}
                                    required="required" />
                            </div>
                            <div className="form-group">
                                <button type="submit" onClick={props.signUpClick}
                                    disabled={disabled}>
                                    {" "}
                                    Create Account{" "}
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}


// return (
//     <>
//         <br />
//         SignUp
//         <br />
//         <form onSubmit={(e) => submitHandlerCreate(e)} id="addUser">
//             New Username
//             <br />
//             <input type="text" 
//                 name="userName"
//                    defaultValue={props.currentUser?.userName || ""} 
//                    placeholder="Type your username"
//                    disabled={disabled}
//                    required="required" />
//             <br />
//             Email
//             <br />
//             <input type="email"
//                    name="email"
//                    defaultValue={props.currentUser?.email || ""}  
//                    placeholder="Type your email address"
//                    disabled={disabled}
//                    required="required" />
//             <br />
//             New Password
//             <br />
//             <input type="password"
//                    name="password"
//                    defaultValue={props.currentUser?.password || ""}
//                    placeholder="Type your new password" 
//                    disabled={disabled}
//                    required="required" />
//             <br />
//             <br />
//             <button type="submit" onClick={props.signUpClick} 
//                                   disabled={disabled}>
//                 {" "}
//                 signUp{" "}
//             </button>
//         </form>
//     </>
// );


export default SignUp;