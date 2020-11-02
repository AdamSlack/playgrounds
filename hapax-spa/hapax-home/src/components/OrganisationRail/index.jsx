import React from "react";
import OrganisationThumbnail from "../OrganisationThumbnail";
import "./index.css";

export default (props) => {
  const { organisations } = props;
  return (
    <ul className="organisation-rail">
      {organisations.map((organisation) => (
        <OrganisationThumbnail {...organisation} />
      ))}
    </ul>
  );
};
