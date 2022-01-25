import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
// import './App'
import { BrowserRouter as Router, Routes, Route, Link, NavLink, Switch, Redirect } from "react-router-dom";
import './Navbar.css';
// import Add from "../components/Add";
import Find from "../components/Find";
import Button from 'react-bootstrap/Button';
import Profilecard from './Profilecard';
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPortrait ,faEnvelope} from '@fortawesome/free-solid-svg-icons';
import { faGithub ,faLinkedin } from '@fortawesome/free-brands-svg-icons'

const createError = require('http-errors');

function ParticipantDashboard(props) {
    const [profileCards, cProfileCards] = useState([]);
    const [current, cCurrent] = useState(undefined);
    const refreshList = () => {
    // props.client.getProfileCards().then((response) => cProfileCards(response.data));
    };
   
    const updateProfileCard= (id) => {
      let e=profileCards.filter((profileCard)=>{return profileCard._id == id});
     if(e.length>0){
      cCurrent(e[0])
     }
    };
  
    useEffect(() => {
      refreshList();
    }, []);
    
    function buildcards() {
      return profileCards.map((current) => {
        return (
            <>
              <Profilecard id={current._id} fullname={current.fullname} email={current.email} bio={current.bio} linkedin={current.linkedin} github={current.github} portfolio={current.portfolio} picture={current.picture} course={current.course} date={current.date} updateProfileCard={updateProfileCard}></Profilecard>
            </>
    
    
          );
        });
      }

    
        return (
            <>
            <div className="welcome_participant">
                      <h1>Welcome , {props.user}!</h1>
            </div>
            <div className="participant-outer-container">
                <div className="participant-container">
                    <div className="participant-div">
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
                                <div className="participant-social-icons">
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


{/*         
      <main>
        <Container className="contentContainer">
          <Row className="headerRow">
            <h5 className="header-title">Participants Dashboard</h5>
            <h4>Logged in as {props.user}</h4>
          </Row>
    
      <div style={{ display: "flex", justifyContent: "right", alignItems: "right" }}>
      <Button  onClick={props.logout}>
          {" "}
          Logout{" "}
        </Button>
      </div>

        <br />
        <div class="row row-cols-1 row-cols-md-3 g-4">
          {buildcards()}
        </div>
      <Row className="bodyRow mx-auto text-center mt-2">
      <Col xs={6}>
      <Add
        client={props.client}
        refreshList={() => {
          refreshList();
          cCurrent(undefined);
        }}
        currentProfileCard={current}
        logout={props.logout}
      />
      </Col>
      </Row>
      </Container>
      </main> */}
            </>
        );
    
    }

export default ParticipantDashboard;