import "./App.css";
import React from "react";
import { Premios } from "./premios.jsx";
import { GameInterface } from "./GameInterface.jsx";

export function App() {
  return (
    <div className="app">
      <div className="main"> < GameInterface /> </div>
      <div className="prices"> < Premios /> </div>
      
     </div>
  );
}

export default App;
