import React from "react";
import NavBar from "./NavBar";
import Hero from "./sections/Hero";
import Main from "./sections/Main";

function PageLayout({ title, info, content, image }) {
  return (
    <>
      <div className="grid grid-row-auto gap-5">
        <Hero title={title} info={info} image={image} />
      </div>
      <hr />
      <div>
        <Main content={content} />
      </div>
    </>
  );
}

export default PageLayout;
