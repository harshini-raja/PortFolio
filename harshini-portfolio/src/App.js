import React, { useState, useEffect } from "react";
import "./App.css";
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { About } from "./components/About";
import { Chatbot } from "./components/Chatbot";
import "bootstrap/dist/css/bootstrap.min.css";
import stylus from "./assets/img/stylus.png.webp";

function App() {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [prevX, setPrevX] = useState(0);
  const [direction, setDirection] = useState("none");
  const [isVisible, setIsVisible] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    document.title = "Harshini's Portfolio";
  }, []);

  useEffect(() => {
    const cursor = document.querySelector(".custom-cursor");
    let lastTime = performance.now();
    let lastX = 0;

    const handleMouseMove = (event) => {
      const currentTime = performance.now();
      const deltaTime = currentTime - lastTime;
      const deltaX = event.clientX - lastX;
      const speed = Math.abs(deltaX) / deltaTime;

      lastTime = currentTime;
      lastX = event.clientX;

      const currentX = event.clientX;
      const threshold = 5;

      if (Math.abs(currentX - prevX) > threshold) {
        if (currentX < prevX) {
          setDirection("left");
        } else if (currentX > prevX) {
          setDirection("right");
        }
        setPrevX(currentX);
      }

      const offsetX = -15;
      const offsetY = -85;
      const newX = event.clientX + offsetX;
      const newY = event.clientY + offsetY;

      setCursorPos({ x: newX, y: newY });

      // 💡 Move cursor and tilt dynamically
      if (cursor) {
        let tilt;
        if (direction === "left") {
          tilt = speed > 0.5 ? 30 : 35; // Fast move = lean more
        } else if (direction === "right") {
          tilt = speed > 0.5 ? 50 : 55;
        } else {
          tilt = 45; // default
        }
        cursor.style.transform = `translate(${newX}px, ${newY}px) rotate(${tilt}deg) scale(${
          isClicking ? 0.95 : 1
        })`;
        // ✨ Clicking => squish, but keep rotation
        if (isClicking) {
          cursor.style.transform = `rotate(${tilt}deg) translate(-15%, -85%) scale(0.95)`;
        } else {
          cursor.style.transform = `rotate(${tilt}deg) translate(-15%, -85%) scale(1)`;
        }
      }
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const handleElementHover = (event) => {
      const isInteractive = event.target.matches(
        "button, a, [role='button'], input, textarea, .interactive"
      );
      setIsHovering(isInteractive);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseover", handleElementHover);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseover", handleElementHover);
    };
  }, [prevX, direction, isClicking]);

  return (
    <div className="App">
      <NavBar />
      <Banner />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      <Chatbot />
      <div
        className={`custom-cursor ${isVisible ? "visible" : ""} ${
          direction === "left" ? "left" : "right"
        } ${isClicking ? "clicking" : ""} ${isHovering ? "hovering" : ""}`}
        style={{
          left: `${cursorPos.x}px`,
          top: `${cursorPos.y}px`,
        }}
      >
        <img src={stylus} alt="" draggable="false" />
      </div>
    </div>
  );
}

export default App;
