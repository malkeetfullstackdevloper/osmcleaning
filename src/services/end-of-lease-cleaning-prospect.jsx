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

      <title>End of Lease Cleaning Prospect - OSM Cleaning Service</title>
      <Helmet>
          <meta name="title" content="End of Lease Cleaning Prospect - OSM Cleaning Service" />
          <meta name="description" content="OSM Cleaning Services promises the safe delivery of proven end of lease cleaning solutions in Prospect to ensure safe exit from the rental properties. Contact us at 04316 45222" />
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
          <h1>End of Lease Cleaning Prospect – Superb Cleaning Support for 100% Lease Refund</h1>
          <p>
          Moving out of a property and want your bond back? With our best rated end of lease cleaning in Prospect, we ensure you receive your full bond refund. 
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
                Our experts provide detailed and professional cleaning to meet your landlord’s or property manager’s expectations so you can rest easy as you transition to your new house.
                OSM Cleaning Services promises the safe delivery of proven cleaning solutions to ensure safe exit from the rental properties. Contact us at 04316 45222 or write to Osmcleaningservices@gmail.com to get FREE exit cleaning quotes. Don’t worry – we have top professionals in our ranks to deliver magnificent cleaning support. 
                </p>

                <h4>Our End of Lease Cleaning Procedure in Prospect</h4>
                <p>We guarantee that your property will be ready for inspection thanks to our meticulous cleaning process. Here's our approach for cleaning your property:</p>

                <ul>
                  <li>
                    <p><strong>1.</strong> Before we get started, we determine what cleaning needs to be done for the inspection. This is done through our pre-cleaning survey that focuses on high-priority areas.</p>
                  </li>
                  <li>
                    <p><strong>2.</strong> Both the interior and exterior aspects of the property will be cleaned completely, including but not limited to the:</p>
                    <ul>
                      <li><strong>Kitchen:</strong> stovetops, ovens, sinks, bench tops, and range hoods.</li>
                      <li><strong>Bathrooms and Toilets:</strong> scrubbed, disinfected tiles, mirrors, and shower screens.</li>
                      <li><strong>Bedrooms and Living Areas:</strong> windows, curtains, blinds, carpets, dusting, light fixtures, skirting boards, vacuuming, and undermount sink cleaning.</li>
                      <li><strong>Floors and Windows:</strong> window sills, deep carpet and hard floor cleaning, and window tracks.</li>
                    </ul>
                  </li>
                  <li>
                    <p><strong>3.</strong> Walkthrough to remove anything that does not fit the criteria, so that we can accept your property claim. Any customer concerns are taken seriously and if guarantee is not met, there will be a re-clean with no charge.</p>
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

      {/* About Company Section */}
      <section className="about-US mb-0">
        <div className="inner-about">
          <Row className="align-items-center">
            <Col md={12} className="">
              <div className="about-us-box servicepage">
                <h4>Why Choose Us?</h4>
                <p>With so many cleaning services available, here’s why we stand out:</p>

                <ul>
                  <li><strong>Money Back Guarantee –</strong> We clean to the highest real estate standards so you can maximize your chances of getting your full bond back.</li>
                  <li><strong>Trustworthy & Experienced Professionals –</strong> Our experts have years of experience in performing end of lease cleaning with great accuracy.</li>
                  <li><strong>Green Cleaning Solutions –</strong> We only use non-toxic products that are safe for the environment, children, and pets.</li>
                  <li><strong>Low Cost & Straightforward Pricing –</strong> No extra charges! Receive a tailor made quote depending on the size and condition of your property.</li>
                  <li><strong>Quality Work Done Quickly –</strong> We get the work done in time for your deadlines while maintaining the highest quality standards.</li>
                </ul>
              </div>
            </Col>
            
            <Col md={6} className="">
              <div className="about-us-box">

                <h4>FAQs</h4>
                <ul>
                  <li>
                    <p><strong>1. What is the average time an end of lease cleaning takes?</strong><br></br>
                    <strong>Ans.</strong> The total time needed for your property clean depends on its size and condition. On average, it takes 4–6 hours to clean a standard two-bedroom unit. Bigger properties may take longer, which we estimate once you book with us.</p>
                  </li>
                  <li>
                    <p><strong>2. What can I do in case my landlord is unhappy after the clean?</strong><br></br>
                    <strong>Ans.</strong> If your landlord or property manager has any bones to pick with our clean, we provide a free re-clean within 72 hours. Customer satisfaction is our main focus, and we do our utmost to ensure your property is cleaned to the highest standard.</p>
                  </li>
                </ul>

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
