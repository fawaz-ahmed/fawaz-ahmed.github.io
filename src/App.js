import React, { Component } from 'react';
import './App.less';
import TopBar from './TopBar';
import ShortSummary from './ShortSummary';

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
            <Col xs={12} sm={'auto'} md={'auto'} className="top-padding">
              Profile Summary
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
