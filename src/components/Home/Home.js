import React, { useState } from 'react';
import InteractiveButtons from '../InteractiveButtons/InteractiveButtons';
import Terminal from '../Terminal/Terminal';
import HomeDetail from '../HomeDetail/HomeDetail';

import './Home.css';

const Home = ({ history }) => {
  const [maximize, setMaximize] = useState(false);
  const [minimize, setMinimize] = useState(false);
  const [open, setOpen] = useState(true);
  const [page] = useState('home');

  const maximizeTerminal = () => setMaximize(true);

  const minimizeTerminal = () => {
    maximize ? setMaximize(false) : setMinimize(true);
  };

  const closeTerminal = () => {
    setOpen(false);
    setMaximize(false);
    if (open && minimize) {
      history.push('/');
    }
  };

  return (
    <div className={maximize === false ? 'wrapper' : 'wrapper__maximize'}>
      <div className="large-hero">
        <div className={open === true ? 'large-hero__text-content' : 'large-hero__text-content--closed'}>
          <InteractiveButtons
            maximizeTerminal={maximizeTerminal}
            minimizeTerminal={minimizeTerminal}
            closeTerminal={closeTerminal}
            open={open}
            page="home" />
          <HomeDetail minimize={minimize} open={open} />
          <Terminal clear={minimizeTerminal} page={page} openTerminal={open} />
        </div>
      </div>
    </div>
  );
}



export default Home;