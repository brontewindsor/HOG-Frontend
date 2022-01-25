import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link, NavLink, Switch, Redirect } from "react-router-dom";
import './Navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './App'
import Add from "../components/Add";
import Find from "../components/Find";
import Button from 'react-bootstrap/Button';
import SProfilecard from './SProfilecard';
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPortrait ,faEnvelope} from '@fortawesome/free-solid-svg-icons';
import { faGithub ,faLinkedin } from '@fortawesome/free-brands-svg-icons'

// const createError = require('http-errors');

function EmployerDashboard(props) {
    const [profileCards, cProfileCards] = useState([]);
    const [current, cCurrent] = useState(undefined);
    const [show,setShow]=useState(false)
    const [show2,setShow2]=useState(false)
    const [ashow2,asetShow2]=useState(false)
  
    const refreshList = () => {
    //   props.client.getProfileCards().then((response) => cProfileCards(response.data));
    };

    const querySearch = (searchParams) => {
        props.client.queryResult(searchParams).then((response) => cProfileCards(response.data))
      }
    
      useEffect(() => {
        refreshList();
      }, []);

      function buildcards() {
        return profileCards.map((current) => {
          return (
            <>
              <SProfilecard id={current._id} fullname={current.fullname} email={current.email} bio={current.bio} linkedin={current.linkedin} github={current.github} portfolio={current.portfolio} picture={current.picture} ></SProfilecard>
            </>
    
    
          );
        });
      }

    return (
        
            <>
            <div className="welcome_participant">
                      <h1>Welcome , {props.user}!</h1>
  
            </div>
            <br />
            <div className="search-profiles-btn">
            <Link className="search-profiles-button" to="/SocialCard"> Search Profiles</Link>
            </div>
            <div className="employer-outer-container">
                <div className="employer-container">
                    <div className="employer-div">
                        <form>
                            <div className="form-inner">
                                <h2 >{props.firstName} {props.lastName}</h2>
                                <div className="form-group">

                                    <label htmlFor="name">Username: {props.user}</label>
                                <label htmlFor="chooseAccount">Account type: {props.userType}</label>
                                    <label htmlFor="email">Your email: {props.email}</label>
                                    <label htmlFor="bio">Bio: {props.bio} </label>
                                    <label htmlFor="location">Your location: {props.location}</label>
                                    <label htmlFor="website">Website: </label>
                                
                                </div>
                                <div className="employer-social-icons">
                                <a href={"mailto:"+props.email}> <FontAwesomeIcon icon = {faEnvelope}></FontAwesomeIcon></a>
                                <a href target="_blank" href={props.github}><FontAwesomeIcon icon = {faGithub}></FontAwesomeIcon></a>
                                <a href target="_blank" href={props.linkedin}><FontAwesomeIcon icon = {faLinkedin}></FontAwesomeIcon></a>
                                <a href target="_blank" href= {props.portfolio}><FontAwesomeIcon icon = {faPortrait}></FontAwesomeIcon></a>
                                </div>
                                <div className='edit_profile_btn'>
                                <Link className="EditProfile" to="/EditProfile">Edit Profile</Link>
                                
                                <Button variant="success" size="sm" onClick={() => props.updateProfileCard(props.id)}> edit profile</Button>

                                </div>
                                <div className="participant-logout-btn">
                                <Button className="participant-logout-btn" onClick={props.logout}>Logout</Button>
                                </div>

                                

    
    
                            </div>
    
    
    
                        </form>
                    </div>
                </div>
            </div>

         </>
    );

}


export default EmployerDashboard;


