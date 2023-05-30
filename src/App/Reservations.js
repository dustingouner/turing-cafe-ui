import React from 'react'
import './Reservations.css'
import ReservationCard from './ReservationCard'


function Reservations({allReservations}) {
  if (allReservations.length === 0) {
    return <p>Loading......</p>
  } else {

    console.log('all',allReservations);
    const reservationCards = allReservations.map(reservation => {
      console.log('res', reservation);
    
      return (
        <ReservationCard 
          id={reservation.id}
          name={reservation.name}
          key={reservation.id}
          date={reservation.date}
          time={reservation.time}
          guests={reservation.number}
          />
      )
      
  
})
    return(
    <div className='reservations-container'>
      {reservationCards}
    </div>
    )
  }
  
}







export default Reservations