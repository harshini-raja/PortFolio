import React, { useState, useEffect, useRef } from "react";
import "../css/Projects.css";
import kafka from "../assets/img/kafka-architecture-animation.svg";
import FRS from "../assets/img/FRS.png";
import Facebook from "../assets/img/FSSentiment.png";
import dev from "../assets/img/dev-docs-search.png";
import AWS from "../assets/img/ai-resume-scanner.svg";

// Import tech icons
import androidIcon from "../assets/img/android.png";
import nodeIcon from "../assets/img/node.svg";
import figmaIcon from "../assets/img/figma.png";
import sqliteIcon from "../assets/img/sqlite.png";
import tensorflowIcon from "../assets/img/tensorflow.svg";
import streamlitIcon from "../assets/img/streamlit.svg";
import flaskIcon from "../assets/img/flask.svg";
import expressIcon from "../assets/img/expressjs.png";
import html5Icon from "../assets/img/html5.png";
import cssIcon from "../assets/img/css.png";
import mongoIcon from "../assets/img/mongo.png";
import dockerIcon from "../assets/img/docker.svg";
import flutterIcon from "../assets/img/flutter.svg";
import reactIcon from "../assets/img/react.svg";
import springBootIcon from "../assets/img/springboot.svg";
import firebaseIcon from "../assets/img/firebase.svg";

const allSkills = [
  { label: "Amplify", icon: "Amplify.svg", isPublicIcon: true },
  { label: "Android Studio", icon: androidIcon },
  { label: "NodeJS", icon: nodeIcon },
  { label: "API Gateway", icon: "API Gateway.svg", isPublicIcon: true },
  { label: "EC2", icon: "EC2.svg", isPublicIcon: true },
  { label: "Figma", icon: figmaIcon },
  { label: "SQLite", icon: sqliteIcon },
  { label: "Java", icon: "java.svg", isPublicIcon: true },
  { label: "JavaScript", icon: "javascript.svg", isPublicIcon: true },
  { label: "Lambda", icon: "Lambda.svg", isPublicIcon: true },
  { label: "Python", icon: "python.svg", isPublicIcon: true },
  { label: "SNS", icon: "Simple Notification Service.svg", isPublicIcon: true },
  { label: "S3", icon: "Simple Storage Service.svg", isPublicIcon: true },
  { label: "TensorFlow", icon: tensorflowIcon },
  { label: "Textract", icon: "Textract.svg", isPublicIcon: true },
  { label: "Streamlit", icon: streamlitIcon },
  { label: "Flask", icon: flaskIcon },
  { label: "ExpressJS", icon: expressIcon },
  { label: "HTML5", icon: html5Icon },
  { label: "CSS", icon: cssIcon },
  { label: "MongoDB", icon: mongoIcon },
  { label: "Docker", icon: dockerIcon },
  { label: "Flutter", icon: flutterIcon },
  { label: "React", icon: reactIcon },
  { label: "Spring Boot", icon: springBootIcon },
  { label: "Firebase", icon: firebaseIcon },
];

