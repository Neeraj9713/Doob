import React from "react";
import Typewriter from "typewriter-effect";

function SimpleTypewriter() {
  return (
    <div>
      <h1>
        Welcome to{" "}
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString("Hello World!")
              .pauseFor(2500)
              .deleteAll()
              .typeString("Creative Minds")
              .start();
          }}
        />
      </h1>
    </div>
  );
}

export default SimpleTypewriter;
