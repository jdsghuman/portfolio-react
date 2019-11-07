import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import rootReducer from './redux/reducers/index';
import ReactGA from 'react-ga';

// Create one store that all components can use
const store = createStore(
    rootReducer,
    // Add sagaMiddleware to our store
    applyMiddleware(logger),
);

ReactGA.initialize('UA-78377127-1')

ReactDOM.render(<Provider store={store}><App /></Provider>,
    document.getElementById('root'));
registerServiceWorker();
