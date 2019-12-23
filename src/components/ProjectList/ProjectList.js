import React, { useState, useEffect } from 'react';
import ProjectItem from '../ProjectItem/ProjectItem';
import Title from '../Title/Title';
import { useSelector, useDispatch } from 'react-redux';

const Project = ({ projects }) => {
  const myProjects = useSelector(state => state.projects);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="wrapper">
      <Title>PROJECTS</Title>
      {myProjects.length > 0 && (
        myProjects.map(project => {
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

export default Project;