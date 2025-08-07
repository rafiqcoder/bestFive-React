import React, { useContext, useEffect, useState } from "react";
import "./Home.css";
import Button from "../../Components/UiElements/Button";
import HeroArea from "../../Components/HeroArea";
import Card from "../../Components/Card/Card";
import { DataContext } from "../../ContextApi/ContextApi";

const Home = ({ increment }) => {
  //useEffect(() => {}, []);
  const [buttonText, setButtonText] = useState("view more");
  const { data, setData } = useContext(DataContext);

  return (
    <>
      <HeroArea buttonText={buttonText} />
      <div className="servicesArea">
        <h2 style={{ color: "goldenrod", fontSize: "35px" }}>Our Services</h2>
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
        <p>We offer a variety of services to help you succeed.</p>
        <div className="cardContainer">
          {data.map((player, index) => (
            <Card
              key={player.id}
              id={player.id}
              img={player.image}
              title={player.name}
              description={player.description}
              data={data}
            />
          ))}
        </div>
        <div className="mt">
          <Button text="Learn More" />
        </div>
      </div>
    </>
  );
};

export default Home;
