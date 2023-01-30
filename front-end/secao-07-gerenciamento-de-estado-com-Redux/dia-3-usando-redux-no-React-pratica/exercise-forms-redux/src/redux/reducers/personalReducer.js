import { PERSONAL_INFO } from '../actions';

const INITIAL_STATE = {
  name: '',
  email: '',
  cpf: '',
  address: '',
  city: '',
  uf: '',
};

const personalReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case PERSONAL_INFO: {
    return {
      ...state,
      ...action.payload,
    };
  }
  default:
    return state;
  }
};

export default personalReducer;
