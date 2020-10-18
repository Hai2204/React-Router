import React from "react";
import Home from "./components/Home";
import About from "./components/About";
import Profile from "./components/Profile";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <nav className="uk-navbar-container" uk-navbar="true">
          <div className="uk-navbar-left">
            <ul className="uk-navbar-nav">
              <li className="uk-active">
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/profile">Dashboard</Link>
              </li>
            </ul>
          </div>
        </nav>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about" component={About} />
          <Router path="/profile">
            <Profile />
          </Router>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
