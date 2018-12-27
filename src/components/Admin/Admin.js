import React, { Component } from 'react';
import Title from '../Title/Title';
import Button from '../Button/Button';
import { connect } from 'react-redux';
import AdminItem from '../AdminItem/AdminItem';
import TextField from '@material-ui/core/TextField';

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
      tag_id: '1'
    }
  }

  componentDidMount() {
    this.getProjects();
  }

  getProjects = () => {
    this.props.dispatch({ type: 'FETCH_PROJECTS' });
    this.props.dispatch({ type: 'FETCH_TAGS' });
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
        <form onSubmit={this.handleSubmit} autoComplete="off">
          <TextField
            id="outlined-name"
            label="Name of project"
            name="name"
            value={this.state.newProject.name}
            onChange={this.handleChange}
            margin="normal"
            variant="outlined"
          />

          <TextField
            id="date"
            label="Date Completed"
            type="date"
            InputLabelProps={{
              shrink: true,
            }}
            value={this.state.newProject.date_completed}
            onChange={this.handleChange}
            name="date_completed"
          />
          <select value={this.state.newProject.tag_id} onChange={this.handleChange} name="tag_id">
            {this.props.tags.map(tag => {
              return <option key={tag.id} value={tag.id}>{tag.name}</option>
            })}
          </select>
          <input value={this.state.newProject.github} onChange={this.handleChange} name="github" type="text" placeholder="GitHub URL" />
          <input value={this.state.newProject.thumbnail} onChange={this.handleChange} name="thumbnail" type="text" placeholder="Thumbnail" />
          <input value={this.state.newProject.website} onChange={this.handleChange} name="website" type="text" placeholder="Website URL (Optional)" />
          <textarea value={this.state.newProject.description} onChange={this.handleChange} name="description"></textarea>
          <Button style={btnForm}>Add Project</Button>
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
        {JSON.stringify(this.state)}
      </div>
    );
  }
}

const mapStateToProps = reduxStore => {
  return {
    projects: reduxStore.projects,
    tags: reduxStore.tags
  }
}

export default connect(mapStateToProps)(Admin);