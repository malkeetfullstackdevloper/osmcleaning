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

function BondClean() {
  return (
    <>

      <title>Bond Cleaning Adelaide - OSM Cleaning Service</title>
      <Helmet>
        <meta name="title" content="Bond Cleaning Adelaide - OSM Cleaning Service" />
        <meta name="description" content="Our classical bond cleaning support in Adeliade is meant to clean every corner of the property with proven cleaning solutions. Reach OSM Cleaning Services at 04316 45222" />
      </Helmet>

      <CustomNavbar />
      {/* Hero Section */}
      <Container fluid className="hero-section d-flex align-items-center" style={{
        backgroundImage: "url('/images/End-of-Lease-Cleaning.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "80vh"
      }}>
        <div className="banner-content">
          <h1>Classical Bond Cleaning in Adeliade – Same-Day Cleaning Support</h1>
          <p>
          Move out with peace of mind as OSM Cleaning provides detailed end-of-lease Bond cleaning that meets real estate standards—leaving your property spotless and ready for inspection.
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
                <h4>Classical Bond Cleaning in Adeliade – Same-Day Cleaning Support</h4>
                <p>
                Are you moving out of a rented apartment? Get your bond refund easily by using our services of Adelaide bond cleaning. We have the best cleaning solutions that cover a wide range of needs which will be crucial to not only fulfill the standards of the landlord but also the real estate agent. Our superior attention to every detail, the use of the best cleaning equipment, and the promise of eco-friendly products gets the property set up for you right when you arrive back from your job.
Our classical bond cleaning support in Adeliade is meant to clean every corner of the property with proven cleaning solutions. Reach OSM Cleaning Services at 04316 45222 or write to Osmcleaningservices@gmail.com to get FREE exit cleaning quotes. 
                </p>

                <h4>Top Features of Our Bond Cleaning Service in Adeliade </h4>
                <p>The local bond cleaning company delivers all-round cleaning support to support the exit cleaning strategy. These are feature of bond cleaning support include - 
                </p>
                <ol>1.	Comprehensive Cleaning Support – Whether it’s cleaning of carpet, floor, and even the walls, the kitchens, the bathrooms, and outdoor spaces, all will be covered with our professional services.
                </ol>
                <ol>2.	Experienced & Certified Cleaners – We are professionals with years of experience in returning bond or lease money by maintaining cleaning standards of the industry.
                </ol>
                <ol>3.	Biodegradable Cleaning Solutions – The team uses biodegradable cleaning solutions that are safe for families, pets, and the environment. 
                </ol>
                <ol>4.	Bond Refund Assurance – Our deep-cleaning process meets the standards set forth in a rental agreement, ensuring you increase your chances of getting your full bond back.
                </ol>
                <ol>5.	Same-Day & Emergency Services – If you need urgent cleaning, We have same-day services and flexible schedules for those emergency needs.
                </ol>
                <ol>6.	Advanced Equipment & Techniques – We using the best tools and cleaning techniques to support 100% refund of bond or lease deposits.
                </ol>

                <h4>Why Choose Us?</h4>
                <p>Low & Transparent Pricing – No back-end fees! We offer very competitive rates without compromising on quality.
                Flexible Booking Schedule – Book the bond cleaning when it suits you the most.
                Fully insured & licensed – As a fully insured cleaning company, we give you peace of mind with every service we provide.
                Customer Satisfaction Guarantee — If you are not satisfied with our service, we provide a free re-clean within 72 hours.
                Home Cleaning – We ensure no single corner is under-attended, your property is left spotless!

                OSM Cleaning Services in Adelaide before the final inspection of rental property ensure thorough cleaning of the property with proven cleaning agents. 
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
                <h4>Leave Your Space Immaculate with Our Bond Cleaning Service</h4>
                <p>
                OSM Cleaning’s professional Bond Clean ensures your property is spotless and ready for handover. Whether you're moving out of a rental or preparing to sell, we handle every detail to meet inspection standards and leave a lasting impression.
                </p>
                <h4>FAQs</h4>
                <p>1.	What does a bond cleaning include?<br></br>
                Ans. Bond cleaning involves deep cleaning at all locations of dusting, vacuuming, mopping, degreasing of the kitchen, sanitizing of the bathrooms, cleaning ky carpets, wiping of the windows, and more. Our cleanliness mastering leaves your property up to the highest standards expected by landlords and property managers.
                <br></br>
                <br></br>
                2.	How long does bond cleaning take?<br></br>
                Ans. The duration depends on the size and condition of the property. On average, a standard 2-bedroom apartment takes 4-6 hours. Larger homes may require a full day of cleaning. Our team ensures efficient and timely completion without compromising quality.
                </p>
              </div>

            </Col>
            <Col md={6} className="">
            <img width="100%" src="/images/osm/bondclean.jpg" alt="" />
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

export default BondClean;
