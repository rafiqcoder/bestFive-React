import React from "react";
import "./Home.css";
import Button from "../../Components/UiElements/Button";
import HeroArea from "../../Components/HeroArea";
import hockey1 from "../../assets/img/hockey1.jpg";
import hockey2 from "../../assets/img/hockey2.jpg";
import hockey3 from "../../assets/img/hockey3.jpg";
import hockey4 from "../../assets/img/hockey4.jpg";
import hockey5 from "../../assets/img/hockey5.jpg";
import hockey6 from "../../assets/img/hockey6.jpg";

const Home = ({ increment }) => {
  return (
    <>
      <HeroArea />
      <div className="servicesArea">
        <h2 style={{ color: "goldenrod", fontSize: "35px" }}>Our Services</h2>
        <p>We offer a variety of services to help you succeed.</p>
        <div className="cardContainer">
          <div className="card">
            <img src={hockey1} alt="Service 1" />
            <h3>Service 1</h3>
            <p>Description of Service 1</p>
            <button>Details</button>
          </div>
          <div className="card">
            <img src={hockey2} alt="Service 2" />
            <h3>Service 2</h3>
            <p>Description of Service 2</p>
            <button>Details</button>
          </div>
          <div className="card">
            <img src={hockey3} alt="Service 3" />
            <h3>Service 3</h3>
            <p>Description of Service 3</p>
            <button>Details</button>
          </div>
          <div className="card">
            <img src={hockey4} alt="Service 4" />
            <h3>Service 4</h3>
            <p>Description of Service 4</p>
            <button>Details</button>
          </div>
          <div className="card">
            <img src={hockey5} alt="Service 5" />
            <h3>Service 5</h3>
            <p>Description of Service 5</p>
            <button>Details</button>
          </div>
          <div className="card">
            <img src={hockey6} alt="Service 6" />
            <h3>Service 6</h3>
            <p>Description of Service 6</p>
            <button>Details</button>
          </div>
        </div>
        <div className="mt">
          <Button text="Learn More" />
        </div>
      </div>
    </>
  );
};

export default Home;
