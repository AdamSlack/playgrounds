import React from "react";
import OrganisationsRail from "./components/OrganisationRail";
import RepositoryRail from "./components/RepositoryRail";
import pageData from "./data/pageData";

export default function Root(props) {
  return (
    <>
      <h1>Home</h1>
      <section className="pinned-repositories">
        <h2>Pinned Repositories</h2>
        <RepositoryRail repositories={pageData.pinnedRepositories} />
      </section>
      <section className="starred-repositories">
        <h2>Starred Repositories</h2>
        <RepositoryRail repositories={pageData.starredRepositories} />
      </section>
      <section className="organisations">
        <h2>Organisations</h2>
        <OrganisationsRail organisations={pageData.organisations} />
      </section>
    </>
  );
}
