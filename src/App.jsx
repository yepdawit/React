import React, { useState } from "react";
import "./App.css";
import { puppyList } from "./data.js";

function App() {
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);

  function handleFeatPupClick(id) {
    setFeatPupId(id);
  }

  const featuredPup = puppies.find((pup) => pup.id === featPupId);
  return (
    <div className="App">
      {puppies.map((puppy) => (
        <p key={puppy.id} onClick={() => handleFeatPupClick(puppy.id)}>
          {puppy.name}
        </p>
      ))}

      {featuredPup && (
        <div>
          <h2>{featuredPup.name}</h2>
          <ul>
            <li>{featuredPup.age}</li>
            <li>{featuredPup.email}</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
