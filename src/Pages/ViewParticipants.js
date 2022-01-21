// import React, { useState, useEffect } from "react";
// import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
// import AdminDashboard from './pages/AdminDashboard';
// import Dashboard from './pages/Dashboard';
// import EmployerDashboard from './pages/EmployerDashboard';
// import ParticipantDashboard from './pages/ParticipantDashboard';
// import SocialCard from "./pages/SocialCard";
// import "./App.css";

// function ViewParticipants(props) {
//     const [allUsers, setAllUsers] = useState([]);
//     const [users, setUsers] = useState([]);
  
//     useEffect(() => {
//       (async () => {
//         let userData;
//         try {
//           const response = await fetch("https://randomuser.me/api/?results=50");
//           userData = await response.json();
//         } catch (error) {
//           console.log(error);
//           userData = [];
//         }
//         setAllUsers(userData.results);
//         setUsers(userData.results);
//       })();
//     }, []);
  
//     const filterCards = event => {
//       const value = event.target.value.toLowerCase();
//       const filteredUsers = allUsers.filter(user => (`${user.name.first} ${user.name.last} ${user.email}`.toLowerCase().includes(value)));
//       setUsers(filteredUsers);
//     }

//     return (
//         <>
//         <div className="App">
//         <h1>Users</h1>
//         <input className="search-box" onInput={filterCards} placeholder="Search..."/>
//         <div className="cards-container">
    
//         {users.map((user, index) => (
//           <SocialCard key={index} userData={user} />
//           ))}
//         </div>
//       </div>
        
//         </>
        
//       );
//     }
    
//     export default ViewParticipants;