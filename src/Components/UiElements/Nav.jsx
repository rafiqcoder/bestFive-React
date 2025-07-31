import React from "react";
import { NavLink } from "react-router";

const Nav = () => {
  const liStyle = {
    color: "blue",
    fontSize: "20px",
    listStyle: "none",
  };
  const aStyle = {
    textDecoration: "none",
    color: "white",
  };
  return (
    <nav>
      <ul
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          color: "white",
        }}
      >
        <li style={liStyle}>
          <NavLink style={aStyle} to="/">
            {" "}
            Home
          </NavLink>
        </li>
        <li style={liStyle}>
          <NavLink style={aStyle} to="/about">
            {" "}
            About
          </NavLink>
        </li>
        <li style={liStyle}>
          <NavLink style={aStyle} to="/contact">
            {" "}
            Contact
          </NavLink>
        </li>
        <li style={liStyle}>
          <NavLink style={aStyle} to="/services">
            {" "}
            Services
          </NavLink>
        </li>
        <li style={liStyle}>
          <NavLink style={aStyle} to="/blogs">
            {" "}
            Blog
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
