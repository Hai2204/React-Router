import React, { Component } from "react";
import Time from "../components/Time/Time";
import { Route, Link } from "react-router-dom";

const menus = [
  {
    name: "Trang Chủ",
    to: "/",
    exact: true,
  },
  {
    name: "Giới Thiệu",
    to: "/about",
    exact: false,
  },
  {
    name: "Profile",
    to: "/profile",
    exact: false,
  },
  {
    name: "san pham",
    to: "/products",
    exact: false,
  },
  {
    name: "Prompt",
    to: "/prompt",
    exact: false,
  },
];

const MenuLink = ({ label, to, activeOnlyWhenExact }) => {
  return (
    <Route
      path={to}
      exact={activeOnlyWhenExact}
      children={({ match }) => {
        var active = match ? "uk-active" : "";
        return (
          <li className={`${active} uk-color-danger`}>
            <Link to={to}>{label}</Link>
          </li>
        );
      }}
    />
  );
};

class Menu extends Component {
  showMenu = (menus) => {
    var result = null;
    if (menus.length > 0) {
      result = menus.map((menu, index) => {
        return (
          <MenuLink
            key={index}
            label={menu.name}
            activeOnlyWhenExact={menu.exact}
            to={menu.to}
          />
        );
      });
    }
    return result;
  };
  render() {
    return (
      <nav className="uk-navbar-container uk-position-relative" uk-navbar="true">
        <div className="uk-navbar-left">
          <ul className="uk-navbar-nav">{this.showMenu(menus)}</ul>
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
