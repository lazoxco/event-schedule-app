import React, { Component } from 'react'
import { BrowserRouter as Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import Keynotes from '../components/Keynotes'
import CreateKeynote from './CreateKeynote'


class KeynotesContainer extends Component {
  render() {
    console.log(this.props)
    return (
    <Switch>
      <Route exact path="/keynotes" >
        <Keynotes />
      </Route>
      <Route exact path="/keynotes/new">
        <CreateKeynote />
      </Route>
    </Switch>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    keynotes: state.keynotes
  }
}

export default connect(mapStateToProps)(KeynotesContainer)