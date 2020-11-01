import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Menu from "./components/Menu";
import routes from "./Route";
class App extends Component {
  showContentMenu = (route) => {
    var result = null;
    if (route.length > 0) {
      result = routes.map((route, index) => {
        return (
          <Route
            key={index}
            path={route.path}
            component={route.main}
            exact={route.exact}
          />
        );
      });
    }
    return result;
  };
  render() {
    return (
      <Router>
        <div>
          <Menu />
          {/* nội dung route */}
          <Switch>{this.showContentMenu(routes)}</Switch>
        </div>
      </Router>
    );
  }
}

export default App;
