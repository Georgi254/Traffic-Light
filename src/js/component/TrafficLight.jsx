import React from "react";
import "../../styles/index.css";
import { useState } from "react";

const TrafficLight = () => {
    const [ color, setColor] = useState("");
    


  return (
    <div className="contenedor">
      <div className="traffic-light">
        <div onClick={() => setColor("red")} className={"light red" +(color == "red" ? " glow-red":"")}></div>
        <div onClick={() => setColor("yellow")} className={"light yellow" +(color == "yellow" ? " glow-yellow":"")}></div>
        <div onClick={() => setColor("green")} className={"light green" +(color == "green" ? " glow-green":"")}></div>
      </div>
    </div>
  );
};



export default TrafficLight;
