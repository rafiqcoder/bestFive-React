import React, { createContext, useEffect, useState } from "react";

export const DataContext = createContext();

const ContextApi = ({ children }) => {
  const [buttonText, setButtonText] = useState("Click Me");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

   useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        // Process the fetched data
        console.log(data);
        setData(data);
        setLoading(false);
      });
   }, []);
  
  if (loading) {
    return <div>Loading...</div>;
  }



  const contextValues = {
    buttonText,
    setButtonText,
    data,
    loading
  }

  return (
    <DataContext.Provider value={contextValues}>
      {children}
    </DataContext.Provider>
  );
};

export default ContextApi;
