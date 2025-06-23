import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const MainNavbar = () => {
  return (
    <Navbar bg="primary" variant="dark" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand as={Link} to="/">
          Wayanad Government Medical college{" "}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/faculty">
              Faculty
            </Nav.Link>
            <Nav.Link as={Link} to="/department">
              Department
            </Nav.Link>
            <Nav.Link as={Link} to="/facilities">
              Facilities
            </Nav.Link>
            <Nav.Link as={Link} to="/opd-schedule">
              OPD Schedule
            </Nav.Link>
            <Nav.Link as={Link} to="/news">
              News
            </Nav.Link>
            <Nav.Link as={Link} to="/articles">
              Articles
            </Nav.Link>
            <Nav.Link as={Link} to="/rti">
              RTI
            </Nav.Link>
            <Nav.Link as={Link} to="/tenders">
              Tenders
            </Nav.Link>
            <Nav.Link as={Link} to="/contact">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MainNavbar;
