import React, { Component } from 'react';
import { connect } from 'react-redux';

class Project extends Component {

  componentDidMount() { 
    this.getProjects();
  }

  getProjects = () => {
    this.props.dispatch({type: 'FETCH_PROJECTS'});
  }

  render() {
    return (
      <div>
        <h2>Projects</h2>
        {JSON.stringify(this.props.project)}
      </div>
    );
  }
}

const mapStateToProps = reduxStore => {
  return {
    project: reduxStore.projects.data
  }
}

export default connect(mapStateToProps)(Project);