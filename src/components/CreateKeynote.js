import React, { Component } from 'react'
import { createKeynote } from '../actions/keynoteActions'
import { connect } from 'react-redux'

class CreateKeynote extends Component {
  state = {
    title: '',
    speaker: '',
    description: '',
    dateTime: ''

  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    // console.log(this.state)
    this.props.createKeynote(this.state)
  }

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="keynote-form">
          <h3>Create a Keynote</h3>
          <div className="input-group">
            <input onChange={this.handleChange} className="form-control" placeholder="Title" type="text" id="title" />
          </div>

          <div className="input-group">
            <input onChange={this.handleChange} className="form-control" placeholder="Speaker" type="text" id="speaker" />
          </div>

          <div className="input-group">
            <textarea onChange={this.handleChange} className="form-control" placeholder="Description" type="text" id="description"></textarea>
          </div>

          <div className="input-group">
            <input onChange={this.handleChange} className="form-control" placeholder="Date and Time" type="text" id="date_time" />
          </div>

          <div className="input-group">
            <button className="btn btn-primary" type="submit">Create Keynote</button>
          </div>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createKeynote: (keynote) => dispatch(createKeynote(keynote))
  }
}

export default connect(null, mapDispatchToProps)(CreateKeynote)