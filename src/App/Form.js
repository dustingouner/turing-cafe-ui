import React, { Component } from "react";
import './Form.css'

class Form extends Component {
  constructor() {
    super()
    this.state = {
      name: '', 
      date: '', 
      time: '', 
      numberGuests: 0
    }
  }

  makeReservation = event => {
    event.preventDefault()
    const newReserv = {
      id: Date.now(), 
      ...this.state
      
    }
    this.props.addReserv(newReserv)
    this.clearInputs()
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value})
  }

  clearInputs = () => {
    this.setState({ name: '', date: '', time: '', numberGuests: 0})
  }

  render() {
    return (
      <form>
        <input
          type='text'
          placeholder="Name"
          name="name"
          value={this.state.name}
          onChange={event => this.handleChange(event)}
          />
        <input
          type='text'
          placeholder="Date (mm/dd)"
          name="date"
          value={this.state.date}
          onChange={event => this.handleChange(event)}
          />
        <input
          type='text'
          placeholder="Time"
          name="time"
          value={this.state.time}
          onChange={event => this.handleChange(event)}
          />
        <input
          type= 'number'
          placeholder="Number of guests"
          name="numberGuests"
          value={this.state.numberGuests}
          onChange={event => this.handleChange(event)}
          />

        <button onClick={event => this.makeReservation(event)}>Make Reservation</button>

      </form>
    )
  }
}







export default Form