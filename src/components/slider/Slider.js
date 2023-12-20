import React from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "./Slider.css"; // Your custom styles for the carousel

const Slider = () => {
  return (
    <Carousel
      className="course-carousel"
      interval={3000}
      nextLabel=""
      prevLabel=""
    >
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://placehold.co/600x400?text=First-Slide"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Leading Teams: Developing as a Leader</h3>
          <p>University of Illinois at Urbana-Champaign</p>
        </Carousel.Caption>
      </Carousel.Item>
      {/* Repeat Carousel.Item for each slide */}

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://placehold.co/600x400?text=Second-Slide"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Leading Teams: Developing as a Leader</h3>
          <p>University of Illinois at Urbana-Champaign</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://placehold.co/600x400?text=Third-Slide"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Leading Teams: Developing as a Leader</h3>
          <p>University of Illinois at Urbana-Champaign</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Slider;
