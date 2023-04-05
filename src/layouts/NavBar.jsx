import { NavLink } from "react-router-dom";

import React from "react";

function NavBar() {
  return (
    <div>
      <nav className="grid grid-flow-col p-5 text-xl sticky top-0">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
    </div>
  );
}

export default NavBar;
