import React, { useState } from 'react';

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
  }
  
  return (
    <div className="container my-5">
      <div className="post bg-dark"></div>
      <div className="container bg-dark p-3 rounded">
        <div
          className={`light red ${selectedColor === 'red' && 'selected'}`}
          onClick={() => setSelectedColor('red')}
        ></div>
        <div
          className={`light yellow ${selectedColor === 'yellow' && 'selected'}`}
          onClick={() => setSelectedColor('yellow')}
        ></div>
        <div
          className={`light green ${selectedColor === 'green' && 'selected'}`}
          onClick={() => setSelectedColor('green')}
        ></div>
      </div>
      <button className="btn mt-4 bg-dark text-light" onClick={changeColor}>CHANGE COLOR</button>
    </div>
  );
};

export default TrafficLight;
