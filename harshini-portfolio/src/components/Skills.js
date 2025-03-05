import "../css/Skills.css";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/color-sharp.png";
import aws from "../assets/img/aws.svg";
// Icons from CDN
const icons = {
  java: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  python:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  javascript:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  react:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  firebase:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
};

export const Skills = () => {
  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 3 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Technical Skills</h2>
              <p>
                As a Master's student in Computer Science & Engineering, I have
                developed expertise in multiple programming languages,
                frameworks, databases, and cloud platforms. Below are my key
                skills:
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={2500}
                transitionDuration={600}
                removeArrowOnDeviceType={["tablet", "mobile"]}
                className="owl-carousel owl-theme skill-slider"
              >
                {/* Languages */}
                <div className="item">
                  <div className="progress-circle" data-progress="90">
                    <div className="progress-inner">
                      <img src={icons.java} alt="Java" />
                      <img src={icons.python} alt="Python" />
                      <img src={icons.javascript} alt="JavaScript" />
                    </div>
                  </div>
                  <h5>Languages</h5>
                </div>

                {/* Frameworks */}
                <div className="item">
                  <div className="progress-circle" data-progress="85">
                    <div className="progress-inner">
                      <img src={icons.react} alt="ReactJS" />
                    </div>
                  </div>
                  <h5>Frameworks</h5>
                </div>

                {/* Cloud Platforms */}
                <div className="item">
                  <div className="progress-circle" data-progress="80">
                    <div className="progress-inner">
                      <img src={aws} alt="AWS" />
                      <img src={icons.firebase} alt="Firebase" />
                    </div>
                  </div>
                  <h5>Cloud Platforms</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img
        className="background-image-left"
        src={colorSharp}
        alt="Background"
      />
    </section>
  );
};
