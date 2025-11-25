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

      <title>End of Lease Cleaning in Norwood - OSM Cleaning Service</title>
      <Helmet>
          <meta name="title" content="End of Lease Cleaning in Norwood - OSM Cleaning Service" />
          <meta name="description" content="We deliver world-class end of lease cleaning in Norwood to ensure safe exit and full refund of deposits. Call us at 04316 45222" />
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
          <h1>End of Lease Cleaning in Norwood – Delivering Personalised Cleaning Support</h1>
          <p>
          Do you want to exit the rental area or lease property on a high? We deliver world-class end of lease cleaning in Norwood to ensure safe exit and full refund of deposits. 
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
                  You’re just a step away to book the best cleaning team in Norwood for planned cleaning assistance! Plan your rental exit with us to get a full refund of lease or bond money after the final inspection. 
                  OSM Cleaning Services hires only trained cleaners in its team to ensure profound cleaning on flexible timelines. Call us at 04316 45222 or write to Osmcleaningservices@gmail.com to deliver unmatched cleaning support that suits the cleaning demands of the place. Our team arrives at the location fully prepared to outshine the property after the final inspection. The experts go the extra mile to maintain the high cleaning standards of the place. Our customised cleaning quotes ensure that each corner of the place is cleaned thoroughly with safe end of lease cleaning techniques. 
                </p>

                <h4>Top Features of Our End of Lease Cleaning in Norwood</h4>
                <p>OSM Cleaning Services delivers all kinds of bond or end of lease assistance for all kinds of residential and commercial properties! We use modern-day cleaning tools to prepare the property for final inspection. Let us check the top features of our end of lease cleaning services:</p>

                <ul>
                  <li>
                    <p><strong>1. Comprehensive End of Lease Cleaning Support</strong><br></br>
                    Our cleaning team comes up with comprehensive solutions that suit the type of property and condition. We believe in delivering thorough cleaning assistance that meets industrial standards.</p>
                  </li>
                  <li>
                    <p><strong>2. Trained Cleaning Team</strong><br></br>
                    Our end of lease cleaning team is filled with experienced professionals who are trained regularly to meet the cleaning demands of the place. They are skilled in handling tools with clarity and safety.</p>
                  </li>
                  <li>
                    <p><strong>3. Eco-Friendly Cleaning Agents</strong><br></br>
                    Our cleaning team uses eco-friendly cleaning solutions to fit the region's cleaning requirements. We maintain high cleaning standards by using the agents provided by the cleaning company.</p>
                  </li>
                  <li>
                    <p><strong>4. Personalised Cleaning Support</strong><br></br>
                    We develop customised cleaning quotes considering various cleaning demands of the place. Our personalised cleaning support is designed to save time and effort while restoring the property to its best condition.</p>
                  </li>
                  <li>
                    <p><strong>5. Reliable Customer Support</strong><br></br>
                    We have a reputed customer support team ready to address client queries and assist with early bookings of our cleaning service.</p>
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
                        
            <Col md={6} className="">
              <div className="about-us-box">

                <h4>Why Choose Us?</h4>
                <ul>
                  <li>
                    <p>We deliver same-day end of lease cleaning support to suit the urgent cleaning demands of the place.</p>
                  </li>
                  <li>
                    <p>We offer cost-efficient cleaning solutions that fit the cleaning requirements of tenancy.</p>
                  </li>
                  <li>
                    <p>The team is open to various types of cleaning demands and uses different cleaning practices.</p>
                  </li>
                  <li>
                    <p>We keep updating the cleaning methods to ensure the safe return of the property to the landlord or property manager.</p>
                  </li>
                </ul>

                <p>OSM Cleaning Services is committed to timely reach-out in Norwood at very easy rates. Plan your moves with the cleaning team to ensure timely refund of deposits. Don’t think twice and contact our professional team for top-notch cleaning assistance in Norwood.</p>

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
