import React from "react";
import Button from "./UiElements/Button";

const HeroArea = () => {
  return (
    <div className="HeroArea">
      <h1>Welcome to the Home Page</h1>
      <p>This is a simple home page.</p>
      {/* <button onClick={() => increment()}>Increment</button> */}
      <Button text="Increment" />
    </div>
  );
};

export default HeroArea;
