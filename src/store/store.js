import { createStore, combineReducers } from 'redux';
import movieReducer from '../reducers/movieReducer';
import bookingReducer from '../reducers/bookingReducer';
// import booking from ""

// Combine reducers into a root reducer
const rootReducer = combineReducers({
  movies: movieReducer,
  booking: bookingReducer,
});

// Create the Redux store
const store = createStore(rootReducer);

export default store;