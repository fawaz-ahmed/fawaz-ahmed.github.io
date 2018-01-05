import React, { Component } from 'react';
import experienceData from './experienceData';
import './index.less';

class Experience extends Component {

  renderExperience(exp) {
    return (
      <div className="experience-box">
        <div className="designation">{exp.designation}</div>
        <div className="company-name">{exp.companyName}</div>
        <div className="duration">{`${exp.startDate} - ${exp.endDate}`}</div>
        <div className="summary">{exp.summary}</div>
      </div>
    );
  }

  render() {
    return (
      <div className="work-experience">
        <div className="title">{'Work experience'}</div>
        {experienceData.map((exp, index) =>
          <div key={`experience-#-${index}`}>{this.renderExperience(exp)}</div>
        )}
      </div>
    );
  }
}

export default Experience;
