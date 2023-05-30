import React from "react";

function Button({ content, clickFun, color, bgColor, radius }) {
  return (
    <button
      class={`p-3  rounded-${radius}`}
      onClick={clickFun}
      style={{ color, backgroundColor: bgColor }}
    >
      {content}
    </button>
  );
}

export default Button;
