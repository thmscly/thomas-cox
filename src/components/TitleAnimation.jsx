import React from "react";

const title = "Thomas Cox";
const arr = title.split("");

function TitleAnimation() {
  return (
    <div className="">
      <h1 className="animate-titleAnimation">
        {arr.map((x) => {
          return x;
        })}
      </h1>
    </div>
  );
}

export default TitleAnimation;
