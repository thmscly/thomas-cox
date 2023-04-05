import React from "react";
import PageLayout from "../layouts/PageLayout";
import { Link } from "react-router-dom";

const cursor = (
  <div className="animate-[pulse_1s_ease-in-out_infinite] inline-block w-5 h-10 bg-green-600 self-center justify-self-end" />
);

const title = <div>{cursor} Thomas Cox</div>;
const info = "Meta-certified Front-End Engineer.";

const content = (
  <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-3 gap-4 m-5">
    <div>
      <Link to="/about">
        <h3>About</h3>
        <p>
          Who am I? That's a toughie. Click here and I'll walk you through my
          coding journey.
        </p>
      </Link>
    </div>
    <div>
      <Link to="/projects">
        <h3>Projects</h3>
        <p>
          Click here to find links, GitHub repos, and see what I'm working on.
        </p>
      </Link>
    </div>
    <div>
      <Link to="/contact">
        <h3>Socials</h3>
        <p>Click here to find me on the Interwebs.</p>
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
