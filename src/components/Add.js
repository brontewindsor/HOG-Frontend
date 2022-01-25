import React, { useState } from "react";
import { FormLabel } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Upload from '../pages/Upload';
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import './Add.module.css';

const createError = require('http-errors');

function Add(props) {
  const [disabled, cDisabled] = useState(false);
  const[picture,cPicture]=useState('')


  const submitHandler = (e) => {
    e.preventDefault();
    cDisabled(true);
    let result;
    if (props.currentProfileCard) {
      result = props.client.updateProfileCard(
        props.currentProfileCard._id,

        e.target.firstName.value,
        e.target.lastName.value,
        e.target.email.value,
        e.target.bio.value,
        e.target.linkedin.value,
        e.target.github.value,
        e.target.portfolio.value,
        e.target.admincomments.value,
        picture,
        e.target.hired.checked,
        e.target.course.value,
        e.target.date.value
      ); 
    } else {
      result = props.client.addProfileCard(
        e.target.firstName.value,
        e.target.lastName.value,
        e.target.email.value,
        e.target.bio.value,
        e.target.linkedin.value,
        e.target.github.value,
        e.target.portfolio.value,
        e.target.admincomments.value,
        picture,
        e.target.hired.checked,
        e.target.course.value,
        e.target.date.value
        );
    }
    result
      .then(() => {
        cDisabled(false);
        document.getElementById("addForm").reset();
        /*document.getElementsByName("addForm").value = "";
        this.setState({ text: '' });*/
        props.refreshList();
      })
      .catch(() => {
        alert("an error occurred, please try again");
        cDisabled(false);
      });
  };

  return (
    <>
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }} >
    {props.currentProfileCard? "Update Profile" : "Add Profile"}
    </div>
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }} >
      <br />
      <Form onSubmit={(e) => submitHandler(e)} id="addForm">
        <Row className="g-2">
          <Col md>
        <Form.Group>
      <Form.Label >First Name:</Form.Label> <br />
        <Form.Control
          required
          type="text"
          defaultValue={props.currentProfileCard?.user || ""}
          name="firstName"
          disabled={disabled}
          placeholder="Your first name here"
        />
        </Form.Group>
        </Col>
        <Col md>
        <Form.Group>
      <Form.Label >Last Name:</Form.Label> <br />
        <Form.Control
          required
          type="text"
          defaultValue={props.currentProfileCard?.user || ""}
          name="lastName"
          disabled={disabled}
          placeholder="Your last name here"
        />
        </Form.Group>
        </Col>
        <Col md>
        <Form.Group>
        <Form.Label>Email </Form.Label><br />
        <Form.Control
          required
          type="text"
          defaultValue={props.currentProfileCard?.email || ""}
          name="email"
          disabled={disabled}
          placeholder="Type your email here">
        </Form.Control>
        </Form.Group>
        </Col>
        </Row>
        <Row>
        <Form.Group>
        <Form.Label>Bio</Form.Label>
        <Form.Control
          type="text"
          defaultValue={props.currentProfileCard?.bio || ""}
          name="bio"
          disabled={disabled}>
        </Form.Control>
        </Form.Group>
        </Row>
        <Row>
          <Col md>
        <Form.Group>
        <Form.Label>Linkedin</Form.Label>
        <Form.Control
          type="text"
          defaultValue={props.currentProfileCard?.linkedin || ""}
          name="linkedin"
          disabled={disabled}>
            </Form.Control>
          </Form.Group>
          </Col>
          <Col md>
        <Form.Group>
        <Form.Label>Github</Form.Label>
        <Form.Control
          type="text"
          defaultValue={props.currentProfileCard?.github || ""}
          name="github"
          disabled={disabled}>
        </Form.Control>
        </Form.Group>
        </Col>
        </Row>
        <Row>
        <Form.Group>
        <Form.Label> Portfolio</Form.Label>
        <Form.Control
          type="text"
          defaultValue={props.currentProfileCard?.portfolio || ""}
          name="portfolio"
          disabled={disabled}>
        </Form.Control>
        </Form.Group>
        </Row>
        <Form.Label>Picture</Form.Label>
        <Upload client={props.client} changePicture={cPicture}/>

        <br/>
        <Button size="sm"type="submit" disabled={disabled}>
          {" "}
          Submit{" "}
        </Button>
      </Form>
      </div>
    </>
  );
}

export default Add;
