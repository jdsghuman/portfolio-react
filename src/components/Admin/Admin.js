import React, { Component } from 'react';
import Title from '../Title/Title';
import Button from '../Button/Button';
import { connect } from 'react-redux';
import AdminItem from '../AdminItem/AdminItem';

const btnForm = {
  marginBottom: '100px',
  backgroundColor: '#2cbadb',
  color: '#ffffff',
  padding: '9px 14px',
  fontSize: '1rem',
}

const titleStyle = {
  fontWeight: 400
}

class Admin extends Component {
  state = {
    newProject: {
      name: '',
      description: '',
      github: '',
      thumbnail: '',
      website: '',
      date_completed: '',
      tag_id: ''
    }
  }

  componentDidMount() {
    this.getProjects();
  }

  getProjects = () => {
    this.props.dispatch({ type: 'FETCH_PROJECTS' });
  }

  handleChange = event => {
    this.setState({
      newProject: {
        ...this.state.newProject,
        [event.target.name]: event.target.value
      }
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.dispatch({ type: 'ADD_PROJECT', payload: this.state.newProject });
    this.setState({
      newProject: {
        name: '',
        description: '',
        github: '',
        thumbnail: '',
        website: '',
        date_completed: '',
        tag_id: ''
      }
    })
  }

  render() {
    let projectDetail = this.props.projects.map(project => {
      // return <AdminItem key={project.id} id={project.id} name={project.name} />
      return <AdminItem key={project.id} adminData={project} />
    })
    return (
      <div className="wrapper">
        <Title>Admin</Title>
        <h2 style={titleStyle}>Add New Project</h2>
        <form onSubmit={this.handleSubmit}>
          <input value={this.state.newProject.name} onChange={this.handleChange} name="name" type="text" placeholder="Name of project" />
          <input value={this.state.newProject.date_completed} onChange={this.handleChange} name="date_completed" type="date" />
          <select value={this.state.newProject.tag_id} onChange={this.handleChange} name="tag_id">
            <option value="">Select a value</option>
            <option value="1">React</option>
            <option value="2">jQuery</option>
            <option value="3">Node</option>
            <option value="4">SQL</option>
            <option value="5">Redux</option>
            <option value="6">HTML</option>
          </select>
          <input value={this.state.newProject.github} onChange={this.handleChange} name="github" type="text" placeholder="GitHub URL" />
          <input value={this.state.newProject.thumbnail} onChange={this.handleChange} name="thumbnail" type="text" placeholder="Thumbnail" />
          <input value={this.state.newProject.website} onChange={this.handleChange} name="website" type="text" placeholder="Website URL (Optional)" />
          <textarea value={this.state.newProject.description} onChange={this.handleChange} name="description"></textarea>
          <Button style={btnForm}>Submit</Button>
        </form>

        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {projectDetail}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = reduxStore => {
  return {
    projects: reduxStore.projects
  }
}

export default connect(mapStateToProps)(Admin);