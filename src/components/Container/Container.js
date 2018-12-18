import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../Home/Home';
import ProjectList from '../ProjectList/ProjectList';
import About from '../About/About';
import Admin from '../Admin/Admin';

class Container extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/projects" component={ProjectList} />
        <Route path="/about" component={About} />
        <Route path="/admin" component={Admin} />
      </Switch>
    );
  }
}

export default Container;