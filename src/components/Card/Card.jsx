import React from "react";
import "./Card.css";
import profile from "../../images/icon.png";

const Card = ({ name, email, image, location }) => {
  if (!image) {
    image = profile;
  }
  if (!location) {
    location = "Not available";
  }
  return (
    <div className="card">
      <div className="image">
        <img src={image} alt="UserProfile" />
      </div>
      <div className="name">Name : {name}</div>
      <div className="description">Email : {email}</div>
      <div className="description">Location : {location}</div>
      <div>
        <button>Send Request</button>
      </div>
    </div>
  );
};

export default Card;
