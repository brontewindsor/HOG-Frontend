import { useRef } from 'react';
import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Navbar from "react-bootstrap/Navbar";
import Card from '../components/Card';
import ParticipantDashboard from '../pages/ParticipantDashboard';
import EmployerDashboard from '../pages/EmployerDashboard';
import AdminDashboard from '../pages/AdminDashboard';
import classes from './Dashboard.module.css';


// if userType = employer >>>> redirected to employer dashboard
// if userType = admin >>>> redirected to admin dashboard
/** 
 * title / gender
- first and last name,
- e-mail address (to be able to contact reviewers and sending them bulk e-mails.)
- the country. 
*/




function Dashboard(props) {
  const titleInputRef = useRef();
  const firstNameInputRef = useRef();
  const lastNameInputRef = useRef();
  const addressInputRef = useRef();


  function submitHandler(event) {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredFirstName = firstNameInputRef.current.value;
    const enteredLastName = lastNameInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;

    const userData = {
      title: enteredTitle,
      firstName: enteredFirstName,
      lastName: enteredLastName,
      address: enteredAddress,
    };

    props.onAddUser(userData);

    if (this.props.client.userType === 'participant') {
      return <ParticipantDashboard />
    }
    if (this.props.client.userType === 'employer') {
      return <EmployerDashboard />
    } else {
      return <AdminDashboard />
    }
  }

  /**const [ads, cAds] = useState([]);
  const [current, cCurrent] = useState(undefined);
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);

  const refreshList = () => {
    props.client.getAds().then((response) => cAds(response.data));
  };

  const removeAdvert = (id) => {
    props.client.removeAd(id).then(() => refreshList());
  };

  const updateAdvert = (ad) => {
    cCurrent(ad);
    setShow(!show);
  };
  const querySearch = (searchParams) => {
    props.client.queryResult(searchParams).then((response) => cAds(response.data))
  }

  useEffect(() => {
    refreshList();
  }, []);

  const buildRows = () => {
    return ads.map((current) => {
      return (
        <tr key={current._id}>
          <td><div className={classes.event}>{current.event}</div></td>
          <td><div className={classes.location}>{current.location}</div></td>
          <td><div className={classes.summary}>{current.summary}</div></td>
          <td><div className={classes.date}>{current.date}</div></td>
          <td><div className={classes.time}>{current.time}</div></td>
          <td>
            <Button className={classes.buttonRemove} onClick={() => removeAdvert(current._id)}> remove</Button>
            <Button className={classes.buttonUpdate} onClick={() => updateAdvert(current)}> update</Button>
          </td>
        </tr>
      );
    });
  };
  **/


  return (
    <div>
      <Navbar>
        <Container>
          <Navbar.Brand>
            <h1 className={classes.header_title}>Welcome , {props.user}!</h1>
            <Button onClick={props.logout}>Logout</Button>
          </Navbar.Brand>
        </Container>
      </Navbar>

      <Card>
        <form className={classes.form} onSubmit={submitHandler}>
          <div className={classes.control}>
            <label htmlFor='title'>Title</label>
            <input type='text' required id='title' ref={titleInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor='firstName'>First Name</label>
            <input type='text' required id='firstName' ref={firstNameInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor='lastName'>Last Name</label>
            <input type='text' required id='lastName' ref={lastNameInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor='address'>Address</label>
            <input type='text' required id='address' ref={addressInputRef} />
          </div>

          <div className={classes.actions}>
            <button>Add User Details</button>
          </div>
        </form>
      </Card>
    </div>
  );
}

export default Dashboard;
