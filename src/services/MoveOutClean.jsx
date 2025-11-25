import React from "react";
import HomeCarousel from "../components/HomeCarousel";
import CustomNavbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";
import ContactForm2 from "../components/ContactForm2";
import { Container, Row, Col, Card, Button, Form, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import BannerButtons from "../components/BannerButtons";
import LeaseCleaningPosts from "../posts/LeaseCleaningPosts";
import WeClean from "../components/weclean";

import { Helmet } from "react-helmet";

function MoveOutClean() {
  return (
    <>

      <title>Move out Cleaning Adelaide - OSM Cleaning Service</title>
      <Helmet>
        <meta name="title" content="Move out Cleaning Adelaide - OSM Cleaning Service" />
        <meta name="description" content="Our move-out cleaning services in Adelaide guarantee that your leased property is in pristine condition for the inspection which ensures that you receive the bond refund without any inconvenience" />
      </Helmet>

      <CustomNavbar />
      {/* Hero Section */}
      <Container fluid className="hero-section d-flex align-items-center" style={{
        backgroundImage: "url('/images/osm/moveoutclean.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "80vh"
      }}>
      
        <div className="banner-content">
        <h1>Reliable Move Out Cleaning for a Stress-Free Move</h1>
          <p>
          Move out with peace of mind as OSM Cleaning provides detailed end-of-lease Move Out cleaning that meets real estate standards—leaving your property spotless and ready for inspection.
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
                <h4>Move Out Cleaning Adeliade – Superior Cleaning at Cost-Effective Rates</h4>
                <p>We understand that relocating can often be a daunting task, but your cleaning does not have to be! Our move-out cleaning services in Adelaide guarantee that your leased property is in pristine condition for the inspection which ensures that you receive the bond refund without any inconvenience. We follow a systematic cleaning plan, use eco-friendly products, and the results are always great. Focus on your next move and let us handle the cleaning.
                OSM Cleaning Services is the best bet to clean your property in Adeliade using proven cleaning techniques. You can plan your moves with us and exit from the property in a simplified way! Reach us at 04316 45222 or write to Osmcleaningservices@gmail.com to get FREE bond cleaning quotes in Adeliade and book the cleaning services on simple terms. 
                </p>
                <h4>Our Move Out Cleaning Procedure in Adelaide</h4>
                <p>We are very meticulous and methodical in our approach to ensure we deliver the best results for move-out cleaning. Our move out cleaning procedure includes – </p>
                
                <h4>Initial Inspection and Planning </h4>
                <p>Our team does a preliminary examination of the property to identify the stains, high footfall areas, and any special cleaning parameters that should be included in the plan. This step helps us formulate an efficient cleaning process. 
                </p><h4>Deep Cleaning of All Rooms </h4>
                <p>Wiping surfaces, sweeping and vacuuming, mopping, cleaning windows, and removing dust from corners. Cleaning stovetops, range hoods, countertops, sinks, cupboards (inside & out), and appliance exteriors. Scrubbing tiles, sinks, showers, bathtubs, toilets, mirrors, and disinfecting surfaces.
                </p><h4>Carpet Steam Cleaning and Stain Cleaning </h4>
                <p>Our carpet cleaning service makes sure that dirt, dust, and stubborn stains are removed so that carpets are clean and a fresh scent is maintained. 
                </p><h4>Window and Wall Cleaning </h4>
                <p>Dust, fingerprints, and wall stains are removed and windows are cleaned for a streak free shine. 
                </p><h4>Final Check and Touch Ups</h4> 
                <p>Once the job is complete we go on a last walk through to check if every area is to our high clean standards. If any places are found wanting, we will remediate them quickly.
                </p>
                <h4>Why Choose Us for Move Out Cleaning in Adelaide?</h4>
                <p>1.	Bond Back Guarantee – With our professional cleaning service, you are likely to receive your full bond refund as we meet landlord and real estate professional standards.
                </p>
                <p>2.	Experienced & Reliable Team – Our end-of-lease cleaning professionals have decades of experience and each prominent member of the industry has their own best practices.
                </p>
                <p>3.	Eco-Friendly Cleaning Products – Non-toxic and biodegradable cleaning solutions are used to cleanse the premises all in an effort of caring for both your health and the environment.
                </p>
                <p>4.	Affordable & Transparent Pricing – As an affordable cleaning service, we do not disguise or conceal any charges. Our quotes are straightforward and given prior to the relevant cleaning services being performed.
                </p>
                <p>5.	Same-Day & Emergency Cleaning Available – We are able to cater to last minute move-out needs because we have flexible scheduling and are available for urgent cleaning.
                </p>
                <p>6.	Satisfaction Guarantee – We work with pride and guarantee your money back if you are not fully satisfied with the results of the cleaning.
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
                <h4>Leave Your Space Immaculate with Our Move Out Cleaning Service</h4>
                <p>
                OSM Cleaning’s professional Move Out Clean ensures your property is spotless and ready for handover. Whether you're moving out of a rental or preparing to sell, we handle every detail to meet inspection standards and leave a lasting impression.
                </p>

                <h4>FAQs</h4> 
                <p>1.	What are the inclusions in move out cleaning in Adeliade?</p>
                <p>Ans. Our move out cleaning team offers a detailed move out cleaning support that incorporates thorough cleaning of all bedrooms, bathrooms, kitchen, laundry and common areas including dusting, vacuuming, mopping, wall spot cleaning, oven cleaning, and carpet steam cleaning when necessary.
                </p>
                <p>2.	How much time do you take for move out cleaning?</p>
                <p>Ans. The move out cleaning time depends on both the size and condition of the property in question. Generally, a standard two-bedroom unit takes approximately four to five hours.</p>

              </div>

            </Col>
            <Col md={6} className="">
            <img width="100%" src="/images/osm/moveoutclean.jpg" alt="" />
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

export default MoveOutClean;
