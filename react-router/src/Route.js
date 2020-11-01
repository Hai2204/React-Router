import Home from "./components/Home";
import About from "./components/About";
import Profile from "./components/Profile";
import NotFound from "./components/NotFound";
import React from "react";
import Products from "./components/Products";
import Prompts from "./components/Prompt";
const routes = [
  {
    path: "/",
    exact: true,
    main: () => <Home />,
  },
  {
    path: "/about",
    exact: false,
    main: () => <About />,
  },
  {
    path: "/profile",
    exact: false,
    main: () => <Profile />,
  },
  {
    path: "/products",
    exact: false,
    main: ({match}) => <Products match={match}/>,
  },
  {
    path: "/prompt",
    exact: false,
    main: ({match}) => <Prompts match={match}/>,
  },
  {
    path: "",
    exact: false,
    main: () => <NotFound />,
  },
];
export default routes;
