import React, { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Navbar from "react-bootstrap/Navbar";
import { BrowserRouter as Router, Routes, Route, Link, NavLink, Switch, Redirect } from "react-router-dom";
// import '../pages/Navbar.css';


function NavbarCode (props) {
    return (
       <div className='nav-buttons'>
      <Navbar>
        <Container>
          <Navbar.Brand>
            <Link className="socialcards" to="/SocialCard">Search Profiles</Link>
            <Button className="logout-btn" onClick={props.logout}>Logout</Button>
          </Navbar.Brand>
        </Container>
      </Navbar>

      </div>
    )
}

export default NavbarCode;