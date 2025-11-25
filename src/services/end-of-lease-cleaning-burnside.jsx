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

        <title>End of Lease Cleaning Burnside - OSM Cleaning Service</title>
        <Helmet>
            <meta name="title" content="End of Lease Cleaning Burnside - OSM Cleaning Service" />
            <meta name="description" content="We have trained cleaners in our end of lease cleaning team in Burnside who understand the minute details of full-proof cleaning in the region. Call us at 04316 45222" />
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
          <h1>End of Lease Cleaning in Burnside – Timely Return of Lease Money</h1>
          <p>
          Departing from your rental unit in Burnside? Move out effortlessly and get your entire bond back with our professional end of the lease cleaning service. 
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
                Our business cleaning services are totally unmatched because of our deep cleaning skills. We have trained cleaners in our end of lease cleaning team in Burnside who understand the minute details of full-proof cleaning in the region. 
                Thanks to our many years of experience and hawk-eyed attention to detail, we can tell you exactly what corners the rental property misses during the final inspection. Starting from carpet steam cleaning and bathroom sanitation to kitchen degreasing and window cleaning, we hereby, therefore assure you of our all-encompassing approach to end of lease cleaning. 
                OSM Cleaning Services applies eco-friendly products and advanced cleaning techniques to ensure a fresh and healthy atmosphere for the new tenant. Call us at 04316 45222 or send an email to Osmcleaningservices@gmail.com to the book end of lease cleaning services affordably. 
                </p>

                <h4>Our End of Lease Cleaning Process in Burnside</h4>
                <p>To make sure your rental property is in immaculate condition, we follow a well-laid-out and detailed cleaning procedure.</p>

                <ul>
                  <li>
                    <h4>1. Initial Inspection & Planning</h4>
                    <p>Our staff evaluates the condition of the rental property and forms an action plan for special issues.</p>
                  </li>
                  <li>
                    <h4>2. Kitchen Deep Cleaning</h4>
                    <p>In this step, we clean all food stains from stovetops, ovens, range hoods and other surfaces including benchtops, cupboards, sinks, tiled areas, and the kitchen as a whole.</p>
                  </li>
                  <li>
                    <h4>3. Bathroom & Laundry Cleaning</h4>
                    <p>All soap stains, mold, and filth are removed from walls and faucets of showers & bathtubs, and mirrors as well as tile surfaces so that sink and toilet cleansing does not leave behind dirt.</p>
                  </li>
                  <li>
                    <h4>4. Carpet, Floor & Tile Cleaning</h4>
                    <p>Using advanced cleaning machines, we meticulously clean carpets and hard surfaces, getting rid of all dirt, dust, and stains to make it look brand new.</p>
                  </li>
                  <li>
                    <h4>5. Windows & Glass Surfaces</h4>
                    <p>When accessible, we ensure that panes of all windows are streak-free while cleaning their insides and outsides.</p>
                  </li>
                  <li>
                    <h4>6. Wall & Skirting Board Cleaning</h4>
                    <p>Cleaning marks and dust from walls and skirting boards improve the looks of the property as a whole.</p>
                  </li>
                  <li>
                    <h4>7. Final Inspection & Touch-Ups</h4>
                    <p>Our inspection process is systemic. Before we leave, we take a final look at the place to ensure all of our rigorous cleaning requirements have been adhered to.</p>
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
            <div className="about-us-box">
              <h4>Why Choose Us?</h4>
              <p>OSM Cleaning Services supports the smooth exit from the rental properties after the final inspection! Our team prepares the rental space as per the set cleaning standards of the region and arrives at timelines, whenever you need them!</p>
            </div>
          </Col>
            <Col md={6} className="">
              <div className="about-us-box">
              
              <ul>
                <li>
                  <p><strong>Bond-Back Guarantee –</strong> We are sure of meeting your landlord’s expectations because we provide exceptional cleaning services. In the event of any problems, we provide complimentary re-cleaning to ease any worries.</p>
                </li>
                <li>
                  <p><strong>Experienced & Trained Cleaners –</strong> Our professional team has been doing end-of-lease cleaning for many years, and they understand exactly what property managers check for in the inspections.</p>
                </li>
                <li>
                  <p><strong>Eco-Friendly Cleaning Products –</strong> Our cleaning products are non-toxic and biodegradable, meaning everyone, including the environment, is safe.</p>
                </li>
                <li>
                  <p><strong>Affordable & Transparent Pricing –</strong> No hidden charges! We offer straightforward pricing guarantees and assist with reducing the stress of moving at a reasonable rate.</p>
                </li>
                <li>
                  <p><strong>Fast & Flexible Booking –</strong> Need help with cleaning on short notice? We do same-day and weekend bookings to help accommodate your needs.</p>
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
