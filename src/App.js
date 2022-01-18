import React, { useState } from "react";
import Dashboard from "./components/Dashboard.module";
import { ApiClient } from "./apiClient";
import Login from "./login/Login";
import SignUp from "./login/SignUp";


function App() {
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
        <Dashboard client={client} logout={logout} user={user} />
      ) :
        (signUp ?
          (<div><SignUp client={client} changeSignUp={changeSignUp}
          /></div>) : (<Login loggedIn={(token, newUser) => login(token, newUser)}
            client={client}
            signUp={signUp}
            signUpClick={signUpClick} />))}



    </>
  );
}

export default App;
