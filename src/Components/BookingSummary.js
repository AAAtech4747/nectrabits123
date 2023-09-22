import React from 'react';
import { useSelector } from 'react-redux';

function BookingSummary() {
  const selectedMovie = useSelector((state) => state.booking.selectedMovie);
  const numberOfTickets = useSelector((state) => state.booking.numberOfTickets);
  const totalPrice = useSelector((state) => state.booking.totalPrice);

  return (
    <div className="container">
      <h2>Booking Summary</h2>
      {selectedMovie ? (
        <div>
          <p>Selected Movie: {selectedMovie.title}</p>
          <p>Number of Tickets: {numberOfTickets}</p>
          <p>Total Price: ${totalPrice}</p>
          <p className="alert alert-success">Booking Confirmation: Your booking is confirmed!</p>
        </div>
      ) : (
        <p>No booking made yet.</p>
      )}
    </div>
  );
}

export default BookingSummary;