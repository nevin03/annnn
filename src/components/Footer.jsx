import { Container, Row, Col } from "react-bootstrap";
import { BsEnvelopeAt, BsTelephoneFill, BsPinMap } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4 mt-5">
      <Container>
        <Row>
          <Col md={6}>
            <h5>Government Medical College, Wayanad</h5>
            <p>Mananthavady, Wayanad, Kerala</p>
          </Col>
          <Col md={6}>
            <ul className="list-unstyled">
              <li>
                <BsEnvelopeAt className="me-2 text-warning" />
                Email: supd.dhmtdy@gmail.com
              </li>
              <li>
                <BsTelephoneFill className="me-2 text-warning" />
                Phone: 04935 240264
              </li>
              <li>
                <BsPinMap className="me-2 text-warning" />
                Pincode: 670645
              </li>
            </ul>
          </Col>
        </Row>
        <hr className="border-light" />
        <p className="text-center mb-0 small">
          &copy; {new Date().getFullYear()} Government Medical College Wayanad.
          All Rights Reserved.
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
