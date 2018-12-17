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
    return (
      <div className="wrapper">
        <Title>PROJECTS</Title>
        {/* Loop over projects */}
        {this.props.project.map(p => {
          return <ProjectItem 
                    key={p.id} 
                    name={p.name} 
                    description={p.description} 
                    github={p.github} 
                    website={p.website} 
                    url={p.thumbnail} 
                    tag={p.tag} />
        })}
      </div>
    );
  }
}

const mapStateToProps = reduxStore => {
  return {
    project: reduxStore.projects
  }
}

export default connect(mapStateToProps)(Project);