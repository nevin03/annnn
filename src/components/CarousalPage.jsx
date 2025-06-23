import { Carousel } from "react-bootstrap";

const slides = [
  {
    image: "/images/h1.jpg",
    title: "Most experienced work force",
    description: "We host the best doctors & medical staffs in the state",
  },
  {
    image: "/images/h2.jpg",
    title: "Most Modern Medical Facilities",
    description: "Affordable Technology Driven Medical Diagnostics",
  },
  {
    image: "/images/h3.jpg",
    title: "Specialists for all your medical needs",
    description:
      "Different super Speciality clinics for your complete health care consultation",
  },
];

const CarouselPage = () => {
  return (
    <div className="container my-5">
      <Carousel fade>
        {slides.map((slide, index) => (
          <Carousel.Item key={index}>
            <div className="carousel-image-wrapper">
              <img
                className="d-block w-100"
                src={slide.image}
                alt={slide.title}
              />
              <div className="overlay"></div>
              <div className="carousel-caption">
                <h3>{slide.title}</h3>
                <p>{slide.description}</p>
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselPage;
