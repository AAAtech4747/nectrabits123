import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store'
import MovieSelection from './Components/MovieSelection';
import BookingSummary from './Components/BookingSummary';
import './App.css'

function App() {
  return (
    <Provider store={store}>
     <MovieSelection/>
     <BookingSummary/>
    </Provider>
  );
}

export default App;