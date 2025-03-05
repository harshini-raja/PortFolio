import React, { useState, useEffect } from "react";
import "../css/About.css"; // Ensure this file exists

// Import images
import iPad from "../assets/img/ipad.png"; // Transparent laptop frame
import myPhoto from "../assets/img/photo.png"; // Your actual photo
import stylus from "../assets/img/stylus.png.webp"; // Stylus image

export const About = () => {
  const [hovered, setHovered] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  // Track cursor movement for stylus effect
  useEffect(() => {
    const handleMouseMove = (event) => {
      setCursorPos({
        x: event.clientX,
        y: event.clientY,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="about-section">
      <div className="about-container">
        <h2>About Me</h2>
        <div
          className="laptop-frame"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <img src={iPad} alt="Laptop Frame" className="laptop-image" />

          <img
            src={myPhoto}
            alt="Profile"
            className={`profile-photo ${hovered ? "visible" : ""}`}
          />
        </div>
        <p>
          Hi, I'm a Full Stack Developer passionate about creating scalable and
          user-friendly applications. I specialize in modern web technologies
          and love building interactive UI/UX experiences.
        </p>
      </div>

      {/* Stylus (iPad Pen) */}
      <img
        src={stylus}
        alt="Stylus"
        className="stylus"
        style={{ left: `${cursorPos.x}px`, top: `${cursorPos.y}px` }}
      />
    </section>
  );
};
