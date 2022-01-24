import React from "react";
import Location from './Location';
import Email from './Email';
import './SocialCard.css';

// function MoreSocialCard(props) {
//     return (
//     <div className="participants-header"> PARTICIPANTS
//         <br />
//         <input className="search-box" placeholder="Search..."/>
//     </div>

    
//     )
// };

const MoreSocialCard = ({ userData }) => {
    return (
        
        <div className="card">
                <div className="card__image"><img src={userData.picture.medium}/></div>
            <div className="card__title">{userData.name.title} {userData.name.first} {userData.name.last} </div>
            <div className="card__body">
            <p> username </p>
            <Email email={userData.email} type="Email"/> 
            <p> bio </p>
                <Location location={userData.location}/>
                <p> website url, github, etc </p>

            </div>

        </div>
    )

};

export default MoreSocialCard;