import React, { useEffect, useState } from 'react';
import ReactGA from 'react-ga';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history'
import Navbar from '../Navbar/Navbar';
import SideDrawer from '../SideDrawer/SideDrawer';
import Backdrop from '../Backdrop/Backdrop';
import Footer from '../Footer/Footer';
import Home from '../Home/Home';
import ProjectList from '../ProjectList/ProjectList';
import About from '../About/About';
import Title from '../Title/Title';
import './App.css';

ReactGA.initialize('UA-78377127-1')
const history = createBrowserHistory();
history.listen((location, action) => {
  ReactGA.pageview(location.pathname + location.search)
})

const App = () => {
  const [sidedrawerOpen, setSidedrawerOpen] = useState(false);

  const closeBackdrop = () => {
    setSidedrawerOpen(false)
  }

  const toggleSideDrawer = () => {
    setSidedrawerOpen(!sidedrawerOpen)
  };

  let backdrop;

  if (sidedrawerOpen) {
    backdrop = <Backdrop click={closeBackdrop} />;
  }

  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, [])

  return (
    <div className="App">
      <Router>
        <>
          <Navbar toggleSideDrawer={toggleSideDrawer} />
          <SideDrawer show={sidedrawerOpen} click={closeBackdrop} />
          {backdrop}
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/projects" component={ProjectList} />
            <Route path="/about" component={About} />
            <Route render={() => <Title>404</Title>} />
          </Switch>
          <Footer />
        </>
      </Router>
    </div>
  );
}

export default App;
