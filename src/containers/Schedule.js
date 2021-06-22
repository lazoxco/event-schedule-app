import React, { Component } from 'react'
import KeynoteList from '../components/KeynoteList'
import { connect } from 'react-redux'

class Schedule extends Component {
  render() {
    const { keynotes } = this.props
    
    return (
      <div className="container">
        <KeynoteList keynotes={keynotes}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    keynotes: state.keynotes
  }
}

export default connect(mapStateToProps)(Schedule)