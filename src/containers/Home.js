import React, { Component } from 'react'
import HeroImage from '../components/HeroImage'
import { connect } from 'react-redux'
import Schedule from './Schedule'

class Home extends Component {
  render(){
    return(
      <div className="home">
        <HeroImage />
        <div className="container">
          <div className="row intro">
            <div className="col">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/Lu3qzZ1Ck9g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div className="col">
              <h1>Eat. Sleep. Code. Repeat.</h1>
              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. </p>
            </div>
          </div> 
          <div className="row">
            <div className="col">
              <h1 className="text-center">Conference Schedule</h1>
              <Schedule />
            </div>        
          </div>
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    keynotes: state.keynotes
  }
}

export default connect(mapStateToProps)(Home)