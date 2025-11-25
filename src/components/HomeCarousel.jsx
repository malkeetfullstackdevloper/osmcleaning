import React from "react";
import { Carousel } from "react-bootstrap";

function HomeCarousel() {
    return (
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://via.placeholder.com/1200x500" // Replace with your image URL
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First Slide</h3>
              <p>Sample description for the first slide.</p>
            </Carousel.Caption>
          </Carousel.Item>
    
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://via.placeholder.com/1200x500"
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>Second Slide</h3>
              <p>Sample description for the second slide.</p>
            </Carousel.Caption>
          </Carousel.Item>
    
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://via.placeholder.com/1200x500"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Third Slide</h3>
              <p>Sample description for the third slide.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
    );
}

export default HomeCarousel;