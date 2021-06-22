import React, { Component } from 'react'
import Jumbotron from '../components/Jumbotron'
import { connect } from 'react-redux'

class Home extends Component {
  render(){
    // console.log(this.props.keynotes)
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
const mapStateToProps = (state) => {
  return {
    keynotes: state.keynotes
  }
}

export default connect(mapStateToProps)(Home)