import React from "react";
import "./main.css";

const ProgressBar = () => {
  return (
    <div className="progress-bars">
      <progress
        class="nes-progress is-warning progress-bar"
        value="90"
        max="100"
      ></progress>
      <progress
        class="nes-progress is-warning progress-bar"
        value="80"
        max="100"
      ></progress>
      <progress
        class="nes-progress is-warning progress-bar"
        value="70"
        max="100"
      ></progress>
      <progress
        class="nes-progress is-warning progress-bar"
        value="60"
        max="100"
      ></progress>
      <progress
        class="nes-progress is-warning progress-bar"
        value="50"
        max="100"
      ></progress>
      <progress
        class="nes-progress is-warning progress-bar"
        value="40"
        max="100"
      ></progress>
      <progress
        class="nes-progress is-warning progress-bar"
        value="20"
        max="100"
      ></progress>
      <progress
        class="nes-progress is-warning progress-bar"
        value="10"
        max="100"
      ></progress>
      <progress
        class="nes-progress is-warning progress-bar"
        value="9"
        max="100"
      ></progress>
      <progress
        class="nes-progress is-warning progress-bar"
        value="5"
        max="100"
      ></progress>
    </div>
  );
};

export default ProgressBar;
