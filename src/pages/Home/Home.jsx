import React, { useEffect, useState } from "react";
import "./Home.css";
import Button from "../../Components/UiElements/Button";
import HeroArea from "../../Components/HeroArea";
import Card from "../../Components/Card/Card";

const Home = ({ increment }) => {
  //useEffect(() => {}, []);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [buttonText, setButtonText] = useState("view more");

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

  return (
    <>
      <HeroArea buttonText={buttonText} />
      <div className="servicesArea">
        <h2 style={{ color: "goldenrod", fontSize: "35px" }}>Our Services</h2>
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
