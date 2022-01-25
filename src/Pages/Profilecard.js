import React, { useState } from "react";
import  Card  from "react-bootstrap/Card";
import 'bootstrap/dist/css/bootstrap.min.css';
// import './App'
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPortrait ,faEnvelope} from '@fortawesome/free-solid-svg-icons';
import { faGithub ,faLinkedin } from '@fortawesome/free-brands-svg-icons';
// import Moment from "react-moment";



function Profilecard(props){
    const [show,setShow]=useState(false)
console.log(Profilecard)

    return (
        <>
            <Card id="main"className="Card "  style={{ width: '14rem'}} >
                <Card.Body >
                <Card.Img  className="mh-10 mw-10 cardImg hover-shadow"  src={props.picture} alt="" />
                    <Card.Text><h3> {props.firstName} {props.lastName}</h3></Card.Text>
                    <Card.Link href={"mailto:"+props.email}> <FontAwesomeIcon icon = {faEnvelope}></FontAwesomeIcon></Card.Link>
                    <Card.Link target="_blank" href={props.github}><FontAwesomeIcon icon = {faGithub}></FontAwesomeIcon></Card.Link>
                    <Card.Link target="_blank" href={props.linkedin}><FontAwesomeIcon icon = {faLinkedin}></FontAwesomeIcon></Card.Link>
                    <Card.Link target="_blank" href= {props.portfolio}><FontAwesomeIcon icon = {faPortrait}></FontAwesomeIcon></Card.Link>
                    <br/>
                    { show?
                    <>
                    <Card.Text>{props.user}</Card.Text>
                    <Card.Text> Account Type: {props.userType}</Card.Text>
                    <Card.Text>Bio: {props.bio} </Card.Text>
                    <Card.Text>{props.email} </Card.Text>
                    <Card.Text>{props.location} </Card.Text>


                    <Button class="see-less-btn" size="sm" onClick={() => setShow(!show)}>See less</Button>
                    <br />
                    <br/>
                    <Button variant="success" size="sm" onClick={() => props.updateProfileCard(props.id)}> Edit Profile</Button>
                    <Button variant="danger" size="sm" onClick={() => props.removeProfileCard(props.id)}> remove</Button>
                    </> 
                    :<a class="see-more-btn" onClick={() => setShow(!show)}>See more</a>
                    }
                    <br />
                </Card.Body>
            </Card>
        </>
    )
}

export default Profilecard;