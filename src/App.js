import React, { Component } from 'react';
import './App.less';
import TopBar from './TopBar';
import ShortSummary from './ShortSummary';
import ProfileSummary from './ProfileSummary';

import { Container, Row, Col } from 'reactstrap';


class App extends Component {
  render() {
    return (
      <div className="App">
        <TopBar />
        <Container>
          <Row>
            <Col xs={12} sm={5} md={4} className="top-padding">
              <ShortSummary />
            </Col>
            <Col xs={12} sm={12-5} md={12-4} className="top-padding">
              <ProfileSummary />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
