import { Container, Row, Col, Card } from "react-bootstrap";

const newsItems = [
  {
    title: "GMCT - E GRANTS INITIAL FUND - LIST NUMBER 28",
    subtitle: "KINDLY PUBLISH ON THE WEBSITE - REG.",
    icon: "bi-cash-stack",
  },
  {
    title: "GMCT - NOTICE",
    subtitle: "INVITING APPLICATIONS FOR THE POST OF NAJR",
    icon: "bi bi-folder2-open",
  },
  {
    title: "Walk in Interview",
    subtitle: "Walk in Interview for various medical positions.",
    icon: "bi-person-walking",
  },
];

const NewsUpdates = () => {
  return (
    <Container className="my-5">
      {/* Heading with newspaper icon */}
      <div className="d-flex align-items-center mb-4">
        <i className="bi bi-newspaper fs-3 text-primary me-2"></i>
        <h3 className="mb-0">News & Updates</h3>
      </div>

      {/* News Cards */}
      <Row>
        {newsItems.map((item, index) => (
          <Col key={index} md={4} className="mb-4">
            <Card className="h-100 shadow-sm news-card hover-shadow">
              <Card.Body>
                <div className="d-flex align-items-center mb-3">
                  <i className={`bi ${item.icon} fs-4 text-warning me-2`}></i>
                  <h5 className="mb-0">{item.title}</h5>
                </div>
                <Card.Text>{item.subtitle}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default NewsUpdates;
