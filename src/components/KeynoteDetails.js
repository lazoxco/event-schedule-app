import React from 'react'

import { connect } from 'react-redux'

const KeynoteDetails = (props) => {
  return (
    <div className="container">
      <h3>Keynote Title</h3>
      <p>Keynote Speaker</p>
      <p>Keynote Time</p>
      <p>Keynote Description</p>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  let id = ownProps.match.params.id
  return {
    keynote: state.keynotes.find(keynote => keynote.id === id)
  }
}

export default connect(mapStateToProps)(KeynoteDetails)