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
      <Helmet>
        <title>End of Lease Cleaning South Adelaide – Affordable & Professional Cleaners</title>
        <meta name="title" content="End of Lease Cleaning South Adelaide – Affordable & Professional Cleaners" />
        <meta name="description" content="Professional end of lease cleaning in South Adelaide for smooth move-outs. Ensure your bond return with expert cleaning services. Call 04316 45222." />
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
          <h1>End of Lease Cleaning South Adelaide – Affordable & Professional Cleaners</h1>
          <p>
            Whether you're leaving an apartment or a house in the suburbs, our professional end of lease cleaning ensures a stress-free handover and helps secure your full bond refund.
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

              <p>
                End of lease cleaning in South Adelaide is a crucial step for both tenants and landlords. Whether you're moving out of an apartment in the city or a house in the suburbs, professional cleaning ensures a smooth handover and protects your investment.
              </p>

              <h4>Why End of Lease Cleaning South Adelaide?</h4>
              <ul>
                <li>
                  <p><strong>Make Whole Delivery</strong><br />
                    Cleaners follow strict inspection standards to ensure the property is returned in its original condition, boosting your chance of a full deposit refund.
                  </p>
                </li>
                <li>
                  <p><strong>Real Estate and Landlord Standards</strong><br />
                    Our team understands the high expectations of South Adelaide property managers and delivers results that pass even the strictest inspections.
                  </p>
                </li>
                <li>
                  <p><strong>Stress-Free & Time-Saving</strong><br />
                    Leave the intense cleaning to us so you can focus on packing and relocating without added stress.
                  </p>
                </li>
                <li>
                  <p><strong>Experience with Various Property Types</strong><br />
                    From heritage homes to modern apartments, we have the tools and experience to clean all kinds of properties.
                  </p>
                </li>
                <li>
                  <p><strong>Ready for the Next Tenant</strong><br />
                    We ensure the home is fresh, hygienic, and ready for immediate occupancy by new tenants.
                  </p>
                </li>
              </ul>

            </div>
          </Col>
          <Col md={6}>
            <div className="contact-form translate-form">
              <ContactForm2 />
            </div>
          </Col>
        </Row>
      </Container>

      {/* Why Choose Us Section */}
      <section className="about-US mb-0">
        <div className="inner-about">
          <Row className="align-items-center">
            <div className="about-us-box mt-5 mb-4 text-center">
                <h4>The Reason to Clean with End of Lease Cleaning South Adelaide</h4>
            </div>
            <Col md={6}>
              <div className="about-us-box">
                <ul>
                  <li>
                    <p><strong>No Worries About Bond Return</strong><br />
                      We follow a comprehensive checklist to clean every room, appliance, and surface—ensuring you meet all inspection criteria.
                    </p>
                  </li>
                  <li>
                    <p><strong>Specialised Local Cleaning</strong><br />
                      From beachside units to suburban homes, we tailor our cleaning approach based on property type and material.
                    </p>
                  </li>
                  <li>
                    <p><strong>Save Time & Effort</strong><br />
                      Let our trained cleaners handle the heavy work so you can focus on your move, job, or family.
                    </p>
                  </li>
                  <li>
                    <p><strong>Professional Quality Service</strong><br />
                      Our cleaners are prompt, respectful, and trained to deliver top-quality results with industry-grade tools and methods.
                    </p>
                  </li>
                  <li>
                    <p><strong>End-to-End Cleaning Solutions</strong><br />
                      We clean ovens, carpets, bathrooms, windows—even garages—leaving no area overlooked for the final inspection.
                    </p>
                  </li>
                </ul>

                <p>
                  Reach out to OSM Cleaning Services for professional, cost-effective cleaning support in South Adelaide. We're committed to delivering excellence with every service.
                </p>

              </div>
            </Col>
            <Col md={6}>
              <img width="100%" src="/images/carpet-cleaning.jpg" alt="End of Lease Cleaning in South Adelaide" />
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
