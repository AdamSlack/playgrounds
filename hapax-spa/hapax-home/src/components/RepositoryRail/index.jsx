import React from "react";
import RepositoryThumbnail from "../RepositoryThumbnail";
import "./index.css";

export default (props) => {
  const { repositories } = props;
  return (
    <ul className="repository-rail">
      {repositories.map((repo) => (
        <RepositoryThumbnail {...repo} />
      ))}
    </ul>
  );
};
