import React, { useState } from "react";

function Testimonials() {
  const [currentState, setCurrentState] = useState(0);
  const Testimonials = [
    {
      quote: "Hogwarts is the best wizarding school!",
      author: "Newt scamander",
    },
    {
      quote: "Hogwarts is the safest place after gringotts ofcourse!",
      author: "Hagrid",
    },
    {
      quote: "Hogwarts is my home!",
      author: "Harry potter",
    },
  ];
  const PrevClick = () => {
    setCurrentState(
      (currentState + Testimonials.length - 1) % Testimonials.length
    );
  };
  const NextClick = () => {
    setCurrentState((currentState + 1) % Testimonials.length);
  };
  return (
    <div>
      <div className="test">
        <div className="quotation">{Testimonials[currentState].quote}</div>
        <div className="author">- {Testimonials[currentState].author}</div>
        <div className="btn">
          <button onClick={PrevClick}>Prev</button>
          <button onClick={NextClick}>Next</button>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
