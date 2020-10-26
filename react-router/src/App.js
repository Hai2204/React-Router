import React from "react";
import Home from "./components/Home";
import About from "./components/About";
import Profile from "./components/Profile";
import NotFound from "./components/NotFound"
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Menu from "./components/Menu";



function App() {
  return (
    <Router>
      <div>
        <Menu />
        {/* nội dung route */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about" component={About} />
          <Router path="/profile">
            <Profile />
          </Router>
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
