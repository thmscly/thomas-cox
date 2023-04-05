import React from "react";
import PageLayout from "../layouts/PageLayout";
import MetaLogo from "../assets/META.svg";

const metaLogo = (
  <img className="inline-block h-8 w-8" src={MetaLogo} alt="Meta Logo" />
);

const title = "Projects";
const info = "What I've been working on.";
const content = (
  <div className="flex flex-row">
    <div className="basis-1/3">
      <h3> {metaLogo} Meta Certification Capstone</h3>
      <p>
        The Capstone project for Coursera's Meta Front-End Developer
        Professional Certificate.
      </p>
    </div>
    <div className="basis-1/3">
      <h3>Source Code</h3>
      <p>The Repo for this web app.</p>
    </div>
    <div className="basis-1/3">
      <h3>Rachel Cox Art</h3>
      <p>
        Rachel Cox Art An in-progress e-commerce shopping-cart site built with
        React to sell my wife's art. It's deployed with Netlify and will have a
        Stripe integration.Link to repo
      </p>
    </div>
  </div>
);

function Projects() {
  return (
    <div>
      <PageLayout title={title} content={content} info={info} />
    </div>
  );
}

export default Projects;
