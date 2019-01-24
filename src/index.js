import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import rootReducer from './redux/reducers/index';

// Used to store the project tags (e.g. 'React', 'jQuery', 'Angular', 'Node.js')
// const tags = (state = [], action) => {
//     switch (action.type) {
//         case 'SET_TAGS':
//             return action.payload;
//         default:
//             return state;
//     }
// }

// Create one store that all components can use
const store = createStore(
    rootReducer,
    // Add sagaMiddleware to our store
    applyMiddleware(logger),
);

ReactDOM.render(<Provider store={store}><App /></Provider>,
    document.getElementById('root'));
registerServiceWorker();
