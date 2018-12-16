import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../Home/Home';
import Projects from '../Projects/Projects';

class Container extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/projects" component={Projects} />
      </Switch>
    );
  }
}

export default Container;