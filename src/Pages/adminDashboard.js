import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
// import './App';
import Add from "../components/Add";
import Find from "../components/Find";
import Button from 'react-bootstrap/Button';
import Profilecard from './Profilecard';
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Container } from "react-bootstrap";


function AdminDashboard(props) {
    const [profileCards, cProfileCards] = useState([]);
    const [current, cCurrent] = useState(undefined);
    const [show,setShow]=useState(false)
    const [show2,setShow2]=useState(false)
    const [ashow2,asetShow2]=useState(false)
  
    const refreshList = () => {
      props.client.getProfileCards().then((response) => cProfileCards(response.data));
    };
    const removeProfileCard = (id) => {
      props.client.removeProfileCard(id).then(() => refreshList());
    };
    const updateProfileCard= (id) => {
      let e=profileCards.filter((profileCard)=>{return profileCard._id == id});
     if(e.length>0){
      cCurrent(e[0])
     }
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
            <Profilecard id={current._id} fullname={current.fullname} firstName={current.firstName} lastName={current.lastName} email={current.email} bio={current.bio} linkedin={current.linkedin} github={current.github} admincomments={current.admincomments} portfolio={current.portfolio} hired={current.hired?"true":"false"} picture={current.picture} course={current.course} date={current.date} removeProfileCard={removeProfileCard} updateProfileCard={updateProfileCard}></Profilecard>
          </>
  
  
        );
      });
    }
      return (
  
        <main>
          <Container className="contentContainer">
            <Row className="headerRow">
              <h5 className="header-title">Admin Dashboard</h5>
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
        { show?
        <>
        <Add
          client={props.client}
          refreshList={() => {
            refreshList();
            cCurrent(undefined);
          }}
          currentProfileCard={current}
          logout={props.logout}
        />
        <a class="see-less-btn" onClick={() => setShow(!show)}>See less</a>
        </>
        : <a class="buttonShowAdd2" onClick={() => setShow(!show)}>Add post</a> }
        </Col>
        <Col xs={6}>
          { show2? 
            <>
          <Find
              client={props.client}
              querySearch = {querySearch}
              currentProfileCard={current}
            />
            <a class="see-less-btn" onClick={() => setShow2(!show2)}>See less</a>
            <a class="see-less-btn" onClick={() => refreshList()}>Clear Filtered List</a>
            </>
          :<a class="buttonShowAdd2" onClick={() => setShow2(!show2)}>Find Participant</a> }
          </Col>
          </Row>
          </Container>
        </main>
  
    );
    
  }



export default AdminDashboard;