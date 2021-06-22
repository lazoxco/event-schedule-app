import React, { Component } from 'react'
import HeroImage from '../components/HeroImage'
import { connect } from 'react-redux'

class Home extends Component {
  render(){
    // console.log(this.props.keynotes)
    return(
      <div className="home">
        <HeroImage />
        <div className="container">
          <h1>Home</h1>
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