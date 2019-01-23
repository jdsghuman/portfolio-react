import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProjectItem from '../ProjectItem/ProjectItem';
import Title from '../Title/Title';

class Project extends Component {

  componentDidMount() { 
    this.getProjects();
  }

  getProjects = () => {
    // Get projects from DB
    this.props.dispatch({type: 'FETCH_PROJECTS'});
  }

  render() {
    let projects = this.props.projects;
    return (
      <div className="wrapper">
        <Title>PROJECTS</Title>
        {/* Loop over projects */}
        {projects.length > 0 ? (
          projects.map(project => {
          return <ProjectItem 
                    key={project.id} 
                    projectData={project}
                    />
        })
        ) : (
          <p>No projects available</p>
        )
      }
      </div>
    );
  }
}

const mapStateToProps = reduxStore => {
  return {
    projects: reduxStore.projects
  }
}

export default connect(mapStateToProps)(Project);