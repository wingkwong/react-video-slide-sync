import React from "react";
import { render } from "react-dom";
import VideoSlideSync from "../../lib";
import "./styles.css";
import { config } from './config'

function Demo() {
  return (
    <div>
      <h1>React Video Slide Sync Demo</h1>
      <VideoSlideSync config={config}/>
    </div>
  );
}

render(<Demo />, document.getElementById("app"));
