import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import ProjectItem from '../ProjectItem/ProjectItem';
import Title from '../Title/Title';

const Project = ({ myProjects }) => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="wrapper">
      <Title>PROJECTS</Title>
      {myProjects.map(project => {
          return <ProjectItem
            key={project.id}
            project={project}
          />
        })
      }
    </div>
  );
}

const mapStateToProps = state => {
  return {
    myProjects: state.projects 
  }
}

export default connect(mapStateToProps)(Project);
