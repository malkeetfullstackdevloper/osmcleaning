import React from "react";
import Slider from "react-slick";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.css";
import CustomNavbar from "./Navbar";
import ContactForm from "./ContactForm";
import Footer from "./Footer";

const CustomPrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-arrow left-arrow`}
      style={{ ...style, display: "block", right: "40px", zIndex: "10" }}
      onClick={onClick}
    >
      <FaChevronLeft size={20} />
    </div>
  );
};

const CustomNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-arrow right-arrow`}
      style={{ ...style, display: "block", right: "10px", zIndex: "10" }}
      onClick={onClick}
    >
      <FaChevronRight size={20} />
    </div>
  );
};

const ContactPage = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };
  

  return (
    <>
      <CustomNavbar />
      <Container className="contact-us">
        <Row className="g-4">
          <Col lg={6} md={12}>
            <div className="contact-content">
              <h1>Get in Touch</h1>
              <p>
              Ready to schedule a regular clean, explore our specialised services, or need expert advice for a unique cleaning challenge? We’re here to help. Our friendly team is dedicated to providing quick, personalised support every step of the way.
              </p>
              <p>
              Simply fill out the form with your details and let us know how we can assist. From first contact to final sparkle, experience the Osm Cleaning difference.
              </p>
            </div>
          </Col>
          <Col lg={6} md={12}>
            {/* <Form className="contact-us-form">
              <Form.Group className="mb-3">
                <Form.Control type="text" placeholder="First name *" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control type="text" placeholder="Last name *" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control type="email" placeholder="Email address *" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control as="textarea" rows={3} placeholder="Message" />
              </Form.Group>
              <Button variant="success" type="submit">
                Contact Now
              </Button>
            </Form> */}
            <ContactForm />
          </Col>
        </Row>
      </Container>

      {/* Testimonials Section */}
      <section className="testimonal">
        <Container className="mw-100">
          <Row className="align-items-center">
            <Col md={5} className="bg-div">
            <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium icon" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="FormatQuoteRoundedIcon"><path d="M7.17 17c.51 0 .98-.29 1.2-.74l1.42-2.84c.14-.28.21-.58.21-.89V8c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h2l-1.03 2.06c-.45.89.2 1.94 1.2 1.94m10 0c.51 0 .98-.29 1.2-.74l1.42-2.84c.14-.28.21-.58.21-.89V8c0-.55-.45-1-1-1h-4c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h2l-1.03 2.06c-.45.89.2 1.94 1.2 1.94"></path></svg>
              <h2>What Our Customers Are Saying</h2>
            </Col>

            <Col md={7} className="testimonal-slider">
              <Slider {...settings}>
                <div className="slide">
                  <p>
                    "What sets Osm Cleaning apart is their strong commitment to
                    delivering outstanding results. They take the time to understand their
                    clients’ specific needs and tailor their cleaning approach
                    accordingly. I was amazed by how immaculate the College looked after
                    their services."
                  </p>
                  <h4>Jason Yorke</h4>
                  <h6>Aquinas College</h6>
                </div>
                <div className="slide">
                  <p>
                    "Their attention to detail and professionalism are unmatched. I highly
                    recommend Osm Cleaning for any business looking for top-quality
                    cleaning services."
                  </p>
                  <h4>Sarah Thompson</h4>
                  <h6>GreenTech Ltd</h6>
                </div>
                <div className="slide">
                  <p>
                    "Absolutely wonderful experience! The team was thorough and exceeded
                    my expectations. I’ll definitely be using Osm Cleaning again."
                  </p>
                  <h4>Mark Reynolds</h4>
                  <h6>Homeowner</h6>
                </div>
              </Slider>
            </Col>
          </Row>
        </Container>
      </section>

      <Footer />
    </>
  );
};

export default ContactPage;
