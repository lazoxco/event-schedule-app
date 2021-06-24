import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './containers/Navbar'
import Footer from './containers/Footer'
import Home from './containers/Home'
import Schedule from './containers/Schedule'
import CreateKeynote from './components/CreateKeynote'
import KeynoteDetails from './components/KeynoteDetails'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/schedule" component={Schedule}/>
          <Route exact path="/create" component={CreateKeynote}/>
          <Route exact path="/keynotes/:id" component={(routeInfo) => <KeynoteDetails routeData={routeInfo} />}/>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
