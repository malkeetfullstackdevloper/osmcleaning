import React from "react";
import CustomNavbar from "../components/Navbar";
import Footer2 from "../components/Footer2";
import { Container, Row, Col, Button, Form, Card, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import ContactForm3 from "../components/ContactForm3";

export default function LandingPage() {

  const galleryItems = [
    { before: "/images/b1.jpeg", after: "/images/a1.jpeg" },
    { before: "/images/b2.jpeg", after: "/images/a2.jpeg" },
    { before: "/images/b3.jpeg", after: "/images/a3.jpeg" },
  ];

  const reviews = [
    {
    text: "They helped us get full bond back — top service.",
    author: "Mark L.",
    location: "Glenelg",
    },
    {
    text: "Carpets looked new after steam clean.",
    author: "Jane T.",
    location: "Adelaide",
    },
  ];

  return (
    <div>
      {/* Header */}
      <CustomNavbar />

      {/* Hero Section */}
      <section
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0.5)), url('/images/whyosm.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "100vh",
          color: "white",
        }}
        className="d-flex align-items-center text-center mbsize"
      >
        <Container>
          <h1 className="display-3 fw-bold mb-3">OSM Cleaning Services</h1>
          <h4 className="fw-light mb-4">
            Adelaide Carpet & End-of-Lease Experts
          </h4>
          <p className="lead mb-4">
            1-2 Room Carpet Clean <b>$99</b> | 3 Rooms <b>$120</b> <br />
            Bond-back Guarantee Cleaning
          </p>
          <div className="d-flex justify-content-center gap-3">
            {/* Button in Hero Section */}
            <Button
            className="landingbtn"
              size="lg"
              variant="danger"
              onClick={() => {
                const formSection = document.getElementById("quote");
                if (formSection) {
                  formSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              Get Free Quote
            </Button>

            <Button size="lg" className="landingbtn2 topcall" variant="outline-light">
              <a className="topcall" href="tel:0431 645 222">
              Call Now: 0431 645 222</a>
            </Button>
          </div>
        </Container>
      </section>

      {/* Offer Banner */}
      <section
        className="py-5"
        style={{ background: "linear-gradient(90deg, #000b8b, #4978bb)" }}
      >
        <Container className="text-center text-white pdtop">
          <h3 className="fw-bold mb-2">Limited Time Offer</h3>
          <p className="fs-5">1-2 Room Carpet Clean — <b>$99</b></p>
          <p className="fs-5">3 Rooms Carpet Clean — <b>$120</b></p>
          <small>Includes steam cleaning, stain pre-treatment & drying.</small>
        </Container>
      </section>

      {/* USP Icons */}
      <section className="py-5 bg-dark text-white">
        <Container>
          <Row className="text-center g-4 pdtop">
            {[
              "Bond-back Friendly",
              "Eco-friendly Solutions",
              "Insured & Trained",
              "Same-day Availability",
            ].map((usp, i) => (
              <Col md={3} sm={6} key={i}>
                <Card className="border-0 shadow-lg h-100 bg-secondary text-white rounded-4">
                  <Card.Body className="d-flex align-items-center justify-content-center fw-bold fs-6">
                    {usp}
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Services Section */}
      <section className="py-5" style={{ background: "#f9fafc" }}>
        <Container>
          <h2 className="fw-bold text-center mb-5 pdtopo">Our Services</h2>
          <Row className="g-4">
            {[
              "Carpet Steam Cleaning",
              "End-of-Lease / Bond Cleaning",
              "Upholstery & Mattress Cleaning",
              "Oven, Window & Tile Cleaning",
            ].map((service, i) => (
              <Col md={3} sm={6} key={i}>
                <Card className="h-100 shadow-lg border-0 rounded-4 service-card">
                  <Card.Body className="text-center">
                    <h5 className="fw-bold mb-2">{service}</h5>
                    <p className="text-muted small">
                      Professional & affordable {service.toLowerCase()}.
                    </p>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>

        </Container>
      </section>

      <section className="py-5">
        <Container>
          <Row className="align-items-center">
            <Col md={8}>
              <div className="mt-5">
                <h3 className="fw-bold mb-4">Why OSM Cleaning?</h3>
                <ul className="list-unstyled">
                  <li className="mb-2">● Years of experience serving Adelaide homes and renters</li>
                  <li className="mb-2">● Transparent pricing — no hidden fees</li>
                  <li className="mb-2">● Safe products for kids and pets</li>
                  <li className="mb-2">● Fast booking and friendly customer support</li>
                </ul>
              </div>
            </Col>
            <Col md={4} className="text-center mt-4 mt-lg-0">
              <Image src="/images/why-osm-cleaning.png" fluid rounded />
            </Col>
          </Row>
        </Container>
      </section>


      {/* About Us */}
      <section
        className="py-5 text-white"
        style={{ background: "linear-gradient(90deg, #000b8b, #4978bb)" }}
      >
        
        <Container>
          <Row>
            <Col md={7} className="text-center pdlr">
              <h2 className="fw-bold mb-4">About Us</h2>
              <p className="lead mx-auto" style={{ maxWidth: "750px" }}>
                OSM Cleaning Services is a trusted local cleaning company proudly serving Adelaide. With
                years of experience in carpet, bond, and residential cleaning, our mission is simple — deliver
                spotless results at affordable prices. We’re a fully insured team, trained to meet real estate
                standards, and committed to using safe, eco-friendly products. Whether you need a quick
                carpet clean or a complete end-of-lease service, we’re here to make moving stress-free.”
              </p>
            </Col>

            <Col md={5} className="d-flex justify-content-center">
              <img
                className="image-rounded"
                src="/images/why-osm.png"
                alt="End of Lease Cleaning Adelaide"
                style={{
                  width: "100%",
                  maxHeight: "400px", // adjust as needed
                  objectFit: "contain",
                }}
              />
            </Col>
          </Row>

        </Container>

      </section>

      <section className="max-w-4xl mx-auto my-8 p-6 rounded-2xl shadow-md">
        <Container>
        <div className="mt-5">

          <h3 className="text-2xl font-semibold"><i className="fas fa-map-marker-alt" aria-hidden="true"></i> Service Areas</h3>
          <p className="mt-2 leading-relaxed">
           “Adelaide and nearby suburbs including <span className="font-medium">North Adelaide, Glenelg, Norwood, Mawson Lakes, Modbury, Henley Beach, Salisbury, Elizabeth, Golden Grove, Gawler, Port Adelaide, Semaphore, West Lakes, Prospect, Burnside, Unley, Brighton, Marion, Hallett Cove, Seaford, Aldinga Beach, Christies Beach, Morphett Vale, Reynella, Woodcroft, Flagstaff Hill, Blackwood, Stirling, Mount Barker</span> and more.”
          </p>

        </div>
        </Container>
      </section>

      <section className="max-w-6xl mx-auto my-12 p-6 bg-white rounded-2xl shadow-md ">
        <Container className="my-5 ">
          <br />
          <h2 className="text-center mb-4 fw-bold">Our Work — Before & After</h2>
          <Row>
          {galleryItems.map((item, index) => (
          <Col key={index} md={6} lg={4} className="mb-4">
          <Card className="shadow-sm">
          <Row className="g-0">
          <Col xs={6} className="position-relative">
          <Card.Img
          src={item.before}
          alt={`Before ${index + 1}`}
          className="h-100 object-fit-cover"
          />
          <span className="position-absolute bottom-0 start-0 bg-danger text-white px-2 py-1 small rounded-top">
          Before
          </span>
          </Col>
          <Col xs={6} className="position-relative">
          <Card.Img
          src={item.after}
          alt={`After ${index + 1}`}
          className="h-100 object-fit-cover"
          />
          <span className="position-absolute bottom-0 start-0 bg-success text-white px-2 py-1 small rounded-top">
          After
          </span>
          </Col>
          </Row>
          </Card>
          </Col>
          ))}
          </Row>
        </Container>

      </section>

      <section>
        <Container className="my-5">
          <h2 className="text-center mb-4 fw-bold">What Our Customers Say</h2>
          <Row className="justify-content-center">
          {reviews.map((review, index) => (
          <Col key={index} md={6} className="mb-4">
          <Card className="h-100 shadow-sm border-0">
          <Card.Body>
          <Card.Text className="fst-italic text-muted">“{review.text}”</Card.Text>
          <Card.Footer className="bg-white border-0 mt-3 p-0">
          <small className="text-dark fw-semibold">
          — {review.author}, {review.location}
          </small>
          </Card.Footer>
          </Card.Body>
          </Card>
          </Col>
          ))}
          </Row>
        </Container>
      </section>

      <section>
        <Container className="my-5">
          <h2 className="text-center mb-4 fw-bold">Find Us on Google</h2>
          <Row className="justify-content-center">
            <Col md={10} lg={8}>
              <Card className="shadow-sm border-0">
                <Card.Body>
                  {/* Google Maps Embed */}
                  <div className="ratio ratio-16x9 mb-3">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d326279.0138206284!2d138.61115984999998!3d-35.000766950000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85fc86ada80ebced%3A0x94dddcf3d30078dc!2sOsm%20End%20of%20lease%20Cleaning%20Adelaide%20-%20Bond%20Cleaning%20Adelaide%20%7C%20Exit%20cleaning%20Adelaide!5e1!3m2!1sen!2sin!4v1758798669545!5m2!1sen!2sin"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      title="Google Maps - OSM Cleaning Services Adelaide"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>

                  {/* Link to Google Business Profile */}
                  <p className="text-center mb-0">
                    <a
                      href="https://share.google/j8Ai4q8QzZ3uD97je"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="fw-semibold text-primary"
                    >
                      View full Google Business profile
                    </a>
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Inquiry Form Section */}
      <section id="quote" className="py-5 mt-5" style={{ background: "#212529" }}>
        <ContactForm3 />
      </section>


      {/* Footer */}
      <Footer2 />
    </div>
  );
}
