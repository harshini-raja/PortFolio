import "../css/Skills.css";
import React, { useState } from "react";
import { Container } from "react-bootstrap";
import TrackVisibility from "react-on-screen";

// Import your skill icons here
import reactIcon from "../assets/img/react.png";
import nodeIcon from "../assets/img/nodejs.png";
import pythonIcon from "../assets/img/pythonimg.png";
import javaIcon from "../assets/img/java.svg";
import awsIcon from "../assets/img/AWS.png";
import mongodbIcon from "../assets/img/mongo.png";
import htmlIcon from "../assets/img/html5.png";
import cssIcon from "../assets/img/css.png";
import jsIcon from "../assets/img/js.png";
import dartIcon from "../assets/img/dart.png";
import streamlitIcon from "../assets/img/streamlit.svg";
import androidIcon from "../assets/img/android.png";
import figmaIcon from "../assets/img/figma.png";
import expressIcon from "../assets/img/expressjs.png";
import flaskIcon from "../assets/img/flask.svg";
import firebaseIcon from "../assets/img/firebase.svg";
import tensorflowIcon from "../assets/img/tensorflow.svg";
import sqliteIcon from "../assets/img/sqlite.png";
import gitIcon from "../assets/img/git.png";
import githubIcon from "../assets/img/github.png";
import dockerIcon from "../assets/img/docker.svg";
import springBootIcon from "../assets/img/springboot.svg";
import sqlIcon from "../assets/img/sql.png";
import flutterIcon from "../assets/img/flutter.svg";

export const Skills = () => {
  const [currentScreen, setCurrentScreen] = useState(0);

  const screens = [
    {
      title: "Front-End",
      sections: [
        {
          title: "Languages",
          items: [
            { name: "HTML5", icon: htmlIcon },
            { name: "CSS", icon: cssIcon },
            { name: "JavaScript", icon: jsIcon },
            { name: "Dart", icon: dartIcon },
          ],
        },
        {
          title: "Frameworks & Libraries",
          items: [
            { name: "ReactJS", icon: reactIcon },
            { name: "Streamlit", icon: streamlitIcon },
            { name: "Flutter", icon: flutterIcon },
            { name: "Android Studio", icon: androidIcon },
            { name: "Figma", icon: figmaIcon },
          ],
        },
      ],
    },
    {
      title: "Back-End",
      sections: [
        {
          title: "Languages",
          items: [
            { name: "Node.js", icon: nodeIcon },
            { name: "Python", icon: pythonIcon },
            { name: "Java", icon: javaIcon },
            { name: "SQL", icon: sqlIcon },
          ],
        },
        {
          title: "Frameworks",
          items: [
            { name: "Express.js", icon: expressIcon },
            { name: "Flask", icon: flaskIcon },
            { name: "Firebase", icon: firebaseIcon },
            { name: "TensorFlow", icon: tensorflowIcon },
            { name: "Spring Boot", icon: springBootIcon },
          ],
        },
      ],
    },
    {
      title: "Databases & CI/CD",
      sections: [
        {
          title: "Databases",
          items: [
            { name: "MongoDB", icon: mongodbIcon },
            { name: "MySQL", icon: sqlIcon },
            { name: "SQLite", icon: sqliteIcon },
          ],
        },
        {
          title: "CI/CD & Version Control",
          items: [
            { name: "Git", icon: gitIcon },
            { name: "GitHub", icon: githubIcon },
          ],
        },
      ],
    },
    {
      title: "DevOps & Cloud",
      sections: [
        {
          title: "Cloud Platforms",
          items: [{ name: "AWS", icon: awsIcon }],
        },
        {
          title: "Containers & Orchestration",
          items: [{ name: "Docker", icon: dockerIcon }],
        },
      ],
    },
  ];

  const handleSwipe = (direction) => {
    if (direction === "right" && currentScreen > 0) {
      setCurrentScreen(currentScreen - 1);
    } else if (direction === "left" && currentScreen < screens.length - 1) {
      setCurrentScreen(currentScreen + 1);
    }
  };

  return (
    <section className="skill" id="skills">
      <Container>
        <div className="skill-bx">
          <h2>Technical Skills</h2>
          <TrackVisibility>
            {({ isVisible }) => (
              <div
                className={isVisible ? "animate__animated animate__fadeIn" : ""}
              >
                <div className="ipad-container">
                  <div className="device-notch">
                    <div className="camera-dot"></div>
                  </div>
                  <div className="ipad-screen">
                    <div
                      className="screen-content"
                      style={{
                        transform: `translateX(-${currentScreen * 25}%)`,
                      }}
                    >
                      {screens.map((screen, index) => (
                        <div key={index} className="skill-screen">
                          <h3 className="screen-title">{screen.title}</h3>
                          {screen.sections.map((section, sectionIndex) => (
                            <div key={sectionIndex} className="skill-section">
                              <h4 className="section-title">{section.title}</h4>
                              <div className="app-grid">
                                {section.items.map((item, itemIndex) => (
                                  <div key={itemIndex} className="app-icon">
                                    <img src={item.icon} alt={item.name} />
                                    <div className="app-name">{item.name}</div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      ))}
                    </div>
                    <div className="navigation-container">
                      <button
                        className={`nav-btn ${
                          currentScreen === 0 ? "disabled" : ""
                        }`}
                        onClick={() => handleSwipe("right")}
                      >
                        ←
                      </button>
                      <div className="screen-dots">
                        {screens.map((_, index) => (
                          <div
                            key={index}
                            className={`dot ${
                              currentScreen === index ? "active" : ""
                            }`}
                          />
                        ))}
                      </div>
                      <button
                        className={`nav-btn ${
                          currentScreen === screens.length - 1 ? "disabled" : ""
                        }`}
                        onClick={() => handleSwipe("left")}
                      >
                        →
                      </button>
                    </div>
                  </div>

                  <div className="home-button"></div>
                </div>
              </div>
            )}
          </TrackVisibility>
        </div>
      </Container>
    </section>
  );
};
