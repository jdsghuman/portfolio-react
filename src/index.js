import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import rootReducer from './redux/reducers/index';

const store = createStore(
    rootReducer,
    applyMiddleware(logger),
);

ReactDOM.render(<Provider store={store}><App /></Provider>,
    document.getElementById('root'));
registerServiceWorker();
