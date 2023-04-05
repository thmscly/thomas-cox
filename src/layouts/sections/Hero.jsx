import React from "react";

function Hero({ title, info }) {
  return (
    <div className="grid gap-5">
      <div>
        <h1>{title}</h1>
      </div>
      <h3>{info}</h3>
    </div>
  );
}

export default Hero;
