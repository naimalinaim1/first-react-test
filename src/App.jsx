import { useState } from "react";
import "./App.css";
import Device from "./components/Device/Device";
import Knob from "./components/Knob/Knob";
import Watch from "./components/Watch/Watch";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Knob steps="450"></Knob>
      <Device name="Uphone" price="13000"></Device>
      <Device name="Samsung" price="10000"></Device>
      <Watch></Watch>

      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
    </div>
  );
}

export default App;
