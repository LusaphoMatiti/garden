import React from "react";
import "../style/Plant.css";

const Plant = ({ plant, onDelete }) => {
  return (
    <div className="plant-card">
      <h3 className="plant-name">{plant.name}</h3>
      <p className="plant-type">Type: {plant.type}</p>
      <p className="plant-schedule">Watering Schedule: {plant.schedule}</p>
      <button className="delete-button" onClick={() => onDelete(plant.id)}>
        Delete
      </button>
    </div>
  );
};
export default Plant;
