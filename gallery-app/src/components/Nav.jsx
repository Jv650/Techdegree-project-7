import React from "react";
//import App from "./App";
import { NavLink } from "react-router-dom";
//import { Route, Routes } from "react-router-dom";
//import Photolist from "./Photolist";
//import { BrowserRouter } from "react-router-dom";


//A Nav component for the app's navigation links.
const Nav = () => {
  return (
    <nav className="main-nav">
        <ul>
          <li><a><NavLink to="cats" href='#'>Cats</NavLink></a></li>
          <li><a><NavLink to="dogs" href='#'>Dogs</NavLink></a></li>
          <li><a><NavLink to="computers" href='#'>Computers</NavLink></a></li>
        </ul>
      </nav>
  );
};

export default Nav;

/*<Routes>
<Route path="/" element={<Photolist />} />
<Route path="/" element={<Photolist />} />
</Routes>*/