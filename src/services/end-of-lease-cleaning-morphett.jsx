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
        <title>End of Lease Cleaners Morphett Vale | Expert Bond Cleaning Services</title>
        <meta name="title" content="End of Lease Cleaners Morphett Vale | Expert Bond Cleaning Services" />
        <meta name="description" content="Get top-quality end of lease cleaning in Morphett Vale with our expert bond cleaners. 100% bond-back guarantee, affordable rates, and real estate compliant services." />
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
          <h1>End of Lease Cleaners Morphett Vale | Expert Bond Cleaning Services</h1>
          <p>
            Seeking the assistance of good and cheap end of lease cleaning in Morphett Vale? Our professional moving out cleaners give excellent services as per real estate and you are guaranteed to get your entire bond money back.
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
              <h4>Why End of Lease Cleaning Morphett Vale?</h4>
              <ul>
                <li><p><strong>Bond Back Guarantee</strong><br />
                  We will revisit and correct issues for free if the landlord isn’t satisfied, ensuring your full bond return.
                </p></li>
                <li><p><strong>Intrusive Deep Cleaning</strong><br />
                  We clean every corner: kitchens, bathrooms, bedrooms, ceilings, walls, and more.
                </p></li>
                <li><p><strong>Professional Steam Clean Carpet</strong><br />
                  Removes dirt, stains, allergens, and prepares carpets for tough inspections.
                </p></li>
                <li><p><strong>Oven, Cooktop & Appliance Cleaning</strong><br />
                  Removes grease and grime from ovens, stovetops, rangehoods, and more.
                </p></li>
                <li><p><strong>Window/Glass Cleaning</strong><br />
                  We clean interior and accessible exterior windows including tracks and sills.
                </p></li>
                <li><p><strong>Wall, Door & Skirting Board Cleaning</strong><br />
                  Scuff marks, dust, and fingerprints are removed to ensure fresh appeal.
                </p></li>
                <li><p><strong>Bathroom Disinfecting & Dissolving</strong><br />
                  Showers, toilets, tiles, and sinks are sanitized and left gleaming.
                </p></li>
                <li><p><strong>Cleaning of Outdoor Facilities</strong><br />
                  Includes balconies, garages, and patios—swept, cobweb-free and tidy.
                </p></li>
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

      <section className="about-US mb-0">
        <div className="inner-about">
          <Row className="align-items-center">
            <Col md={12}>
              <div className="about-us-box text-center mt-5 mb-5">
                <h4>Why Choose End of Lease Cleaning Morphett Vale?</h4>
              </div>
            </Col>
            <Col md={6}>
              <div className="about-us-box">
                <ul>
                  <li><p><strong>Checklist of Approved Real Estate Cleaning</strong><br />
                    We follow strict checklists including light fittings, cupboards, and fans to meet agency standards.
                  </p></li>
                  <li><p><strong>Cleaning Carpet Professionally</strong><br />
                    Our deep carpet steam cleaning removes stains and odours, ideal for pets and kids.
                  </p></li>
                  <li><p><strong>Oven and Kitchen Appliance Cleaning</strong><br />
                    We deep clean ovens, rangehoods, and kitchen areas to meet hygiene expectations.
                  </p></li>
                  <li><p><strong>Window & Glass Cleaning</strong><br />
                    Interior and exterior glass surfaces are made spotless for inspections.
                  </p></li>
                  <li><p><strong>5 Years Experienced and Fully Insured Cleaners</strong><br />
                    Our team is trained, insured, and respectful—delivering timely, reliable cleaning.
                  </p></li>
                </ul>
                <p>
                  Don’t risk losing your bond. Trust our end of lease cleaners in Morphett Vale to deliver a perfect clean every time.
                </p>
              </div>
            </Col>

            <Col md={6}>
              <img width="100%" src="/images/carpet-cleaning.jpg" alt="End of Lease Cleaning Morphett Vale" />
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
