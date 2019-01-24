import React from 'react';
import styled from "styled-components";
import { Switch, Route, withRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import Home from '../Home/Home';
import ProjectList from '../ProjectList/ProjectList';
import About from '../About/About';
import Resume from '../Resume/Resume';

const Container = ({ location }) => {
  return (
    <Wrapper>
      <TransitionGroup className="transition-group">
        <CSSTransition
          key={location.key}
          timeout={{ enter: 300, exit: 300 }}
          classNames={'fade'}
        >
        <section className="route-section">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/projects" component={ProjectList} />
            <Route path="/about" component={About} />
            <Route path="/resume" component={Resume} />
          </Switch>
        </section>
        </CSSTransition>
      </TransitionGroup>
    </Wrapper>
  );
}

const Wrapper = styled.div`
    .fade-enter {
      opacity: 0;
    }

    .fade-enter.fade-enter-active {
      opacity: 1;
      transition: opacity 300ms ease-in;
    }

    .fade-exit {
      opacity: 1;
    }

    .fade-exit.fade-exit-active {
      opacity: 0;
      transition: opacity 300ms ease-in;
    }

    div.transition-group {
      position: relative;
    }
    section.route-section {
      position: absolute;
      width: 100%;
      top: 0;
      left: 0;
    }   
`;

export default withRouter(Container);