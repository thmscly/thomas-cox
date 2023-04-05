import React from "react";

function Hero({ title, info }) {
  return (
    <div>
      <div>
        <h1>{title}</h1>
      </div>
      <h3>{info}</h3>
    </div>
  );
}

export default Hero;
