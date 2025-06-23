import { useEffect, useRef, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

const AboutPage = () => {
  const textRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const currentRef = textRef.current; // ✅ Copy to local variable

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef); // ✅ Use local copy
      }
    };
  }, []);

  return (
    <Container className="my-5">
      <Row className="align-items-center">
        {/* Text Content */}
        <Col
          md={6}
          ref={textRef}
          className={`fade-slide-up ${visible ? "visible" : ""}`}
        >
          <h2 className="text-primary">GOVERNMENT MEDICAL COLLEGE, WAYANAD</h2>
          <p>
            Wayanadu Government Medical College is committed to providing
            world-class medical education, innovative research, and exceptional
            patient care. Our mission is to produce highly skilled and
            compassionate healthcare professionals who serve the community with
            integrity and dedication.
          </p>
          <p>
            With state-of-the-art facilities and a dedicated faculty, we strive
            to be a center of excellence in medical education and research.
          </p>
        </Col>

        {/* Image */}
        <Col md={6}>
          <img
            src="/images/about-page-img.jpg"
            alt="About us"
            className="img-fluid rounded shadow"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default AboutPage;
