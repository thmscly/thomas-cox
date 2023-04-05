import React from "react";
import PageLayout from "../layouts/PageLayout";
import { Link } from "react-router-dom";

const title = "T.C.Cox";
const info = "Hi. I'm T.C., and I'm a Meta-certified Front-End Engineer.";

const content = (
  <div className="grid grid-flow-col">
    <div>
      <Link to="/about">
        <h4>About</h4>
      </Link>
    </div>
    <div>
      <Link to="/projects">
        <h4>Projects</h4>
      </Link>
    </div>
    <div>
      <Link to="/contact">
        <h4>Socials</h4>
      </Link>
    </div>
  </div>
);

function Home() {
  return (
    <>
      <PageLayout title={title} info={info} content={content} />
    </>
  );
}

export default Home;
