import React, { Component } from 'react'
import { fetchKeynote } from '../actions/keynoteActions'
import { connect } from 'react-redux'

class KeynoteDetails extends Component {

  // componentDidMount() {
  //   this.props.fetchKeynote(this.props.match.params.id)
  // }

  render() {
    console.log(this.props)
    return (
      <div className="container">
        <h3>Keynote Title</h3>
        <p>Keynote Speaker</p>
        <p>Keynote Time</p>
        <p>Keynote Description</p>
      </div>
    )
  }
}

// const mapStateToProps = (state, props) => {
//   let id = props.match.params.id

//   return {
//     keynotes: state.keynotes.find(keynote => keynote.id === id)
//   }
// }

// const mapDispatchToProps = (dispatch) => {
//   return {
//     fetchKeynote: () => dispatch(fetchKeynote())
//   }
// }


// export default connect(mapStateToProps, mapDispatchToProps)(KeynoteDetails)
export default KeynoteDetails