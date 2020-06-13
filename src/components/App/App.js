import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import Container from '../Container/Container';
import { BrowserRouter as Router } from 'react-router-dom';
import SideDrawer from '../SideDrawer/SideDrawer';
import Backdrop from '../Backdrop/Backdrop';
import { createBrowserHistory } from 'history'
import ReactGA from 'react-ga';

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
          <Container />
        </>
      </Router>
    </div>
  );
}

export default App;
