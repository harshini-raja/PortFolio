import { Container, Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/header_port.svg";
import "animate.css";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = [
    "Full Stack Developer",
    "System Design Enthusiast",
    "Cloud Practitioner",
  ];
  const [text, setText] = useState("");
  const period = 2000;
  const [delta, setDelta] = useState(300 - Math.random() * 100);

  useEffect(() => {
    const ticker = setInterval(() => {
      tick();
    }, delta);

    return () => clearInterval(ticker);
  }, [text, delta]);

  const tick = () => {
    const i = loopNum % toRotate.length;
    const fullText = toRotate[i];
    const updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prev) => prev / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum((prev) => prev + 1);
      setDelta(500);
    }
  };

  return (
    <section className="banner" id="home">
      <div className="shooting-star"></div>
      <div className="shooting-star"></div>
      <div className="shooting-star"></div>

      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline animate__animated animate__fadeInDown">
              Welcome to My Developer Portfolio
            </span>
            <h1 className="animate__animated animate__fadeInUp">
              {`Hi, I'm Harshini Raja, `}
              <span className="txt-rotate" data-period="1000">
                <span className="wrap">{text}</span>
              </span>
            </h1>

            <button
              className="connect-btn animate__animated animate__pulse animate__infinite"
              onClick={() => console.log("Connect clicked")}
              aria-label="Connect with Harshini"
            >
              Let's Connect <ArrowRightCircle size={25} />
            </button>
          </Col>
          <Col
            xs={12}
            md={6}
            xl={5}
            className="animate__animated animate__zoomIn"
          >
            <img
              src={headerImg}
              alt="Illustration of a developer"
              className="img-fluid"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
