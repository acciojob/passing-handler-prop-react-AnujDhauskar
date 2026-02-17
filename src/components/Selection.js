import React, { useState } from "react";

const Selection = (props) => {
  const { applyColor } = props;

  const [selectionStyle, setSelectionStyle] = useState({ background: "" });

  return (
    <div
      className="fix-box"
      style={selectionStyle}
      onClick={() => applyColor(setSelectionStyle)}
    >
    </div>
  );
};

export default Selection;

