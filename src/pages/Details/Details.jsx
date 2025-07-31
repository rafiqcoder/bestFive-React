import React, { useEffect, useState } from "react";
import hockey1 from "../../assets/img/hockey1.jpg";
import "./Details.css"; // Assuming you have a CSS file for styling
import { useParams } from "react-router";

const Details = () => {
  const [userDetails, setUserDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  const userId = useParams().id; // Assuming you want to fetch details for user with ID 1
  // reciving id from url
  console.log("userId", userId);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then((response) => response.json())
      .then((data) => {
        console.log("user details data  ", data);

        setUserDetails(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="detailsContainer">
      <h1 className="title">Details Page</h1>
      <img className="detailImg" src={hockey1} alt="" />
      <h2> Name : {userDetails.name}</h2>
      <h3>User Name :{userDetails.username}</h3>
      <h3>phone: {userDetails.phone}</h3>
      <h4>Website: {userDetails.website}</h4>
      <p>
        Details about the user will be displayed here. lorem 100 Lorem ipsum
        dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit
        esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
        id est laborum.
      </p>
    </div>
  );
};

export default Details;
