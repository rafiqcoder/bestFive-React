import React, { createContext, useState } from "react";

export const DataContext = createContext();

const ContextApi = ({ children }) => {
  const [buttonText, setButtonText] = useState("Click Me");

  return (
    <DataContext.Provider value={{ buttonText, setButtonText }}>
      {children}
    </DataContext.Provider>
  );
};

export default ContextApi;
