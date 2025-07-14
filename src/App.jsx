import { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import Home from "./pages/Home/Home";
import Footer from "./Components/Footer";

function App() {
  const [number, setNumber] = useState(0);


  const increment = () => {
    setNumber(number + 1);
  };

  return (
    <div >
      <Header number1={5} number2={10} increasedValue={number} />
      <Home increment={increment} />
      <Footer />
    </div>
  );
}

export default App;
