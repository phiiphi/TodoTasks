import React from 'react'

export const Button = () => {
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
}
