import React, { useState } from "react";
import "./App.css";
import Navbar from "./Components/UI/Navbar";
import MealItems from "./Components/Meal/MealItems";

function App() {
  const [searching, setSearching] = useState("");
  
  const searchUpHandler = (searchResult) => {
    setSearching(searchResult);
  };

  return (
    <div className="App">
      <Navbar onSearchChange={searchUpHandler} />
      <br />
      <br />
      <MealItems passSearchTerm={searching} />
    </div>
  );
}

export default App;
