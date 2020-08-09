import React from "react";

import "./VideoFooter.css";

function VideoFooter() {
  return (
    <div className="videoFooter">
      <div className="videoFooter__text">
        <h3>@cryptokeepto</h3>
        <p>this is a description</p>
      </div>
      <img
        src="https://static.thenounproject.com/png/934821-200.png"
        alt=""
        className="videoFooter__record"
      />
    </div>
  );
}

export default VideoFooter;
