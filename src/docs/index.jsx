import React from "react";
import { render } from "react-dom";
import MyComponent from "../../lib";
import "./styles.css";

function Demo() {
  return (
    <div>
      <h1>React Video Slide Sync Demo</h1>
      <MyComponent></MyComponent>
    </div>
  );
}

render(<Demo />, document.getElementById("app"));
