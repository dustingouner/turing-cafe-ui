import React from "react";
import './ReservationCard.css'


const ReservationCard = ({ id, name, date, time, guests }) => {
  return (
    <div className="card">
      <h2>{name}</h2>
      <p>{date}</p>
      <p>{time}</p>
      <p>Number of guests: {guests}</p>
      <button>Cancel</button>
    </div>
  )
}








export default ReservationCard