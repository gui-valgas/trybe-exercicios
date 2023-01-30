import { combineReducers } from 'redux';
import profissionalReducer from './professionalReducer';
import personalReducer from './personalReducer';

const rootReducer = combineReducers({
  profissional: profissionalReducer,
  personal: personalReducer,
});

export default rootReducer;
