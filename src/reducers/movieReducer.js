const initialState = {
    movies: [], // You can initialize this with your movie data
  };
  
  const movieReducer = (state = initialState, action) => {
    switch (action.type) {
      // Define actions related to movies here
      default:
        return state;
    }
  };
  
  export default movieReducer;