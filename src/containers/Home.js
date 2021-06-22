import React, { Component } from 'react'
import Jumbotron from '../components/Jumbotron'

class Home extends Component {
  render(){
    return(
      <div className="home">
        <Jumbotron />
        <div className="container">
          <h1>Home</h1>
        </div>
      </div>
    )
  }
}

export default Home