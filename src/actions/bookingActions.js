export const selectMovie = (movie) => {
    return {
      type: 'SELECT_MOVIE',
      payload: { selectedMovie: movie },
    };
  };
  
  export const updateTickets = (numberOfTickets, totalPrice) => {
    return {
      type: 'UPDATE_TICKETS',
      payload: { numberOfTickets, totalPrice },
    };
  };