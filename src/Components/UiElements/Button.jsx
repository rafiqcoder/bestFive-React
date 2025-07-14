import React from "react";

const Button = ({ text }) => {
  return (
    <button
      style={{
        backgroundColor: "blue",
        color: "white",
        padding: "10px 20px",
        border: "none",
        borderRadius: "5px",
      }}
    >
      {text}
    </button>
  );
};

export default Button;
