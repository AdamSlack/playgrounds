import React from "react";
import "./index.css";

export default (props) => {
  const { colour } = props;
  const dotDivs = Array.from({ length: 9 }, () => (
    <div style={{ backgroundColor: colour }} />
  ));
  return <div className="dot-grid-icon">{dotDivs}</div>;
};
