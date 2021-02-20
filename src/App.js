import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Dashboard from "./dashboard";
import Login from './Login';
import Register from './Register';
class App extends Component {
  constructor(props) {
    super(props);
    localStorage.setItem("loggedIn","False")
  }
  render(){
    return (
      <Router>
        <div>
          
          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
          <Route path="/login">
              <Login />
            </Route>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
            <Route path="/">
              <Register />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
 
}
export default App