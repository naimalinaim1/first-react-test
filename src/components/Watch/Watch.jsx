import React, { useEffect, useState } from "react";
import Dial from "../Dial/Dial";

const Watch = () => {
  const [steps, setSteps] = useState(0);
  const increaseStep = () => {
    setSteps(steps + 1);
  };

  useEffect(() => {
    console.log(steps);
  }, [steps]);

  return (
    <div style={{ border: "2px solid darkgoldenrod", padding: "10px" }}>
      <h2>This is my smart Watch!</h2>
      <p>Steps: {steps}</p>
      <button onClick={increaseStep}>De Dour......</button>
      <Dial steps={steps}></Dial>
    </div>
  );
};

export default Watch;
