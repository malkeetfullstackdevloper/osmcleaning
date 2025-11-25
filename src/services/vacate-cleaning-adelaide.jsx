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

      <title>Vacate Cleaning Adelaide - OSM Cleaning Service</title>
      <Helmet>
        <meta name="title" content="Vacate Cleaning Adelaide - OSM Cleaning Service" />
        <meta name="description" content="Our Adelaide vacate cleaning service is perfect for ensuring that you leave the property in the best possible condition, and we'll take the hassle out of a scary few hours for you." />
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
          <h1>Popular Vacate Cleaning in Adelaide – Flawless Exit from Rental Properties</h1>
          <p>
          Leaving a property can be a daunting time especially when making sure your place is left spotless to get your bond back. </p>
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
                Our Adelaide vacate cleaning service is perfect for ensuring that you leave the property in the best possible condition, and we'll take the hassle out of a scary few hours for you. We assure you that after our professional cleaning services, they will have no complaints when the cleaners arrive and inspect your house.
                OSM Cleaning Services is the best cleaning option for tenants at time of leaving the property. Our professional team will arrive at the location fully prepared for top-notch cleaning assistance at attractive rates. Reach us at 04316 45222 or write to Osmcleaningservices@gmail.com to book the vacate cleaning team on suitable timelines. 
                </p>

                <h4>Starred Features of Our Vacate Cleaning Services in Adelaide</h4>
                <p>Selecting our vacate cleaning services in Adelaide means you gain the advantages of a specialized and detailed cleaning service. Our crew works so that every little detail passes the set quality controls of cleanliness. Our service includes the following components:</p>

                <ul>
                  <li>
                    <p><strong>Great Cleaning of All Rooms</strong><br></br>
                    We clean each and every room like bedrooms, resting rooms, kitchens, and bathrooms so everything is clean and new.</p>
                  </li>
                  <li>
                    <p><strong>Kitchen Detailing</strong><br></br>
                    Your kitchen shall sparkle after we finish cleaning all stovetops, ovens, sinks, and cupboards.</p>
                  </li>
                  <li>
                    <p><strong>Bathroom Sanitization</strong><br></br>
                    We clean and disinfect the sinks, showers, bathtubs, tiles, and toilets.</p>
                  </li>
                  <li>
                    <p><strong>Carpet & Floor Cleaning</strong><br></br>
                    We do every form of floor cleaning or restoration such as vacuuming, mopping, steaming carpets, and scrubbing floors.</p>
                  </li>
                  <li>
                    <p><strong>Windows & Doors Cleaning</strong><br></br>
                    Cleaning of windows from the inside and outside including the frames and tracks.</p>
                  </li>
                  <li>
                    <p><strong>Wall Spot Cleaning</strong><br></br>
                    Removing stains and marks left on walls and scuffed walls.</p>
                  </li>
                  <li>
                    <p><strong>Garage & Outdoor Areas</strong><br></br>
                    Garages, patios, and balcony surfaces are swept and littered.</p>
                  </li>
                  <li>
                    <p><strong>Custom Cleaning Options</strong><br></br>
                    We can help if there is a particular area you wish us to clean.</p>
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
                  <h4>What Makes Us Different from the Rest?</h4>
                  <p>
                  Although there are numerous vacate cleaners in Adelaide, we’re different from the others because of our quality, dependable, and customer-friendly services. Here’s why we are better than the competition:
                  </p>
                  </div>
            </Col>
                        
            <Col md={6} className="">
              <div className="about-us-box">

              <ul>
                <li>
                  <p><strong>Bond Back Guarantee</strong><br></br>
                  Rest assured you will receive your bond back in full because we know how crucial that is and our cleaning services will pass even the most demanding landlord and property manager standards.</p>
                </li>
                <li>
                  <p><strong>Experienced & Professional Team</strong><br></br>
                  Our sophisticated cleaners are adept at their jobs and have undergone extensive training as well as years of experience and unparalleled results owing to advanced cleaning methods.</p>
                </li>
                <li>
                  <p><strong>Eco-Friendly Cleaning Solutions</strong><br></br>
                  Our cleaning products are non-toxic and environmentally-friendly, making them safe for families, pets, and the earth.</p>
                </li>
                <li>
                  <p><strong>Affordable Pricing</strong><br></br>
                  There are no hidden fees and the rates are extremely competitive for top-quality service.</p>
                </li>
                <li>
                  <p><strong>Flexible Scheduling</strong><br></br>
                  We have same day and weekend appointments for your convenience so we can work with your moving schedule.</p>
                </li>
                <li>
                  <p><strong>Customer Satisfaction Guaranteed</strong><br></br>
                  We will re-clean the spots you are not content with for free if that’s the case.</p>
                </li>
              </ul>

              </div>

            </Col>
            <Col md={6} className="">
            <img width="100%" src="/images/carpet-cleaning.jpg" alt="" />
            </Col>

            <Col md={12} className="">
              <div className="about-us-box">
              <p>OSM Cleaning Services has numerous teams on standby that are ready to provide you with cleaning help on the very same day you contact us! You can reach out to us by calling at <strong>0421202040</strong> or via email at <a href="mailto:info@osmcleaningservices.au">info@osmcleaningservices.au</a> to arrange for simply terms vacate cleaning service.</p>    
              </div>
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
