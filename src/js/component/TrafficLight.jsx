import React, { useState } from 'react';
import TrafficLightContainer from './TrafficLightContainer';
import ControlButtons from './ControlButton';

const TrafficLight = () => {
  const [selectedColor, setSelectedColor] = useState("red");

  const changeColor = () => {
    switch (selectedColor) {
      case "red":
        setSelectedColor("yellow");
        break;
      case "yellow":
        setSelectedColor("green");
        break;
      case "green":
        setSelectedColor("red");
        break;
      default:
        break;
    }
  };

  return (
    <div className="container my-5">
      <div className="post bg-dark"></div>
      <TrafficLightContainer selectedColor={selectedColor} onColorChange={setSelectedColor} />
      <ControlButtons onChangeColor={changeColor} />
    </div>
  );
};

export default TrafficLight;