export const Projects = () => {
  const [currentProject, setCurrentProject] = useState(0);
  const [popping, setPopping] = useState(false);
  const [transitioning, setTransitioning] = useState(false);
  const particlesRef = useRef([]);
  const rotaryDialRef = useRef(null);

  useEffect(() => {
    setPopping(true);
    setTransitioning(true);

    const popTimer = setTimeout(() => {
      setPopping(false);
    }, 600);

    const transitionTimer = setTimeout(() => {
      setTransitioning(false);
    }, 300);

    return () => {
      clearTimeout(popTimer);
      clearTimeout(transitionTimer);
    };
  }, [currentProject]);

  // Initialize particles
  useEffect(() => {
    if (!rotaryDialRef.current) return;

    // Create particles
    particlesRef.current = Array.from({ length: 20 }).map(() => ({
      x: Math.random() * 700,
      y: Math.random() * 700,
      size: Math.random() * 3 + 1,
      speedX: (Math.random() - 0.5) * 2,
      speedY: (Math.random() - 0.5) * 2,
      opacity: Math.random() * 0.5 + 0.2,
      element: document.createElement("div"),
    }));

    // Add particles to the DOM
    const particlesContainer = document.createElement("div");
    particlesContainer.className = "particles-container";
    rotaryDialRef.current.appendChild(particlesContainer);

    particlesRef.current.forEach((particle) => {
      particle.element.className = "particle";
      particle.element.style.width = `${particle.size}px`;
      particle.element.style.height = `${particle.size}px`;
      particle.element.style.opacity = particle.opacity;
      particlesContainer.appendChild(particle.element);
    });

    // Animate particles
    const animateParticles = () => {
      particlesRef.current.forEach((particle) => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        // Reset position if outside container
        if (
          particle.x < 0 ||
          particle.x > 700 ||
          particle.y < 0 ||
          particle.y > 700
        ) {
          particle.x = 350 + (Math.random() - 0.5) * 100;
          particle.y = 350 + (Math.random() - 0.5) * 100;

          // Set direction away from center
          const angle = Math.atan2(particle.y - 350, particle.x - 350);
          particle.speedX = Math.cos(angle) * (Math.random() * 2 + 1);
          particle.speedY = Math.sin(angle) * (Math.random() * 2 + 1);
        }

        particle.element.style.transform = `translate(${particle.x}px, ${particle.y}px)`;
      });

      requestAnimationFrame(animateParticles);
    };

    const animationId = requestAnimationFrame(animateParticles);

    return () => {
      cancelAnimationFrame(animationId);
      if (rotaryDialRef.current) {
        const container = rotaryDialRef.current.querySelector(
          ".particles-container"
        );
        if (container) rotaryDialRef.current.removeChild(container);
      }
    };
  }, []);

  const projects = [
    {
      title: "Kafka - Inspired - Distributed Message Queue",
      type: "DISTRIBUTED SYSTEM",
      description:
        "Designed and built a Kafka-style distributed message queue system from scratch using Java for backend processing and React for an interactive monitoring dashboard. The system supports broker-based message routing, leader election, topic partitioning, and log replication — all mimicking the architectural principles of Apache Kafka",
      image: kafka,
      tech: [
        "Java",
        "Maven",
        "Docker",
        "JavaScript",
        "React",
        "Spring Boot",
        "EC2",
      ],
      link: "https://github.com/harshini-raja/Kafka-Inspired-DistributedMessageQueue",
    },
    {
      title: "Facial Recognition System for a classroom setting",
      type: "ML SYSTEM",
      description:
        "A facial recognition system designed to automate student classification and identification in a classroom. Utilized Haar Cascade Classifiers for face detection and integrated LBPH, PCA, and LDA for effective feature extraction and dimensionality reduction.The system leverages a suite of machine learning models—including SVM, KNN, Logistic Regression, and Ensemble methods.",
      image: FRS,
      tech: ["TensorFlow", "Python", "Jupyter", "Google Colab", "GitHub"],
      link: "https://github.com/harshini-raja/FacialRecognitionProject",
    },
    {
      title: "AWS - AI Resume Scanner",
      type: "ClOUD SYSTEM",
      description:
        "An AI ResumeScanner using AWS services like Lambda, S3, Textract, SNS, API Gateway, and Amplify. The system allows resume uploads, extracts and cleans text data by removing stopwords, and compares key terms to job descriptions for efficient matching. A scalable, secure serverless architecture was built using Amplify for deployment and authentication.",
      image: AWS,
      tech: [
        "Lambda",
        "S3",
        "API Gateway",
        "Amplify",
        "Textract",
        "SNS",
        "EC2",
      ],
      link: "https://github.com/harshini-raja/AI-Resume-Scanner",
    },
    {
      title: "Facebook Sentiment Analyser System",
      type: "ML SYSTEM",
      description:
        "A lexicon-enhanced, ML-powered sentiment analysis tool for social media posts.Built a web-based application that classifies Facebook posts into Positive, Negative, or Neutral sentiments while detecting nuanced emotional tones like Joy, Anger, or Calm. The project combines both machine learning (Logistic Regression + TF-IDF) and domain lexicons to improve the accuracy of predictions.",
      image: Facebook,
      tech: [
        "TensorFlow",
        "Python",
        "Jupyter",
        "Google Colab",
        "GitHub",
        "Streamlit",
        "Flask",
      ],
      link: "https://github.com/harshini-raja/FacebookSentimentalAnalysis",
    },
    {
      title: "Multi-Tech Semantic Search Engine",
      type: "ML SYSTEM",
      description:
        "A Multi-Tech Semantic Engine is an NLP-driven search system built with Flask and Streamlit.It applies algorithms like TF-IDF, cosine similarity, and tokenization to understand query intent to retrieve tech documents based on semantic meaning and vector space relevance.",
      image: dev,
      tech: [
        "TensorFlow",
        "Python",
        "Jupyter",
        "Google Colab",
        "GitHub",
        "Streamlit",
        "Flask",
      ],
      link: "https://github.com/harshini-raja/Multi-Tech-Semantic-SearchEngine",
    },
    {
      title: "Bilingual Math for Elementary School Kids",
      type: "MOBILE APP",
      description:
        "A community platform designed exclusively for students at my college (MBCET). It enables users to find friend matches based on shared interests, create and join projects, and engage in collaborative chats and topic-based community groups.",
      image: AWS,
      tech: ["Flutter", "Dart", "Firebase", "Figma", "Android Studio"],
      link: "https://github.com/hraja5/Counting_and_Sequencing/tree/analytics_version1",
    },
  ];

  const calculatePosition = (index, total, radius = 350) => {
    const angle = (2 * Math.PI * index) / total;
    return {
      x: Math.cos(angle) * radius,
      y: Math.sin(angle) * radius,
      angle: angle * (180 / Math.PI), // convert to degrees for transform
    };
  };

  const renderConnectorLines = () => {
    return allSkills.map((skill, index) => {
      const position = calculatePosition(index, allSkills.length);
      const isActive = projects[currentProject].tech.includes(skill.label);
      const length = Math.sqrt(
        position.x * position.x + position.y * position.y
      );
      const angle = Math.atan2(position.y, position.x) * (180 / Math.PI);

      return isActive ? (
        <div
          key={`connector-${skill.label}`}
          className={`connector-line ${isActive ? "active" : ""}`}
          style={{
            width: `${length}px`,
            transform: `rotate(${angle}deg)`,
          }}
        />
      ) : null;
    });
  };

  const navigateProject = (direction) => {
    setTransitioning(true);
    setTimeout(() => {
      setCurrentProject((prev) =>
        direction === "next"
          ? (prev + 1) % projects.length
          : (prev - 1 + projects.length) % projects.length
      );
    }, 300);
  };

  return (
    <section className="projects-section" id="projects">
      <h2 className="projects-title-header">Projects</h2>
      <div className="projects-container">
        <div className="iphone-container">
          <div className="iphone-notch">
            <div className="notch-camera"></div>
            <div className="notch-speaker"></div>
          </div>
          <div className={`iphone-screen ${transitioning ? "changing" : ""}`}>
            <div className="project-content">
              <span className="project-type">
                {projects[currentProject].type}
              </span>
              <h3 className="project-title">
                {projects[currentProject].title}
              </h3>
              <p className="project-description">
                {projects[currentProject].description}
              </p>
              <a
                href={projects[currentProject].link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                View Project
              </a>
            </div>
            <div className="navigation-buttons">
              <button
                className="nav-button"
                onClick={() => navigateProject("prev")}
              >
                ←
              </button>
              <button
                className="nav-button"
                onClick={() => navigateProject("next")}
              >
                →
              </button>
            </div>
          </div>
          <div className="iphone-home-button"></div>
        </div>
        <div className="rotary-dial-wrapper">
          <div className="rotary-dial-container" ref={rotaryDialRef}>
            <div className="rotary-dial">
              {renderConnectorLines()}
              <div className={`orbit-container ${popping ? "popping" : ""}`}>
                {allSkills.map((skill, index) => {
                  const position = calculatePosition(index, allSkills.length);
                  const isActive = projects[currentProject].tech.includes(
                    skill.label
                  );

                  return (
                    <div
                      key={skill.label}
                      className={`orbit ${isActive ? "active" : ""}`}
                      style={{
                        transform: `translate(${position.x}px, ${position.y}px)`,
                      }}
                    >
                      <div
                        className={`tech-icon ${isActive ? "active" : ""}`}
                        data-name={skill.label}
                      >
                        <img
                          src={
                            skill.isPublicIcon
                              ? `/icons/${skill.icon}`
                              : skill.icon
                          }
                          alt={skill.label}
                          className="skill-icon"
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="project-frame-container">
            <div className="cosmic-ring"></div>
            <div className="floating-project-preview">
              <img
                src={projects[currentProject].image}
                alt="Project Preview"
                className="project-preview-image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
