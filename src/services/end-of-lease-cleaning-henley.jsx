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

      <title>End of Lease Cleaning Henley - OSM Cleaning Service</title>
      <Helmet>
          <meta name="title" content="End of Lease Cleaning Henley - OSM Cleaning Service" />
          <meta name="description" content="OSM Cleaning services have all the experience and expertise to deliver unmatched end of lease cleaning support in Henley on flexible timelines. Reach us today at 04316 45222" />
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
          <h1>End of Lease Cleaning in Henley – Best Chances of Bond or Lease Refund</h1>
          <p>
          Ending the lease of a rental unit can be daunting as it comes with the hassle of cleaning according to local rental agreements. 
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
                Our dedicated crew combines cleaning techniques with high-quality services allowing you to move out of the property flawlessly. Tenants exiting the property need to be wary of the cleaning needs of the region to ensure a total refund of the bond money. 
                OSM Cleaning services have all the experience and expertise to deliver unmatched end of lease cleaning support on flexible timelines. Reach us today at 04316 45222 or write to Osmcleaningservices@gmail.com to get FREE end of lease cleaning quotes in Henley. Plan your rental exit with us to ensure a 100% refund of the bond or lease money. 
                </p>

                <h4>Top Features of Our End of Lease Cleaning in Henley</h4>
                <p>We maintain a high standard of cleaning necessary for the property owners and the real estate agency. Our services provide the following:</p>

                <ul>
                  <li>
                    <h4>1. Every Room Receives a Thorough Cleaning</h4>
                    <ul>
                      <li><strong>Living Areas and Bedrooms:</strong> Cleaning and tidying of the surfaces, vacuuming, floor washing, baseboards washing, and windows cleaning.</li>
                      <li><strong>Kitchens:</strong> Stovetops, ovens, range hoods, sinks, and cupboards (both internal and external) along with benchtops deep cleaning.</li>
                      <li><strong>Toilets and Bathroom:</strong> Scrubbing of tiles, washing of sinks, shower heads, bathtubs, toilets, and mirrors.</li>
                      <li><strong>Laundry Spaces:</strong> Cleaning of cupboards, sinks, floors and dust removal.</li>
                    </ul>
                  </li>

                  <li>
                    <h4>2. Restoration Of Carpet Steam Stains</h4>
                    <p>We professionally and thoroughly vacuum and clean carpets with steam cleaning, removing allergens and tough dust stains.</p>
                  </li>

                  <li>
                    <h4>3. Windows and Doors Cleaning</h4>
                    <ul>
                      <li><strong>Windows:</strong> Thorough washing of blinds and windows inside and outside.</li>
                      <li><strong>Walls:</strong> Cleaning off fingerprints, other marks, and scuffs.</li>
                      <li><strong>Handles and Doors:</strong> Cleaning off dirt and smudges.</li>
                    </ul>
                  </li>

                  <li>
                    <h4>4. Clean Up of Appliances</h4>
                    <p>Every appliance including microwaves, ovens, and range hoods is cleaned with the utmost perfection while spraying the fridge with clean oil as desired.</p>
                  </li>

                  <li>
                    <h4>5. Bond Real Estate Full Refund Compliance</h4>
                    <p>We mark clean other properties on the list of standard checks like all other appliances files real estate standard suggesting the clean will allow clients full bond refund.</p>
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
                <h4>Why Choose Us for End of Lease Cleaning in Henley?</h4>
                <p>
                In order to get your bond refunded, rest assured knowing that you will receive it back with our professional cleaning services which are up to the standards of the landlord and the real estate professionals.   
                </p>
                </div>
            </Col>
            
            <Col md={6} className="">
              <div className="about-us-box">
              <ul>
                <li>
                  <p>Our cleaning professionals are experienced with deep cleaning, and thanks to their skills, the best results can be achieved in the shortest amount of time.</p>
                </li>
                <li>
                  <p>To encourage a safe environment, we make sure to use non-toxic and biodegradable cleaning solutions.</p>
                </li>
                <li>
                  <p>With our quotes come affordable prices and zero surprise charges because there is no fine print.</p>
                </li>
                <li>
                  <p>Due to them offering flexible scheduling, last-minute move-outs do not pose any issue. Help is available for any cleaning emergencies that arise.</p>
                </li>
                <li>
                  <p>Everything is clean and meets the highest standards because Electrostatic Spraying and final quality checks are performed.</p>
                </li>
              </ul>

              <p>We save time for clients in Henley to ensure swift movement from the rental property. The expert team prepares the place for final inspection and safe movement of the next tenancy. Contact us over the helpline number to book the most proficient end of lease cleaning services in Henley.</p>

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
