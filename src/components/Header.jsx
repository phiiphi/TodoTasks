import React from "react";
const Header = ({ name, Count, handleIncreament }) => {
  return (
    <div>
      <span>{Count}</span>
      <button onClick={handleIncreament} className="button is-primary">
        Increment
      </button>
    </div>
  );
};

export default Header;
