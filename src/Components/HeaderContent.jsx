import React from "react";

const HeaderContent = ({ num1, num2, sum, increasedValue }) => {
  return (
    <div>
      <h1>Header Component</h1>
      <p>
        Sum of {num1} and {num2} is: {sum}
      </p>
      <p>Increased Value: {increasedValue}</p>
    </div>
  );
};

export default HeaderContent;
