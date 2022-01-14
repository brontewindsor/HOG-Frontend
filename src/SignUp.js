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
                                <label htmlFor="email">Your email:</label>
                                <input type="email" name="email" defaultValue={props.currentUser?.email || ""}
                                    placeholder="type your email address"
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