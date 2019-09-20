import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProjectItem from '../ProjectItem/ProjectItem';
import Title from '../Title/Title';

class Project extends Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  }
  
  render() {
    let projects = this.props.projects;
    return (
      <div className="wrapper">
        <Title>PROJECTS</Title>
        {/* Loop over projects */}
        {projects.length > 0 && (
          projects.map(project => {
            return <ProjectItem
              key={project.id}
              projectData={project}
            />
          })
        )
        }
      </div>
    );
  }
}

const mapStateToProps = store => {
  return {
    projects: store.projects
  }
}

export default connect(mapStateToProps)(Project);