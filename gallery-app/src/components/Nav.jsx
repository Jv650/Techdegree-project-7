/* eslint-disable react/prop-types */
//import App from "./App";
import { NavLink } from "react-router-dom";
//import { Route, Routes } from "react-router-dom";
//import Photolist from "./Photolist";
//import { BrowserRouter } from "react-router-dom";

//A Nav component for the app's navigation links.
const Nav = ({ handleQueryChange }) => {
  return (
    <nav className="main-nav">
      <ul>
        <li>
          <NavLink to="cats" onClick={() => handleQueryChange()}>
            Cats
          </NavLink>
        </li>
        <li>
          <NavLink to="dogs" onClick={() => handleQueryChange()}>
            Dogs
          </NavLink>
        </li>
        <li>
          <NavLink to="computers" onClick={() => handleQueryChange()}>
            Computers
          </NavLink>
        </li>
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

/*const Nav = ({ handleQueryChange }) => {
  return (
    <nav className="main-nav">
      <ul>
        <li>
          <NavLink to="cats" onClick={() => handleQueryChange("cats")}>
            Cats
          </NavLink>
        </li>
        <li>
          <NavLink to="dogs" onClick={() => handleQueryChange("dogs")}>
            Dogs
          </NavLink>
        </li>
        <li>
          <NavLink
            to="computers"
            onClick={() => handleQueryChange("computers")}
          >
            Computers
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}; */
