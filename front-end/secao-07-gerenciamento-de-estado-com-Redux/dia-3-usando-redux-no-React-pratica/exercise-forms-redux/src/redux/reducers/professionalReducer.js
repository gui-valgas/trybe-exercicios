import { PROFISSIONAL_INFO } from '../actions';

const INITIAL_STATE = {
  curriculum: '',
  job: '',
  description: '',
};

const profissionalReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case PROFISSIONAL_INFO: {
    return {
      ...state,
      ...action.payload,
    };
  }
  default:
    return state;
  }
};

export default profissionalReducer;
