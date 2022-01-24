import React, { useState } from "react";

function LoginUser(props) {

  const [disabled, cDisabled] = useState(false);
  const submitHandler = (e) => {
    console.log("submitted");
    e.preventDefault();
    cDisabled(true);

    const user = e.target.username.value;
    props.client
      .login(e.target.username.value, e.target.password.value)
      .then((response) => {
        cDisabled(false);
        console.log(response.data.token);
        props.loggedIn(response.data.token, user, response.data.userType);

      })
      .catch((error) => {
        alert("an error occurred, please try again")
        console.log(error);
        cDisabled(false);
      });
  };


  return (
    <>
    {/* <div>
      <h1>{userType}</h1>
    </div> */}
    <div className="outer-container">
      <div className="login-container">
        <div className="login-div">
          <form onSubmit={(e) => submitHandler(e)}>
            <div className="form-inner">
              <h2 >Login</h2>
              <div className="form-group">
                <label htmlFor="name">Username:</label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  disabled={disabled} />
              </div>
              <br />
              <div className="form-group">
                <label htmlFor="password">Password:</label>
                <input type="password" name="password" id="password" disabled={disabled} />
              </div>
              <div className="form-group">
                <button type="submit" disabled={disabled}>
                  {" "}
                  Login{" "}
                </button>


              </div>
              <div className="form-group">
                <label htmlFor="name">Don't have an account?</label>
              </div>

              <div>
                <button type="button" onClick={props.signUpClick}>
                  {" "}
                  Sign Up{" "}
                </button>
              </div>

            </div>
          </form>
        </div>
      </div>
    </div>
    </>
    // <>
    //   Login
    //   <br />
    //       <form onSubmit={(e) => submitHandler(e)}>
    //         username
    //         <br />
    //         <input type="text" name="username" disabled={disabled} />
    //         <br />
    //         password
    //         <br />
    //         <input type="password" name="password" disabled={disabled} />
    //         <br />
    //         <br />
    //         <button type="submit" disabled={disabled}>
    //           {" "}
    //           Submit{" "}
    //         </button>
    //         <button type="button" onClick={props.signUpClick}>
    //           {" "}
    //           signUp{" "}
    //         </button>
    //       </form>
    // </>
  );
}

export default LoginUser;
