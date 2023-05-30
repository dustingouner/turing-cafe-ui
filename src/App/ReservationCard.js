import React from "react";
import './ReservationCard.css'


const ReservationCard = ({ id, name }) => {
  return (
    <div className="card">
      <h2>{name}</h2>
    </div>
  )
}








export default ReservationCard