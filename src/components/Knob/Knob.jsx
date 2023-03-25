import React from "react";

const Knob = (props) => {
  return (
    <div style={{ border: "2px solid salmon", margin: "10px" }}>
      <h3>This is Knob component</h3>
      <p>Your steps here: {props.steps}</p>
    </div>
  );
};

export default Knob;
