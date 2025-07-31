import React, { useContext } from "react";
import hockey1 from "../../assets/img/hockey1.jpg";
import { Link } from "react-router";
// Assuming you have a CSS file for styling
import styles from "./Card.module.css";
import { DataContext } from "../../assets/ContextApi/ContextApi";

const Card = ({
  img = hockey1,
  title = "Default Name",
  description = "Default Description",
  id,
}) => {

  const { buttonText } = useContext(DataContext);
  return (
    <div className={styles.card}>
      <img src={img} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      <button className={styles.button}>
        <Link to={`/details/${id}`}>{buttonText}</Link>
      </button>
    </div>
  );
};

export default Card;
