import React from "react";
import CustomNavbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactForm2 from "../components/ContactForm2";
import { Container, Row, Col } from "react-bootstrap";
import { Helmet } from "react-helmet";
import BannerButtons from "../components/BannerButtons";
import WeClean from "../components/weclean";
import LeaseCleaningPosts from "../posts/LeaseCleaningPosts";

function ExitClean() {
  return (
    <>
      <Helmet>
        <title>End of Lease Cleaning Magill | Professional, and Affordable Services</title>
        <meta name="title" content="End of Lease Cleaning Magill | Professional, and Affordable Services" />
        <meta name="description" content="Professional end of lease cleaning in Magill to ensure your property passes final inspection. Affordable services with bond-back guarantee. Book now!" />
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
          <h1>End of Lease Cleaning Magill | Professional, and Affordable Services</h1>
          <p>
            Make your rental property spotless and ready for final inspection with our professional end of lease cleaning in Magill. Trusted, thorough, and tailored to your needs.
          </p>
          <div className="appointment-btn">
            <BannerButtons />
          </div>
        </div>
      </Container>

      <Container>
        <Row>
          <Col md={6} className="about-US mb-0">
            <div className="about-us-box servicepage">

              <h4>Why Choose End of Lease Cleaning Magill?</h4>
              <ul>
                <li>
                  <p><strong>Cleaning Kitchen Services</strong><br />
                    We thoroughly clean ovens, stovetops, rangehoods, sinks, benches, cupboards (inside & out), light switches, and floors—leaving no grease or residue behind.
                  </p>
                </li>
                <li>
                  <p><strong>Laundry & Bathrooms Cleaning</strong><br />
                    Deep cleaning of sinks, taps, mirrors, tiles, floors, fixtures, and fittings. Soap scum, limescale, and mould are removed for a sparkling finish.
                  </p>
                </li>
                <li>
                  <p><strong>Living and Bedrooms</strong><br />
                    We dust, wipe, and vacuum all floors, surfaces, skirting, windows, frames, walls, and ceiling corners to ensure the entire home feels fresh and clean.
                  </p>
                </li>
                <li>
                  <p><strong>General and Optional Add-Ons</strong><br />
                    Need more? We offer add-ons like carpet steam cleaning, garage and balcony cleaning, and appliance deep cleaning to meet your inspection standards.
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

      {/* Why Clean with Us Section */}
      <section className="about-US mb-0">
        <div className="inner-about">
          <Row className="align-items-center">
            <Col md={12}>
              <div className="about-us-box text-center mt-5 mb-5">
                <h4>The Reason to Clean with End of Lease Cleaning Magill</h4>
                
              </div>
            </Col>
            <Col md={6}>
              <div className="about-us-box">

                <ul>
                  <li>
                    <p><strong>1. Professional Cleaning up to Real Estate Standards</strong><br />
                      Our trained team uses the right tools and expertise to clean thoroughly and meet property manager expectations, down to the smallest detail.
                    </p>
                  </li>
                  <li>
                    <p><strong>2. Saves Time and Effort</strong><br />
                      Focus on your move and let us handle the cleaning. We take care of every corner so you don’t have to stress about deadlines or missed spots.
                    </p>
                  </li>
                  <li>
                    <p><strong>3. Bond-Back Guarantee</strong><br />
                      We aim for perfection and offer a bond-back guarantee. If something’s missed, we’ll come back and fix it—free of charge.
                    </p>
                  </li>
                  <li>
                    <p><strong>4. Green Cleaning Products</strong><br />
                      We use eco-friendly, biodegradable products wherever possible—safer for the environment and future occupants of your home.
                    </p>
                  </li>
                  <li>
                    <p><strong>5. Stress-Free Moving Solution</strong><br />
                      Moving is already stressful. Let our professional cleaning team give you one less thing to worry about.
                    </p>
                  </li>
                </ul>

                <p>
                  Book OSM Cleaning Services in Magill today and leave your rental with confidence. Our experienced team ensures your property is left in top condition and ready to impress.
                </p>

              </div>
            </Col>

            <Col md={6}>
              <img width="100%" src="/images/carpet-cleaning.jpg" alt="End of Lease Cleaning Magill" />
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
