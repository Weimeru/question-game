import styles from "./App.module.css";
import React from "react";
import { Premios } from "./premios.jsx";
import { GameInterface } from "./GameInterface.jsx";

export function App() {
  return (
    <div className={styles.app}>
      <div className={styles.main}> < GameInterface /> </div>
      <div className={styles.prices}> < Premios /> </div>
      
     </div>
  );
}

export default App;
