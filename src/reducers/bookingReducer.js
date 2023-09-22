// bookingReducer.js
const initialState = {
    selectedMovie: null,
    numberOfTickets: 0,
    totalPrice: 0,
  };
  
  const bookingReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SELECT_MOVIE':
        return {
          ...state,
          selectedMovie: action.payload.selectedMovie,
        };
      case 'UPDATE_TICKETS':
        return {
          ...state,
          numberOfTickets: action.payload.numberOfTickets,
          totalPrice: action.payload.totalPrice,
        };
      default:
        return state;
    }
  };
  
  export default bookingReducer;
  