import React from "react";
import NavBar from "./NavBar";
import Hero from "./sections/Hero";
import Main from "./sections/Main";

function PageLayout({ title, info, content }) {
  return (
    <>
      <div>
        <Hero title={title} info={info} />
      </div>
      <div>
        <Main content={content} />
      </div>
    </>
  );
}

export default PageLayout;
