import React, { Component } from 'react';
import Button from '../Button/Button';
import './ProjectItem.css';

// Button styling
const btnProject = {
  marginBottom: '20px',
  margin: '10px',
  border: '2px solid #2cbadb',
  padding: '9px 14px',
  fontSize: '1rem'
}

class ProjectItem extends Component {

  render() {
    return (
      <div className="project-item">
        {/* Project title */}
        <h2 className="project-item__title">{this.props.name}</h2>
        <div className="project-item__display">
          {/* Project image */}
          <img className="project-item__img" alt="project" src={this.props.url} />
          <div className="project-item_button-display">
            {/* External project links */}
            <Button url={this.props.github} style={btnProject}>GitHub</Button>
            <Button url={this.props.website} style={btnProject}>Website</Button>
          </div>
        </div>
        {/* Project description */}
        <p className="project-item__description">{this.props.description}</p>
        <p className="tag">Built with {this.props.tag}</p>
      </div>
    );
  }
}

export default ProjectItem;