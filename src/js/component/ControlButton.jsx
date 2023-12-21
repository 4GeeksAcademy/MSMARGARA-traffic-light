import React from 'react';

const ControlButtons = ({ onChangeColor }) => {
  return (
    <button className="btn mt-4 bg-dark text-light" onClick={onChangeColor}>
      CHANGE COLOR
    </button>
  );
};

export default ControlButtons;
