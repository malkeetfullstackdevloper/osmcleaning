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
        <title>Lease Cleaning Services Unley | Bond Cleaning Experts</title>
        <meta name="title" content="Lease Cleaning Services Unley | Bond Cleaning Experts" />
        <meta name="description" content="Professional End of Lease Cleaning in Unley. Ensure a stress-free bond return with expert cleaners who meet all inspection standards. Call now!" />
      </Helmet>

      <CustomNavbar />

      <Container fluid className="hero-section d-flex align-items-center" style={{
        backgroundImage: "url('/images/osm/exitclean.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "80vh"
      }}>
        <div className="banner-content">
          <h1>Lease Cleaning Services Unley | Bond Cleaning Experts</h1>
          <p>
            Comprehensive end of lease cleaning in Unley with bond-back guarantee. Fully insured, agent-approved, and custom tailored to your property.
          </p>
          <div className="appointment-btn">
            <BannerButtons />
          </div>
        </div>
      </Container>

      <Container>
        <Row>
          <Col md={6} className="about-US mb-0">
            <div className="about-us-box servicepage liul">
              <h4>What’s Included in Our End of Lease Cleaning – Unley</h4>
              <ul>
                <li><strong>Kitchen Deep Cleaning</strong><br />
                  Full oven, range hood, stovetop degreasing. Benches, sinks, splashbacks, cupboards (inside-out), light switches and skirting boards all cleaned to shine.
                </li>
                <li><strong>Bathroom & Laundry Detailing</strong><br />
                  Tiles, showers, tubs, toilets, mirrors, and grout scrubbed. Limescale, mould, and soap scum removed. Ventilation and exhaust fans also addressed.
                </li>
                <li><strong>Living Room & Bedroom Refresh</strong><br />
                  Skirting boards, switches, power points, wardrobes, and furniture dusted and wiped. Floors vacuumed/mopped and all cobwebs removed.
                </li>
                <li><strong>Add-On Services</strong><br />
                  Steam carpet cleaning, full window cleans, wall spot cleans, balcony/garage clean, mattress sanitising, appliance detailing, and more.
                </li>
                <li><strong>Eco-Conscious Materials</strong><br />
                  We use only non-toxic and environmentally friendly products safe for kids and pets.
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

      <section className="about-US mb-0">
        <div className="inner-about">
          <Row className="align-items-center">
            <Col md={12}>
              <div className="about-us-box text-center mt-5 mb-5">
                <h4>Why Choose Us for End of Lease Cleaning in Unley?</h4>
              </div>
            </Col>
            <Col md={6}>
              <div className="about-us-box ulli">
                <ul>
                  <li><strong>Bond-Back Focus</strong><br />
                    We aim for full compliance with landlord/agent checklists to help recover your full bond.
                  </li>
                  <li><strong>Experienced Local Professionals</strong><br />
                    Our team knows exactly what Unley real estate managers expect—and delivers every time.
                  </li>
                  <li><strong>Room-by-Room Thoroughness</strong><br />
                    No corner is missed. Every room cleaned using commercial tools and standards.
                  </li>
                  <li><strong>Flexible Extras Available</strong><br />
                    From carpet steam to oven detailing—customize your clean as per property requirements.
                  </li>
                  <li><strong>Zero-Stress Moving</strong><br />
                    Spend less time worrying about cleaning and more time planning your next chapter.
                  </li>
                </ul>
              </div>
            </Col>

            <Col md={6}>
              <img width="100%" src="/images/carpet-cleaning.jpg" alt="Lease Cleaning Unley" />
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
