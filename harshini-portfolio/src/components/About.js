import React, { useState, useEffect } from "react";
import "../css/About.css"; // Ensure this file exists

// Import images
import myPhoto from "../assets/img/photo.jpeg"; // Your actual photo

export const About = () => {
  const [hovered, setHovered] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [prevX, setPrevX] = useState(0);
  const [direction, setDirection] = useState("none"); // 'left' or 'right'
  const [showContent, setShowContent] = useState("none"); // 'image' or 'text'

  // Track cursor movement for stylus effect and direction
  useEffect(() => {
    const handleMouseMove = (event) => {
      const currentX = event.clientX;
      const threshold = 5; // Minimum movement threshold to trigger direction change

      // Only change direction if movement is greater than threshold
      if (Math.abs(currentX - prevX) > threshold) {
        if (currentX < prevX) {
          setDirection("left");
          setShowContent("text");
        } else if (currentX > prevX) {
          setDirection("right");
          setShowContent("image");
        }
        setPrevX(currentX);
      }

      setCursorPos({
        x: currentX,
        y: event.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [prevX]);

  return (
    <section className="about-section">
      <div className="about-container">
        <h2 className="about-title">About Me</h2>
        <div
          className="device-frame"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => {
            setHovered(false);
            setShowContent("none");
            setDirection("none");
          }}
        >
          {/* Device Frame Elements */}
          <div className="device-screen">
            <div className="device-notch"></div>
            {/* Content Container */}
            <div className="content-container">
              {/* Profile Image */}
              <img
                src={myPhoto}
                alt="Profile"
                className={`profile-photo ${
                  showContent === "image" ? "visible" : ""
                }`}
              />

              {/* About Text */}
              <div
                className={`about-text ${
                  showContent === "text" ? "visible" : ""
                }`}
              >
                <h3>Full Stack Developer</h3>

                <div className="text-block">
                  <h4>Cloud & Backend</h4>
                  <p>
                    Experienced in AWS cloud services (EC2, S3, Lambda,
                    DynamoDB) and containerized deployments with Docker.
                    Specializing in scalable distributed systems and
                    microservices architecture.
                  </p>
                </div>

                <div className="text-block">
                  <h4>Full Stack Development</h4>
                  <p>
                    Proficient in Java, Python, JavaScript, and React ecosystem.
                    Building robust backend systems and intuitive frontend
                    experiences with modern web technologies.
                  </p>
                </div>

                <div className="text-block">
                  <h4>AI & Machine Learning</h4>
                  <p>
                    Implementing ML solutions using TensorFlow and PyTorch.
                    Focused on NLP, LLMs, and multimodal AI for next-generation
                    applications.
                  </p>
                </div>

                <div className="expertise-grid">
                  <div className="expertise-item">
                    🚀 Full Stack Development
                  </div>
                  <div className="expertise-item">🎨 NLP & Semantic Search</div>
                  <div className="expertise-item">☁️ Cloud Architecture</div>
                  <div className="expertise-item">🤖 AI/ML Integration</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className="avoid-text">
          Hi, I'm a Full Stack Developer passionate about creating scalable and
          user-friendly applications. I specialize in modern web technologies
          and love building interactive UI/UX experiences.
        </p>
      </div>
    </section>
  );
};
