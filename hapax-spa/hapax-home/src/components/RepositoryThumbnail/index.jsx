import React from "react";
import { stringToColour } from "../../libs/stringToColour";
import DotGridIcon from "../DotGridIcon";
import "./index.css";

export default (props) => {
  const { name, url, description } = props;
  const colourString = stringToColour(name);
  return (
    <li className="repository-thumbnail">
      <div className="header">
        <DotGridIcon colour={colourString} />
        <h3>
          <a href={url}>{name}</a>
        </h3>
      </div>
      <p>{description}</p>
    </li>
  );
};
