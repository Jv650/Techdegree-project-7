/* eslint-disable react/prop-types */

import { NavLink } from "react-router-dom";

//A Nav component for the app's navigation links.
//NavLink is used to specify which route to go to
const Nav = () => {
  return (
    <nav className="main-nav">
      <ul>
        <li>
          <NavLink to="cats">Cats</NavLink>
        </li>
        <li>
          <NavLink to="dogs">Dogs</NavLink>
        </li>
        <li>
          <NavLink to="computers">Computers</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
