import React, { Component } from 'react';
import './App.css';
import Reservations from './Reservations';

class App extends Component {
  constructor() {
    super()
    this.state = {
      existingReservations: [], 
      error: ''
    }
  }

  componentDidMount() {
    fetch('http://localhost:3001/api/v1/reservations')
    .then((res) => {
      if(!res.ok) {
        throw Error(res.status)
      } else {
        return res.json()
      }
    })
    .then((data) => 
      this.setState({ existingReservations: data })
    )
    .catch((error) => 
      this.setState({error: `${error}`})
    )
  }
  
  render() {
    const { existingReservations } = this.state
    console.log('here', existingReservations)

      return (
        <div className="App">
          <h1 className='app-title'>Turing Cafe Reservations</h1>
          <div className='resy-form'>
  
          </div>
          <div className='resy-container'>
            <Reservations allReservations={this.state.existingReservations} />
            
          </div>
        </div>
      )
    

    }
  }


export default App;
