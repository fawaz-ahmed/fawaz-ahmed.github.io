import React, { Component } from 'react';
import pic from './Images/profile_pic.jpg';
import './App.less';
import TopBar from './TopBar';

import { Container, Row, Col } from 'reactstrap';


class App extends Component {
  render() {
    return (
      <div className="App">
        <TopBar />
        <Container>
          <Row>
            <Col sm="3" xs="12" className="top-padding">
              <img className="img-fluid" src={pic} alt="profile pic"/>
              <div className="short-summary">
                {'Fawaz Ahmed'}<br/>
                {'ReactJS developer @ Arpatech, Karachi'}<br/>
                {'Cell # +92-336-2010293'}<br/>
              </div>
            </Col>
            <Col sm="auto" xs="12" className="top-padding">
              Profile Summary
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
