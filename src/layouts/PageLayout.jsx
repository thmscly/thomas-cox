import React from "react";
import NavBar from "./NavBar";
import Hero from "./sections/Hero";
import Main from "./sections/Main";

function PageLayout({ title, info, content }) {
  return (
    <div className="grid grid-row-auto gap-10">
      <div>
        <Hero title={title} info={info} />
      </div>
      <hr />
      <div>
        <Main content={content} />
      </div>
    </div>
  );
}

export default PageLayout;
