import React, { Component } from 'react'


class CreateKeynote extends Component {
  state = {
    title: '',
    speaker: '',
    description: '',
    dateTime: ''

  }

  render() {
    return (
      <div className="container">
        <form className="keynote-form">
          <h3>Create a Keynote</h3>
          <div className="input-group">
            <input className="form-control" placeholder="Title" type="text" id="title" />
          </div>

          <div className="input-group">
            <input className="form-control" placeholder="Speaker" type="text" id="speaker" />
          </div>

          <div className="input-group">
            <textarea className="form-control" placeholder="Description" type="text" id="description"></textarea>
          </div>

          <div className="input-group">
            <input className="form-control" placeholder="Date and Time" type="text" id="date_time" />
          </div>

          <div className="input-group">
            <button className="btn btn-primary" type="submit">Create Keynote</button>
          </div>
        </form>
      </div>
    )
  }
}

export default CreateKeynote