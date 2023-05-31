import React from "react";

function Button({ content, clickFun, color, bgColor, radius }) {
  return (
    <button
      className={`p-3  rounded-${radius}`}
      onClick={clickFun}
      style={{ color, backgroundColor: bgColor }}
    >
      {content}
    </button>
  );
}

export default Button;
