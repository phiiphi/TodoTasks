import React from "react";

const TrackerButton = ({ color, text, changeShowTaskState }) => {
  return (
    <div>
      <button
        onClick={changeShowTaskState}
        style={{ backgroundColor: color }}
        className="btn">
        {text}
      </button>
    </div>
  );
};

export default TrackerButton;
