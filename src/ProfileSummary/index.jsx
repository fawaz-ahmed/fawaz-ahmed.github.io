import React, { Component } from 'react';
// import { Container } from 'reactstrap';
import './index.less';
import Experience from './experience';

class ProfileSummary extends Component {
  render() {
    return (
      <div className="profile-summary">
        <Experience />
      </div>
    );
  }
}

export default ProfileSummary;
