import React from "react";
import HomeCarousel from "../components/HomeCarousel";
import CustomNavbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";
import ContactForm2 from "../components/ContactForm2";
import { Container, Row, Col, Card, Button, Form, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import BannerButtons from "../components/BannerButtons";
import WeClean from "../components/weclean";
import LeaseCleaningPosts from "../posts/LeaseCleaningPosts";

import { Helmet } from "react-helmet";

function ExitClean() {
  return (
    <>

      <title>Exit Cleaning Adelaide - OSM Cleaning Service</title>
      <Helmet>
        <meta name="title" content="Exit Cleaning Adelaide - OSM Cleaning Service" />
        <meta name="description" content="OSM Cleaning Services is the top-rated exit cleaning service provider in Adelaide that understands the modern-day cleaning demands of the place!" />
      </Helmet>

      <CustomNavbar />
      {/* Hero Section */}
      <Container fluid className="hero-section d-flex align-items-center" style={{
        backgroundImage: "url('/images/osm/exitclean.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "80vh"
      }}>
        <div className="banner-content">
          <h1>Reliable Exit Cleaning for a Stress-Free Move</h1>
          <p>
            Move out with peace of mind as OSM Cleaning provides detailed end-of-lease exit cleaning that meets real estate standards—leaving your property spotless and ready for inspection.
          </p>
          <div className="appointment-btn ">
          <BannerButtons />
          </div>
        </div>
      </Container>

      <Container>
        <Row>
          <Col md={6} className="about-US mb-0">
              <div className="about-us-box servicepage">
                <h4>6Proven Exit Cleaning in Adelaide – Delivering Full-Proof Exit Cleaning Support</h4>
                <p>
                  Moving out of a property can be a source of stress, and the exit needs to be done as per the rental terms. We deliver professional exit cleaning in Adelaide that fits the cleaning standards of the industry. We render a proven cleaning service, which totally complies with both the rules of the landlord and real estate agent. This guarantees flawless turnover and full bond repayment.
                  OSM Cleaning Services is the top-rated exit cleaning service provider in Adelaide that understands the modern-day cleaning demands of the place! They support the full refund of the rental deposit at favorable timelines. Call us at 04316 45222 or write to Osmcleaningservices@gmail.com to get more details about the exit cleaning service in Adelaide. 
                  For cleaning that lets you down and risks your deposit, email us today. Kindly ask for a free exit cleaning quote from our professional cleaners for a trouble-free moving! 
                </p>

                <h4>Top Features of Our Exit Cleaning Service in Adelaide </h4>
                <p>OSM is one of the most reliable options for full-proof exit cleaning service in Adelaide which promises early refund of the bond or rental deposits! You’re now just a call away to secure your bond or lease money. Let us look at the best options for world-class exit cleaning services in Adelaide – </p>
                <h4>Personalized Exit Cleaning </h4>
                <p>The company believes in delivering high-class exit cleaning service that suits the rental cleaning demands of the place.</p> 
                <h4>Affordable Pricing with No Hidden Fees</h4>
                <p>We offer competitive rates with transparent pricing—no unexpected costs, just high-quality cleaning. Our cleaning quotes are highly competitive and fit the budget of clients.
                </p>
                <h4>Satisfaction Guarantee</h4>
                <p>If your landlord or agent isn’t satisfied, we offer a free re-clean within 72 hours to ensure your bond is returned.</p>

                <h4>Why Choose Us?</h4>
                <p>We are a locally-owned exit cleaning company in Adelaide with experienced professionals on the team. Let us look at the top reasons to select us for exit cleaning - </p>
                <p>
                <b>1.	Experienced & Reliable Team</b> <br></br>
                We have highly trained and qualified professionals who support flawless results every time. You can rely on our professional team for all cleaning requirements. 
                <br></br><b>2.	Real Estate-Approved Cleaning Standards</b><br></br>
                We follow a comprehensive checklist aligned with real estate expectations, maximizing your chances of a full bond refund.
                <br></br><b>3.	Eco-Friendly Cleaning Solutions</b><br></br>
                We use environmentally friendly and non-toxic cleaning products that are safe for you and the planet. The professionals only use the cleaning agents that suit the cleaning demands of the place. 
                </p>

              </div>
          </Col>
          <Col md={6}>
            <div className="contact-form translate-form">
              <ContactForm2 />

            </div>
          </Col>
        </Row>
      </Container>

      {/* About Company Section */}
      <section className="about-US mb-0">
        <div className="inner-about">
          <Row className="align-items-center">
            <Col md={6} className="">
              <div className="about-us-box">
                <h4>Leave Your Space Immaculate with Our Exit Cleaning Service</h4>
                <p>
                OSM Cleaning’s professional Exit Clean ensures your property is spotless and ready for handover. Whether you're moving out of a rental or preparing to sell, we handle every detail to meet inspection standards and leave a lasting impression.
                </p>
              </div>

            </Col>
            <Col md={6} className="">
            <img width="100%" src="/images/carpet-cleaning.jpg" alt="" />
            </Col>
          </Row>
        </div>
      </section>

      
      <LeaseCleaningPosts />
      <WeClean />
      
      <Footer />
    </>
  );
}

export default ExitClean;
