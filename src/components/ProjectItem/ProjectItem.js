import React, { Component } from 'react';
import Button from '../Button/Button';
import ImageDisplay from './ImageDisplay/ImageDisplay';
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
          <ImageDisplay thumbnail={project.thumbnail} />
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
        <div style={{textAlign: 'center'}}>
          <p className="tag">Built with: </p> {project.tags.map(tag => {
            return <p key={tag} style={tagStyles}>{tag}</p>
          })}
        </div>
      </div>
    );
  }
}

const tagStyles = {
  display: 'inline-block',
  margin: '5px',
  padding: '5px',
  background: 'rgba(44,186,219, 0.2)',
  borderRadius: '5px',
  color: '#2cbadb',
  fontSize: '.8rem'
}

export default ProjectItem;