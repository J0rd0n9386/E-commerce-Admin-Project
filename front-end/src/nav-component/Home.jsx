import React from "react";
import video from "../assets/video.mp4";

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <p>Welcome to the home page</p>
      <video src={video} autoPlay loop muted></video>
    </div>
  );
}

export default Home;
