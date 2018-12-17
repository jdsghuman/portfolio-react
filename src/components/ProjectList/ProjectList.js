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
        {/* Loop over projects returned from DB */}
        {projects.length > 0 ? (
          projects.map(p => {
          return <ProjectItem 
                    key={p.id} 
                    name={p.name} 
                    description={p.description} 
                    github={p.github} 
                    website={p.website} 
                    url={p.thumbnail} 
                    tag={p.tag} 
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