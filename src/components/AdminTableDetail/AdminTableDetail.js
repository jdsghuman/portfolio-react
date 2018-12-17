import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '../Button/Button';

class AdminTableDetail extends Component {

  deleteProject = (id) => {
    console.log('clicked delete ', id);
    this.props.dispatch({ type: 'DELETE_PROJECT', payload: id });
  }

  render() {
    return (
      <tr>
        <td>{this.props.name}</td>
        <td><button onClick={e => window.confirm('Are you sure you want to delete this project?') &&
          this.deleteProject(this.props.id)}>Delete</button></td>
      </tr>
    );
  }
}

export default connect()(AdminTableDetail);