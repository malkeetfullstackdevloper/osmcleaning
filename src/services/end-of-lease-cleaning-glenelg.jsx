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

      <title>End of Lease Cleaning Glenelg - OSM Cleaning Service</title>
      <Helmet>
          <meta name="title" content="End of Lease Cleaning Glenelg - OSM Cleaning Service" />
          <meta name="description" content="OSM Cleaning Services is having its professional cleaners ready to arrive at your location for delivering full-proof end of lease cleaning support in Glenelg! Call us at 04316 45222" />
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
          <h1>End of Lease Cleaning in Glenelg – Personalised Cleaning Your Way</h1>
          <p>
          Recognizing that landlords have very particular guidelines concerning end-of-lease cleaning, we make an effort to perform meticulous detailing. 
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
                  This includes steam carpet cleaning, greasing the kitchen, washing the bathrooms, cleaning windows, mopping floors, dusting and scrubbing surfaces, and so much more. Our professional cleaners implement green, non-toxic, eco-friendly, and cruelty-free products, servicing children and pets while ensuring to achieve amazing results.
                  OSM Cleaning Services is having its professional cleaners ready to arrive at your location for delivering full-proof end of lease cleaning support in Glenelg! Call us at 04316 45222 or write us at Osmcleaningservices@gmail.com to book the best end of lease cleaning team on suitable timelines. 
                </p>

                <h4>Top Features of Our End of Lease Cleaning Service </h4>
                <p>Our end-of-lease cleaning services in Glenelg are designed to guarantee you the cleaning standards set by landlords and property managers of the region. From small apartments to large homes, we provide specialized deep cleaning services that ensure a smooth transition no matter the property type.</p>
                <h4>1.	Bond Back Guarantee</h4>
                <p>With our comprehensive cleaning services, you are bound to meet your landlord's cleaning standards, therefore, you won’t have to worry about losing your bond.</p>
                <h4>2.	Deep Cleaning of Every Corner</h4>
                <p>We specialize in cleaning windows, walls, carpets, ovens, and every other inch of your home including window trim and chandelier to ensure no part is ever neglected.</p>
                <h4>3.	Environment Friendly Products</h4>
                <p>Your home and mother nature are important to us! That's why all our products are eco-friendly, non-hazardous, and completely safe for pets and children.</p>
                <h4>4.	Same-Day & Weekend Availability</h4>
                <p>Need cleaning done in a hurry? It isn't an issue with our flexible scheduling that includes weekends and even public holidays.
                </p><h4>5.	Trained & Insured Cleaners</h4>
                <p>Have peace of mind knowing our team is reliable as they are fully trained, insured, and police-checked.
                </p><h4>6.	Customizable Packages</h4>
                <p>Whether the entire house needs cleaning, or just the bathrooms and kitchen, we are here for all your sanitized needs.</p>


                <h4>Why Choose Us?</h4>
                <p>Selecting our end of lease cleaning service in Glenelg ensures no last-minute challenges, no stress, and no loss of your bond amount. We guarantee exceptional quality and satisfaction, and we are proud to say that we never compromise on that. To receive a free estimate, call us now and let us complete the cleaning while you handle the moving. You are only a spotless clean away from getting the bond refund.
                <br></br>•	Experience & Expertise – We have been performing end-of-lease cleaning in Glenelg for years, and we understand what property managers want.
                <br></br>•	Affordable Pricing – No concealed costs, just straightforward value with our lower rates.
                <br></br>•	Advanced Equipment - For optimal results, we utilize high-quality steam cleaners and vacuums with environmentally friendly detergents.
                <br></br>•	100% Satisfaction Guarantee – We will re-clean your apartment at no charge if your landlord is not satisfied.
                <br></br>•	Local Glenelg Team – We are industry experts located in Glenelg and understand the leasing market requirements in South Australia.
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
              <h4>FAQs</h4>
              <p>1.	How long does an end-of-lease cleaning take? <br></br>
              Ans. Cleaning time varies with the property's size and condition. Typically, a standard 2-bedroom apartment takes 4-6 hours, while more extensive homes may take as long as 8 hours.
              <br></br>2.	Do I need to be present during the cleaning?<br></br>
              Ans. Definitely not! We can take care of everything if you leave the keys with us. After we finish, we will even show you pictures.
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
