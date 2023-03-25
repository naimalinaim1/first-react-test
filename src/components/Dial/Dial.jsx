import React from 'react';
import Knob from '../Knob/Knob';

const Dial = (props) => {
    return (
        <div style={{border: '2px solid lightblue', margin: '10px'}}>
            <h3>This is Dial component</h3>
            <p>Your Steps count: {props.steps}</p>
            <Knob steps={props.steps}></Knob>
        </div>
    );
};

export default Dial;