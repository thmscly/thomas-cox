import React from "react";

function Hero({ title, info }) {
  return (
    <>
      <div>
        <h1>{title}</h1>
      </div>
      <div>
        <p>{info}</p>
      </div>
    </>
  );
}

export default Hero;
