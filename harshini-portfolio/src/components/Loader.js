import React, { useEffect } from "react";
import frame1 from "../assets/img/frame1.svg";
import frame2 from "../assets/img/frame2.svg";
import frame3 from "../assets/img/frame3.svg";
import "./Loader.css";

const Loader = () => {
  useEffect(() => {
    const frames = [frame1, frame2, frame3]; // Add paths to all your SVG frames
    let currentFrame = 0;

    const showNextFrame = () => {
      document.getElementById(
        "loader"
      ).innerHTML = `<img src="${frames[currentFrame]}" alt="Loading...">`;
      currentFrame = (currentFrame + 1) % frames.length;
    };

    const interval = setInterval(showNextFrame, 100); // Adjust the interval as needed
    return () => clearInterval(interval);
  }, []);

  return <div id="loader"></div>;
};

export default Loader;
