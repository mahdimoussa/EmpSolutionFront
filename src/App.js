import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Login from './components/auth/Login';
import {CustomerList} from './components/customers/customerList';
import Register from './components/auth/Register';
const App= () => {
    localStorage.setItem("loggedIn","False")
    return (
      <Router>
        <div>
          <Switch>
          <Route path="/login">
              <Login />
            </Route>
              <Route path="/customers">
                  <CustomerList />
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
export default App