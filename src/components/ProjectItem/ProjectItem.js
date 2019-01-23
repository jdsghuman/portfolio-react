import React, { Component } from 'react';
import Button from '../Button/Button';
import './ProjectItem.css';

class ProjectItem extends Component {

  render() {
    let project = this.props.projectData;
    return (
      <div className="project-item">
        {/* Project title */}
        <h2 className="project-item__title">{project.name}</h2>
        <div className="project-item__display">
          {/* Project image */}
          <img className="project-item__img" alt="project" src={project.thumbnail} />
          <div className="project-item_button-display">
            {/* External conditional rendering for external project links */}
            {project.github &&
              <Button url={project.github} classes="btn btn__project">GitHub</Button>
            }
            {project.website &&
              <Button url={project.website} classes="btn btn__project">Website</Button>
            }
          </div>
        </div>
        {/* Project description */}
        <p className="project-item__description">{project.description}</p>
        <p className="tag">Built with {project.tag}</p>
      </div>
    );
  }
}

export default ProjectItem;