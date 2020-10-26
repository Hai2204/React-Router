import React, { Component } from "react";
import Time from "../components/Time/Time";
import {
  Route,
  Link,
} from "react-router-dom";
const MenuLink = ({ label, to, activeOnlyWhenExact }) => {
  return (
    <Route
      path={to}
      exact={activeOnlyWhenExact}
      children={({ match }) => {
        var active = match ? "uk-active" : "";
        return (
          <li className={active}>
            <Link to={to}>
              {label}
            </Link>
          </li>
        );
      }}
    />
  );
};
class Menu extends Component {
  render() {
    return (
      <nav className="uk-navbar-container" uk-navbar="true">
        <div className="uk-navbar-left">
          <ul className="uk-navbar-nav">
            <MenuLink label="Home" activeOnlyWhenExact={true} to="/" />
            <MenuLink label="About" activeOnlyWhenExact={true} to="/about" />
            <MenuLink
              label="Login"
              activeOnlyWhenExact={true}
              to="/profile"
            />
          </ul>
        </div>
        <div className="uk-navbar-center">
          Time:
          <Time />
        </div>
      </nav>
    );
  }
}

export default Menu;
