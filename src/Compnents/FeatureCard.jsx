import React from "react";
import "./FeatureCard.css";

const FeatureCard = ({ iconName, title, description, bgColor }) => {
  return (
    <div className="feature-card" style={{ backgroundColor: bgColor }}>
      <div className="icon">
        <ion-icon name={iconName}></ion-icon>  {/* render icon here */}
      </div>
      <h3 className="title">{title}</h3>
      <p className="description">{description}</p>
    </div>
  );
};

export default FeatureCard;
