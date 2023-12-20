import React from "react";
import "./Card.css"; // Ensure you have a corresponding CSS file for card styles

const Card = ({ title, subtitle, teacher, image }) => {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-subtitle">{subtitle}</p>
        <div className="card-footer">
          <span className="teacher">{teacher}</span>
          <span className="hours">309小时</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
