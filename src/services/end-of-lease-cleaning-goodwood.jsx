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

      <title>End of Lease Cleaning Goodwood - OSM Cleaning Service</title>
      <Helmet>
          <meta name="title" content="End of Lease Cleaning Goodwood - OSM Cleaning Service" />
          <meta name="description" content="OSM Cleaning Services is the best option to deal with end of lease cleaning requirements in Goodwood at very attractive prices. Reach us at 04316 45222" />
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
          <h1>End of Lease Cleaning Goodwood – Overhauling Condition of Rental Property</h1>
          <p>
          Are you shifting out of a rented estate in Goodwood? If yes, do so effortlessly and without any hassle during end of lease cleaning with the help of our professional cleaning services. 
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
                Our aim is to deliver an all-round bond cleaning for a full refund and remain in goodwill with your landlord. We have a specialized team to deal with cleaning who work with a proprietary checklist of cleaning tasks built to satisfy the requirements of real estate companies and landlords.
                OSM Cleaning Services is the best option to deal with end of lease cleaning requirements at very attractive prices. Reach us at 04316 45222 or write to Osmcleaningservices@gmail.com to book the cleaning team on flexible timelines. Contact us today to prepare the property for final inspection and release of lease or bond money. 
                </p>

                <h4>Top Features of Our End of Lease Cleaning Services</h4>
                <ul>
                  <li>
                    <h4>1. Comprehensive Cleaning Checklist</h4>
                    <p>Our end-to-end lease cleaning services include everything from bedrooms, bathrooms, and kitchens, to living spaces and outdoor areas. We remove cobwebs, wash floors, and everything in between because we target deep cleans and industry standards.</p>
                  </li>
                  <li>
                    <h4>2. Bond Claim Guarantee</h4>
                    <p>We guarantee that you will get your full bond refund because we deeply cleanse the property to immaculate condition, and prepare the property for final inspection.</p>
                  </li>
                  <li>
                    <h4>3. Green Cleaning Products</h4>
                    <p>We make sure that every new tenant gets the property in a mold-free and safe condition as we use non-toxic, environmentally friendly cleaning products.</p>
                  </li>
                  <li>
                    <h4>4. Upholstery & Carpet Cleaning</h4>
                    <p>Sofas and carpets breathe new life, free from dust, allergens, and all deeply ingrained filthy stains through our brilliant professional cleaners.</p>
                  </li>
                  <li>
                    <h4>5. Sanitisation of Kitchen & Bathroom</h4>
                    <p>Appliances in the kitchen are drenched with disinfectants and scrubbed to sparkle the location. We make sure that all countertops and sinks in bathrooms are cleaned thoroughly.</p>
                  </li>
                  <li>
                    <h4>6. Schedule Flexibility</h4>
                    <p>Our cleaning team arrives at the location on flexible timelines to suit the cleaning needs. We also do cleaning over the weekends as well quicker than you do it at any point in the week.</p>
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
                    <p><strong>Sufficiently & Competently Trained Cleaners –</strong> Our team comprises skilled professionals trained in end of lease cleaning for many years. The cleaners follow the cleaning guidelines as prescribed by the company and stay updated with the latest cleaning practices.</p>
                  </li>
                  <li>
                    <p><strong>No Surprising Costs, No Complications –</strong> Our prices are supremely reasonable, and there are absolutely no covert charges. To guarantee everything, you are given an upfront quote, so you will know precisely what to expect from us prior to any reservations.</p>
                  </li>
                  <li>
                    <p><strong>Cleaning Approvals Within Real Estates –</strong> You can rely on us, and we are confident in offering top cleaning services aligning with real estate cleaning needs.</p>
                  </li>
                  <li>
                    <p><strong>Satisfaction with the Clients’ Terms –</strong> This is our priority, as well as the jaw-dropping fact that you or your landlord can tell us what you didn’t like. We’ll fix it with no questions asked by utilizing our re-cleaning service.</p>
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
