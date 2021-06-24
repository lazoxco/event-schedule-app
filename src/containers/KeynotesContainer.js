import React, { Component } from 'react'
import { BrowserRouter as Route, Switch } from 'react-router-dom'
import Keynotes from '../components/Keynotes'
import CreateKeynote from '../components/CreateKeynote'


class KeynotesContainer extends Component {
  render() {
    return (
    <Switch>
      <Route path="/keynotes">
        <Keynotes />
      </Route>
      <Route path="/keynotes/new">
        <CreateKeynote />
      </Route>
    </Switch>
    )
  }
}

export default KeynotesContainer