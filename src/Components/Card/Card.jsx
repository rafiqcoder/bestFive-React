import React, { useContext } from "react";
import hockey1 from "../../assets/img/hockey1.jpg";
import { Link } from "react-router";
// Assuming you have a CSS file for styling
import styles from "./Card.module.css";
import { DataContext } from "../../ContextApi/ContextApi";

const Card = ({
  img = hockey1,
  title = "Default Name",
  description = "Default Description",
  id,
  website,
  phone,
  userName,
  email,
}) => {
  return (
    <div className={styles.card}>
      <img src={img} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      {website && <p>Website: {website}</p>}
      {phone && <p>Phone: {phone}</p>}
      {userName && <p>Username: {userName}</p>}
      {email && <p>Email: {email}</p>}
      <button className={styles.button}>
        <Link to={`/userdetails/${id}`}>view details</Link>
      </button>
    </div>
  );
};

export default Card;
