export  const SEARCHING = 'SEARCHING';
export  const FOUND = 'FOUND';
export  const SEARCH_ERROR = 'SEARCH_ERROR';

export const searching = () => (
  { 
    type: SEARCHING,
  }
);

export const found = (character) => (  
  {
     type: FOUND,
     character, 
  }
);

export const searchError = (error) => (
  {
    type: SEARCH_ERROR,
    error,
  }
)

export const thunkChar = (name) => {
  return async (dispatch) => {
    try {
      dispatch(searching());
      const response = await fetch(`https://anapioficeandfire.com/api/characters?name=${name}`);
      const data = await response.json();
      dispatch(found(data))
    } catch (error) {
      dispatch(searchError(error))
    }
  };
};
