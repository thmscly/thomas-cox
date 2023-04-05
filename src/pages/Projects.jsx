import React from "react";
import PageLayout from "../layouts/PageLayout";

const title = "Projects";
const info = "A look into some of the projects I've enjoyed working on.";
const content = (
  <div className="grid grid-cols-3 gap-5">
    <div>
      <h3>Meta Certification Capstone</h3>
      <p>
        The Capstone project for Coursera's Meta Front-End Developer
        Professional Certificate
      </p>
    </div>
    <div>
      <h3>Meta Developer Course Capstone</h3>
      <p>blahblah ablhablha babalhablah ablb lahblblaha blah</p>
    </div>
    <div>
      <h3>Meta Developer Course Capstone</h3>
      <p>blahblah ablhablha babalhablah ablb lahblblaha blah</p>
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
