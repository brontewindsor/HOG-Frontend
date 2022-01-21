import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link, NavLink, Switch, Redirect } from "react-router-dom";
import './Navbar.css';

const createError = require('http-errors');

function employerDashboard(props) {
    return (
        <>
        <div className="welcome_participant">
                  <h1>Welcome , {props.user}!</h1>
        </div>
        <div className="outer-container">
            <div className="login-container">
                <div className="login-div">
                    <form>
                        <div className="form-inner">
                            <h2 >My Profile</h2>
                            <div className="form-group">

                                <label htmlFor="fullName"> Your Name: (props first name, last name) </label>
                                <label htmlFor="name">Username: {props.user}</label>
                            <label htmlFor="chooseAccount">Account type: {props.userType}</label>
                                <label htmlFor="email">Your email: (props email){props.email}</label>
                                <label htmlFor="bio">Bio: </label>
                                <label htmlFor="location">Your location: (props - city, state, country) {props.email}</label>
                                <label htmlFor="website">Website: </label>

                            </div>
                            <div className='edit_profile'>
                            <Link className="EditProfile" to="/EditProfile">Edit Profile</Link>
                            </div>

                            



                        </div>



                    </form>
                </div>
            </div>
        </div>
        </>
    );

}


export default employerDashboard;


