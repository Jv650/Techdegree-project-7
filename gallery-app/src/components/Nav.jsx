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
          <li><NavLink to="cats" >Cats</NavLink></li>
          <li><NavLink to="dogs" >Dogs</NavLink></li>
          <li><NavLink to="computers" >Computers</NavLink></li>
        </ul>
      </nav>
  );
};

export default Nav;

/*<Routes>
<Route path="/" element={<Photolist />} />
<Route path="/" element={<Photolist />} />
</Routes>*/

//This page does not need editing