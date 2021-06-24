import React, { Component } from 'react'
import KeynoteList from '../components/KeynoteList'
import { connect } from 'react-redux'
import { fetchKeynotes } from '../actions/keynoteActions'

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

const mapDispatchToProps = (dispatch) => {
  return {
    fetchKeynotes: () => dispatch(fetchKeynotes())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Schedule)