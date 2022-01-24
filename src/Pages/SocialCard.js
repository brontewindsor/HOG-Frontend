import React, { useState, useEffect } from "react";
import './SocialCard.css';
import MoreSocialCard from "./MoreSocialCard";

// function SocialCard() {
//     return (
//     <div className="participants-header"> PARTICIPANTS
//         <br />
//         <input className="search-box" placeholder="Search..."/>
//     </div>

    
//     )
// };

function SocialCard() {
    const [allUsers, setAllUsers] = useState([]);
    const [users, setUsers] = useState([]);
  
    useEffect(() => {
      (async () => {
        let userData;
        try {
          const response = await fetch("https://randomuser.me/api/?results=50");
          userData = await response.json();
        } catch (error) {
          console.log(error);
          userData = [];
        }
        setAllUsers(userData.results);
        setUsers(userData.results);
      })();
    }, []);
  
    const filterCards = event => {
      const value = event.target.value.toLowerCase();
      const filteredUsers = allUsers.filter(user => (`${user.name.first} ${user.name.last} ${user.email}`.toLowerCase().includes(value)));
      setUsers(filteredUsers);
    }
  
  
  
    return (


      <div className="App">
      <h1>Search Profiles</h1>
      <input className="search-box" onInput={filterCards} placeholder="Search..."/>
      <div className="cards-container">
  
      {users.map((user, index) => (
        <MoreSocialCard key={index} userData={user} />
        ))}
      </div>
    </div>

      
    );
  }

// const SocialCard = ({ userData }) => {
//     return (
        
//         <div className="card">
//                 <div className="card__image"><img src={userData.picture.medium}/></div>
//             <div className="card__title">{userData.name.title} {userData.name.first} {userData.name.last} </div>
//             <div className="card__body">
//                 <Email email={userData.email} type="Email"/>
//                 <Location location={userData.location}/>
//                 <Phone number={userData.cell} type="Mobile Number"/>
//             </div>

//         </div>
//     )

// };

export default SocialCard;