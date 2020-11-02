import React from "react";
import "./index.css";

export default (props) => {
  const { name, imgUrl } = props;
  return (
    <li className="organisation-thumbnail">
      <a>
        <img src={imgUrl} alt={`${name} icon`} title={name} />
      </a>
    </li>
  );
};
