import React from "react";

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
          <a style={aStyle} href="#">
            {" "}
            Home
          </a>
        </li>
        <li style={liStyle}>
          <a style={aStyle} href="#">
            {" "}
            About
          </a>
        </li>
        <li style={liStyle}>
          <a style={aStyle} href="#">
            {" "}
            Contact
          </a>
        </li>
        <li style={liStyle}>
          <a style={aStyle} href="#">
            {" "}
            Services
          </a>
        </li>
        <li style={liStyle}>
          <a style={aStyle} href="#">
            {" "}
            Blog
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
