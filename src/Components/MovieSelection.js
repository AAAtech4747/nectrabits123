// MovieSelection.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectMovie, updateTickets } from '../actions/bookingActions';
import 'bootstrap/dist/css/bootstrap.css';
import '../App.css'
function MovieSelection() {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies.movies);
  const selectedMovie = useSelector((state) => state.booking.selectedMovie);
  const numberOfTickets = useSelector((state) => state.booking.numberOfTickets);
  const totalPrice = useSelector((state) => state.booking.totalPrice);

  const [ticketQuantity, setTicketQuantity] = useState(0);

  // Sample movie data
  const sampleMovies = [
    { id: 1, title: 'Movie 1', ticketPrice: 10 },
    { id: 2, title: 'Movie 2', ticketPrice: 12 },
    { id: 3, title: 'Movie 3', ticketPrice: 15 },
  ];

  const handleMovieSelection = (movie) => {
    dispatch(selectMovie(movie));
  };

  const handleTicketQuantityChange = (e) => {
    const quantity = parseInt(e.target.value, 10);
    setTicketQuantity(quantity);

    // Calculate the total price based on the selected movie and ticket quantity
    if (selectedMovie) {
      const price = selectedMovie.ticketPrice * quantity;
      dispatch(updateTickets(quantity, price));
    }
  };

  return (<>    
        <h2>Select a Movie:</h2>
        <div className='d-flex'>
     <div className='container d-flex'>
     <img src="https://imageio.forbes.com/blogs-images/scottmendelson/files/2014/10/2v00kg8.jpg?format=jpg&width=1200" class="poster"/>
     <ul>
     <h2>Intersteller</h2>
     <label className='label'>Movie 1</label>
     <li>2h 49m</li>
    <li>Action,Thriller</li>
     </ul>
     </div>
     <div className='container d-flex'>
     <img src="https://imageio.forbes.com/blogs-images/scottmendelson/files/2014/10/2v00kg8.jpg?format=jpg&width=1200" class="poster"/>
     <ul>
     <h2>Intersteller</h2>
     <label className='label'>Movie 2</label>
    <li>2h 49m</li>
    <li>Action,Thriller</li>
    
     </ul>
     </div>
     <div className='container d-flex'>
     <img src="https://imageio.forbes.com/blogs-images/scottmendelson/files/2014/10/2v00kg8.jpg?format=jpg&width=1200" class="poster"/>
     <ul>
     <h2>Intersteller</h2>
     <label className='label'>Movie 3</label>
     <li>2h 49m</li>
    <li>Action,Thriller</li>
     </ul>
     </div>
     </div>
    
  
     
   

    <ul className="list-group">
        {sampleMovies.map((movie) => (
          <li className="list-group-item" key={movie.id}>
            <button
              className="btn btn-primary"
              onClick={() => handleMovieSelection(movie)}
            >
              {movie.title}
            </button>
          </li>
        ))}
      </ul>

      {selectedMovie && (
        <div className="mt-3">
          <h3>Selected Movie: {selectedMovie.title}</h3>
          <p>Ticket Price: ${selectedMovie.ticketPrice}</p>
          <label>
            Number of Tickets:
            <input
              type="number"
              className="form-control"
              value={ticketQuantity}
              onChange={handleTicketQuantityChange}
            />
          </label>
          <p>Total Price: ${totalPrice}</p>
        </div>
      )}
    </>

  );
}

export default MovieSelection;