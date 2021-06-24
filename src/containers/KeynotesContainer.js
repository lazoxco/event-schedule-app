import React, { Component } from 'react'
import { BrowserRouter as Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import Keynotes from '../components/Keynotes'
import CreateKeynote from './CreateKeynote'
// import KeynoteDetails from '../components/KeynoteDetails'


class KeynotesContainer extends Component {
  render() {
   return (
    <Switch>
      <Route exact path="/keynotes" >
        <Keynotes keynotes={this.props.keynotes}/>
      </Route>
      <Route exact path="/keynotes/new">
        <CreateKeynote />
      </Route>
      <Route path="/keynotes/:id" render={() => <div>show</div>}/>
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