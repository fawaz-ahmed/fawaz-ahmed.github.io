import React, { Component } from 'react';
import { Container } from 'reactstrap';
import './index.less';

class TopBar extends Component {
  render() {
    return (
      <div className="top-bar">
        <Container>
          <div className="title">
            Fawaz Ahmed - Software engineer
          </div>
        </Container>
      </div>
    );
  }
}

export default TopBar;
