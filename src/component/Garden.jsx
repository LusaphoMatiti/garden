import React from "react";
import { useState, useEffect } from "react";
import Plant from "./Plant";
import "../style/Garden.css";

const Garden = () => {
  // State to manage the list of plants
  // plants holds the array of plant objects.
  // plantName, plantType, and wateringSchedule manage form input values.

  const [plants, setPlants] = useState([]);
  const [plantName, setPlantName] = useState("");
  const [plantType, setPlantType] = useState("");
  const [wateringSchedule, setWateringSchedule] = useState("");

  // Load plants from LocalStorage when the co
  useEffect(() => {
    const storedPlants = JSON.parse(localStorage.getItem("plants"));
    if (storedPlants) {
      setPlants(storedPlants);
    }
  }, []);

  // Save plants to localStorage
  // The useEffect hook is used to load plants from localStorage when the component mounts and save the plant list whenever it changes.
  useEffect(() => {
    localStorage.setItem("plant", JSON.stringify(plants));
  }, [plants]);

  // Handler to add a new plant
  // addPlant handles form submission to add a new plant.
  const addPlant = (e) => {
    e.preventDefault();
    if (plantName && plantType && wateringSchedule) {
      const newPlant = {
        id: Date.now(),
        name: plantName,
        type: plantType,
        schedule: wateringSchedule,
      };
      setPlants([...plants, newPlant]);
      setPlantName("");
      setPlantType("");
      setWateringSchedule("");
    }
  };

  // Handler to delete a plant
  // deletePlant handles deleting a plant by filtering out the plant with the specified id.
  const deletePlant = (id) => {
    const updatedPlants = plants.filter((plant) => plant.id !== id);
    setPlants(updatedPlants);
  };

  // The form includes input fields for the plant's name, type, and watering schedule, with an onSubmit event handler to add new plants to the list.

  return (
    <div className="garden-container">
      <h2 className="garden-title">My Garden</h2>
      <form className="plant-form" onSubmit={addPlant}>
        <input
          className="plant-input"
          type="text"
          placeholder="Plant Name"
          value={plantName}
          onChange={(e) => setPlantName(e.target.value)}
        />
        <input
          className="plant-input"
          type="text"
          placeholder="Plant Type"
          value={plantType}
          onChange={(e) => setPlantType(e.target.value)}
        />
        <input
          className="plant-input"
          type="text"
          placeholder="Watering Schedule"
          value={wateringSchedule}
          onChange={(e) => setWateringSchedule(e.target.value)}
        />
        <button className="add-plant-button" type="submit">
          Add Plant
        </button>
      </form>
      {/*If plants.length === 0, a message is displayed indicating that there are no plants. Otherwise, the list of plants is rendered.*/}
      {plants.length === 0 ? (
        <p className="no-plant-message">
          No plants in the garden yet. Add some!
        </p>
      ) : (
        <div className="plant-list">
          {/* The plants.map() function is used to render each plant in the list by passing data to the Plant component. */}
          {plants.map((plant) => (
            <Plant key={plant.id} plant={plant} onDelete={deletePlant} />
          ))}
        </div>
      )}
    </div>
  );
};
export default Garden;
