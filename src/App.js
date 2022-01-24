import React, { useState, useEffect } from "react";
import { Route, Routes, Link, BrowserRouter as Router } from 'react-router-dom';
import AdminDashboard from './pages/AdminDashboard';
import Dashboard from './pages/Dashboard';
import EmployerDashboard from './pages/EmployerDashboard';
import ParticipantDashboard from './pages/ParticipantDashboard';
import SocialCard from "./pages/SocialCard";
import "./App.css";
import EditProfile from "./pages/EditProfile";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Navbar from "react-bootstrap/Navbar";
import './pages/Navbar.css';
import NavbarCode from "./pages/NavbarCode";

// import ViewParticipants from "./pages/ViewParticipants";


function App(props) {
  // const [allUsers, setAllUsers] = useState([]);
  // const [users, setUsers] = useState([]);

  // useEffect(() => {
  //   (async () => {
  //     let userData;
  //     try {
  //       const response = await fetch("https://randomuser.me/api/?results=50");
  //       userData = await response.json();
  //     } catch (error) {
  //       console.log(error);
  //       userData = [];
  //     }
  //     setAllUsers(userData.results);
  //     setUsers(userData.results);
  //   })();
  // }, []);

  // const filterCards = event => {
  //   const value = event.target.value.toLowerCase();
  //   const filteredUsers = allUsers.filter(user => (`${user.name.first} ${user.name.last} ${user.email}`.toLowerCase().includes(value)));
  //   setUsers(filteredUsers);
  // }



  return (
    
    
      
    <div><Router >
      <NavbarCode logout={props.logout}/>
      <Routes>
        <Route exact path='/' element={<Dashboard
          client={props.client}
          user={props.user} 
          logout={props.logout}
          userType={props.userType}/>} />

        <Route path='/employer' element={<EmployerDashboard  user={props.user} userType={props.userType}/>} />
        <Route path='/participant' element={<ParticipantDashboard user={props.user} userType={props.userType}/>} />


        <Route path='/admin' element={<AdminDashboard />} />

        
        <Route path="/SocialCard" element={<SocialCard />} />
        <Route path="/EditProfile" element={<EditProfile user={props.user} userType={props.userType} email={props.email}/>} />





      </Routes>
    </Router>
    </div>
    
  //   <div className="App">
  //   <h1>Users</h1>
  //   <input className="search-box" onInput={filterCards} placeholder="Search..."/>
  //   <div className="cards-container">

  //   {users.map((user, index) => (
  //     <SocialCard key={index} userData={user} />
  //     ))}
  //   </div>
  // </div>
    
    
  );
}

export default App;
