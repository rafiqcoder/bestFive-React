import React, { useContext } from "react";
import styles from "./Services.module.css"; // Assuming you have a CSS module for styles
import Card from "../../Components/Card/Card";
import { DataContext } from "../../ContextApi/ContextApi";

const Services = () => {
  const { data } = useContext(DataContext);
  // Log the data to check its structure
  return (
    <div className={styles.pageContainer}>
      <h1>Our Services</h1>
      <p>We offer a variety of services to help you succeed.</p>
      <div className={styles.servicesContainer}>
        {data.map((item, index) => (
          <Card
            key={index}
            img={item.img}
            title={item.name}
            description={item.description}
            website={item.website} // Assuming each item item has a website
            phone={item.phone} // Assuming each item item has a phone number
            userName={item.username} // Assuming each item item has a username
            email={item.email} // Assuming each data item has an email
            id={item.id} // Assuming each data item has an id
          />
        ))}
      </div>
    </div>
  );
};

export default Services;
