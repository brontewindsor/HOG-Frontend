import React, { useState } from "react";

// function EditProfile(props) {
//     return (
//         <>
//     <div className="my_profile_card"> 
//         <br />
//         <h1 className="welcome-header">Username: {props.user}!</h1>
//         <h1 className="email-header">Email: {props.email}!</h1>


//     </div>
//             <div>
//             <input value="First Name"/>
//             <br />
//             <input value="Last Name"/>
//             <button>Submit</button>
//         </div>
        
//         </>
    

    
//     )
// };

// export default () => {
//     return (
        // <div>
        //     <input value="First Name"/>
        //     <input value="Last Name"/>
        //     <button>Submit</button>
        // </div>
//     )
// }


const createError = require('http-errors');



function EditProfile(props) {
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
        <div className="participant-outer-container">
            <div className="participant-container">
                <div className="participant-div">
                    <form onSubmit={(e) => submitHandlerCreate(e)} id="addUser">
                        <div className="form-inner">
                            <h2 >Edit Profile</h2>
                            <div className="form-group">
                            <img src="" alt="profile-pic" className="profile-pic" />
                                    <input type="file" id="imageInput" onChange={""} />
                            <label htmlFor="chooseAccount">Account type: 
                            <input type="text" name="userType" placeholder={props.userType} disabled="disabled"/></label>
                                <label htmlFor="name">Username:
                                <input type="text" name="username" placeholder={props.user} disabled="disabled"/></label>


                                <label htmlFor="first_name">First Name: </label>
                                <input type="text" name="firstName" placeholder={props.firstName}
                                    disabled={disabled}
                                    required="required" />

                                <label htmlFor="last_name">Surname: </label>
                                <input type="text" name="lastName" placeholder={props.lastName}
                                    disabled={disabled}
                                    required="required" />

                                <label htmlFor="bio">Bio: </label>
                                <input type="text" name="bio" placeholder={props.bio}
                                    disabled={disabled}
                                    required="required" />
                                    
                                    <label htmlFor="location">Location: </label>
                                <input type="text" name="location" 
                                    placeholder={props.location}
                                    disabled={disabled}
                                    required="required" />


                                {/* <label htmlFor="website">Website: </label>
                                <input type="text" name="bio" 
                                    placeholder="your website url"
                                    disabled={disabled}
                                    required="required" /> */}
                            </div>
                            
                            <div className="form-group">
                                <button type="submit" onClick={props.signUpClick}
                                    disabled={disabled}>
                                    {" "}
                                    Update{" "}
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


export default EditProfile;
