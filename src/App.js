import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './containers/Navbar'
import Home from './containers/Home'
import KeynotesContainer from './containers/KeynotesContainer'
import { connect } from 'react-redux';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/keynotes" component={(routeInfo) => <KeynotesContainer routeData={routeInfo} />}/>
          <Route path="*" render={() => <h1 className="text-center">404 | Page Not Found</h1>}/>
        </Switch>
      </div>
    </Router>
  );
}

const mapStateToProps = (state) => {
  return {
    keynotes: state.keynotes
  }
}

export default connect(mapStateToProps)(App)
