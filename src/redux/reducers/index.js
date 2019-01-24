import { combineReducers } from 'redux';
import projects from './projectsReducer';

const rootReducer = combineReducers({
  projects // contains state for projects
});

export default rootReducer;