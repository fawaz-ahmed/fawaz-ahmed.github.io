import React, { Component } from 'react';
import pic from '../Images/profile_pic.jpg';
import Email from 'react-icons/lib/md/email';
import Call from 'react-icons/lib/md/local-phone';
import Location from 'react-icons/lib/md/location-on';
import In from 'react-icons/lib/fa/linkedin';
import Github from 'react-icons/lib/go/mark-github';
import StackOverflow from 'react-icons/lib/fa/stack-overflow';
import './index.less';

class ShortSummary extends Component {
  render() {
    return (
      <div className="short-summary">
        <img className="img-fluid" src={pic} alt="profile pic"/>
        <div className="short-info">
          <div className="email-info">
            <Email size={20} />
            <a href="mailto:fawaz_ahmed@live.com?Subject=Hi%20there">
              fawaz_ahmed@live.com
            </a>
          </div>
          <div className="calling-info">
            <Call size={20} />
            <a rel="noopener noreferrer" href="tel:+92-336-2010293">+92-336-2010293</a>
          </div>
          <div className="location-info">
            <Location size={20} />
            <label>{'Karachi, Pakistan'}</label>
          </div>
          <div className="in-info">
            <In size={20} />
            <a
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/linkedinfawazahmed/"
              target="_blank"
            >
              linkedinfawazahmed
            </a>
          </div>
          <div className="github-info">
            <Github size={18} />
            <a
              rel="noopener noreferrer"
              href="https://github.com/fawaz-ahmed"
              target="_blank"
            >
              fawaz-ahmed
            </a>
          </div>
          <div className="stackoverflow-info">
            <StackOverflow size={18} />
            <a
              rel="noopener noreferrer"
              href="https://stackoverflow.com/users/4998659/fawaz?tab=profile"
              target="_blank"
            >
              fawaz?tab=profile
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default ShortSummary;
