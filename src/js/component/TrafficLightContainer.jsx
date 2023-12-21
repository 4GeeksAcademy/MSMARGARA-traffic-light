import React from 'react';

const TrafficLightContainer = ({ selectedColor, onColorChange }) => {
  return (
    <div className="container bg-dark p-3 rounded">
      <div
        className={`light red ${selectedColor === 'red' && 'selected'}`}
        onClick={() => onColorChange('red')}
      ></div>
      <div
        className={`light yellow ${selectedColor === 'yellow' && 'selected'}`}
        onClick={() => onColorChange('yellow')}
      ></div>
      <div
        className={`light green ${selectedColor === 'green' && 'selected'}`}
        onClick={() => onColorChange('green')}
      ></div>
    </div>
  );
};

export default TrafficLightContainer;
