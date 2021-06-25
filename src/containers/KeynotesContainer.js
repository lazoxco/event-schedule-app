import React, { Component } from 'react'
import { BrowserRouter as Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import Keynotes from '../components/Keynotes'
import CreateKeynote from './CreateKeynote'
import KeynoteShow from '../components/KeynoteShow'


class KeynotesContainer extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/keynotes" >
          <Keynotes keynotes={this.props.keynotes} />
        </Route>
        <Route exact path="/keynotes/new">
          <CreateKeynote />
        </Route>
        {/* <Route path="/keynotes/:id">
          <KeynoteShow />
        </Route> */}
        <Route path="keynotes/:id" component={(routeData) => {
          console.log(routeData)
          const id = parseInt(routeData.match.params.id)
          const keynote = this.state.keynotes.find(keynote => keynote.id === id)
          return !!keynote ? <KeynoteShow keynote={keynote}/> : 404
        }}></Route>
        
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