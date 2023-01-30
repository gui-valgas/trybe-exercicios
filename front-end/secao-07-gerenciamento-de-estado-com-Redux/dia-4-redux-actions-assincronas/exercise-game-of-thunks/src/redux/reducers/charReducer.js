import { SEARCHING, FOUND, SEARCH_ERROR } from "../actions"

const INITIAL_STATE = {
  isLoading: false,
  character: '',
}

const charReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SEARCHING:
      return {
        ...state,
        isLoading: true,
      }
    case FOUND:
      return {
        ...state,
        isLoading: false,
        character: action.character[0],
      }
    case SEARCH_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      }
    default:
      return state
  }
}

export default charReducer;