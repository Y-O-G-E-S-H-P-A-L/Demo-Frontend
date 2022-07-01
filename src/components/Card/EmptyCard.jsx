import React from "react";
import "./Card.css";
import notFound from "../../images/notFound.png";

const EmptyCard = () => {
  return (
    <div className="empty-card">
      <div className="image">
        <img src={notFound} alt="Not Found" />
      </div>
    </div>
  );
};

export default EmptyCard;
