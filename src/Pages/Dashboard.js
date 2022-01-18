import React, { useState, useEffect } from "react";
import Add from '../components/Add';
import Find from "../components/Find";
import './Dashboard.module.css';
import classes from './Dashboard.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Navbar from "react-bootstrap/Navbar";


// if userType = employer >>>> redirected to employer dashboard
// if userType = admin >>>> redirected to admin dashboard
/** 
 * title / gender
- first and last name,
- e-mail address (to be able to contact reviewers and sending them bulk e-mails.)
- the country. 
*/




function Dashboard(props) {
  const [ads, cAds] = useState([]);
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

  return (
    <>
      <Navbar>
        <Container>
          <Navbar.Brand><Button onClick={props.logout}>Logout</Button></Navbar.Brand>
        </Container>
      </Navbar>

      <main>
        <Container className="mx-auto text-center mt-2 contentContainer" className={classes.contentContainer}>
          <Row className={classes.headerRow}>
            <h1 className={classes.header_title}>Welcome , {props.user}!</h1>
            <h5 className={classes.header_body}></h5>
            <h5 className={classes.header_body}></h5>
          </Row>
          <br />
          <Row className={classes.bodyRow}>
            <Col xs={6}>
              {show ?
                <>
                  <Add
                    client={props.client}
                    refreshList={() => {
                      refreshList();
                      cCurrent(undefined);
                    }}
                    currentAd={current}
                  />
                  <a className={classes.see_less_btn} onClick={() => setShow(!show)}>See less</a>
                </>
                : <a className={classes.buttonShowAdd} onClick={() => setShow(!show)}>Add user information</a>}
            </Col>
            <Col xs={6}>
              {show2 ?
                <>
                  <Find
                    client={props.client}
                    querySearch={querySearch}
                    currentAd={current}
                  />
                  <a className={classes.see_less_btn} onClick={() => setShow2(!show2)}>See less</a>
                  <a className={classes.see_less_btn} onClick={() => refreshList()}>Clear Filtered List</a>
                </>
                : <a className={classes.buttonShowAdd} onClick={() => setShow2(!show2)}>Search participants</a>}
            </Col>
          </Row>
          <Row className={classes.tableRow}>
            <table>
              <thead>
                <tr >
                  <th>Name bio</th>
                  <th>Link to LinkedIn</th>
                  <th>CV</th>
                  <th>Portfolio website</th>
                  <th>Picture</th>
                  <th>Modify</th>
                </tr>
              </thead>
              <tbody>{buildRows()}</tbody>
            </table>
          </Row>
          <br />
          <br />
          <Row className={classes.formRow}>
          </Row>
        </Container>
      </main>
    </>
  );
}

export default Dashboard;
