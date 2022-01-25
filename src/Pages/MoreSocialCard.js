import React from "react";
import Location from './Location';
import Email from './Email';
import './SocialCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPortrait ,faEnvelope} from '@fortawesome/free-solid-svg-icons';
import { faGithub ,faLinkedin } from '@fortawesome/free-brands-svg-icons';

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
            <div className="socialcard-social-icons">
                                <a href={"mailto:"+userData.email}> <FontAwesomeIcon icon = {faEnvelope}></FontAwesomeIcon></a>
                                <a href target="_blank" href={"/"}><FontAwesomeIcon icon = {faGithub}></FontAwesomeIcon></a>
                                <a href target="_blank" href={"/"}><FontAwesomeIcon icon = {faLinkedin}></FontAwesomeIcon></a>
                                <a href target="_blank" href= {"/"}><FontAwesomeIcon icon = {faPortrait}></FontAwesomeIcon></a>
                                </div>

            </div>

        </div>
    )

};

export default MoreSocialCard;