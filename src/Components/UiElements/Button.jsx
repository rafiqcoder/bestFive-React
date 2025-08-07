import React, { useContext } from "react";
import { DataContext } from "../../ContextApi/ContextApi";

const Button = () => {
  const { buttonText } = useContext(DataContext);

  return <button className="button">{buttonText}</button>;
};

export default Button;
