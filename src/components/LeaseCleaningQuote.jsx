import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import CustomNavbar from "./Navbar";
import ContactForm2 from "./ContactForm2";
import Footer from "./Footer";

const LeaseCleaningQuote = () => {
  return (
    <>
    <CustomNavbar />

      {/* Quote Form Section */}
      <Container className="py-5 get-A-quote">
        <Row>
          <Col md={6}>
             <div className="get-a-quote">
             <h1>Get a Custom Lease Cleaning Quote</h1>
              
              <p>
                Need a cleaning solution tailored to your needs? Just fill out our quick form, and we’ll send you a personalised quote that matches your specific requirements. Let us help you make your space shine!
              </p>
              <br />
              <p>Interested in joining our team instead? Head over to our Careers Page to explore exciting job opportunities with us.</p>
            </div>
          </Col>
          <Col md={6}>
          <ContactForm2 />
            
          </Col>
        </Row>
      </Container>

      {/* Testimonials Section */}
      <Container fluid className="why-ChoosE text-white text-center">
        <h2>What Our Customers Are Saying</h2>
        <p>
          "What sets Osm Cleaning apart is their strong commitment to delivering outstanding results. They take the time to understand their clients’ specific needs and tailor their cleaning approach accordingly. I was amazed by how immaculate the College looked after their services."
        </p>
        <h6>- Jason Yorke, Aquinas College</h6>
      </Container>
      <Footer />
    </>
  );
};

export default LeaseCleaningQuote;