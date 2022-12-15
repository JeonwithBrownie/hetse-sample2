import React from "react";
import "./main.css";

const ProgressBar = () => {
  return (
    <div className="realtime-order-texts">
      <div className="">
        <progress
          class="nes-progress is-warning progress-bar"
          value="95"
          max="100"
        ></progress>
        <progress
          class="nes-progress is-warning"
          value="80"
          max="100"
        ></progress>
        <progress
          class="nes-progress is-warning"
          value="70"
          max="100"
        ></progress>
        <progress
          class="nes-progress is-warning"
          value="60"
          max="100"
        ></progress>
        <progress
          class="nes-progress is-warning"
          value="50"
          max="100"
        ></progress>
        <progress
          class="nes-progress is-warning"
          value="40"
          max="100"
        ></progress>
        <progress
          class="nes-progress is-warning"
          value="35"
          max="100"
        ></progress>
        <progress
          class="nes-progress is-warning"
          value="30"
          max="100"
        ></progress>
        <progress
          class="nes-progress is-warning"
          value="22"
          max="100"
        ></progress>
        <progress
          class="nes-progress is-warning"
          value="10"
          max="100"
        ></progress>
      </div>
    </div>
  );
};

export default ProgressBar;
