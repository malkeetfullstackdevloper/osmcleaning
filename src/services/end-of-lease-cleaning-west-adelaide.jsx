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
        <title>End of Lease Cleaning West Adelaide | Bond Back Guarantee</title>
        <meta name="title" content="End of Lease Cleaning West Adelaide | Bond Back Guarantee" />
        <meta name="description" content="Expert end of lease cleaning in West Adelaide including Mile End, Thebarton and West Beach. Bond-back guarantee with real estate-approved checklist." />
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
          <h1>End of Lease Cleaning West Adelaide – Expert Cleaning for Easy Bond Return</h1>
          <p>
            Leaving West Adelaide suburbs like Mile End, Thebarton or West Beach? Our expert end of lease cleaning ensures your property is inspection-ready, clean and meets real estate expectations.
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
              <h4>Why End of Lease Cleaning West Adelaide?</h4>
              <ul>
                <li>
                  <p><strong>Maximise Bond Recovery</strong><br />
                    Get your full bond back—fast. Our expert cleaners help meet landlord and agent expectations with professional results.
                  </p>
                </li>
                <li>
                  <p><strong>Pass Real Estate Rental Requirements</strong><br />
                    We’re experienced with local checklists and compliance—ensuring your property is cleaned to meet final inspection standards.
                  </p>
                </li>
                <li>
                  <p><strong>Time and Energy Saving</strong><br />
                    Let us handle the deep cleaning while you focus on packing and relocating. We clean quickly and thoroughly.
                  </p>
                </li>
                <li>
                  <p><strong>Local Property Know-How</strong><br />
                    From character homes to new builds, we understand West Adelaide properties and use the right products and techniques.
                  </p>
                </li>
                <li>
                  <p><strong>Ready for the Next Tenant</strong><br />
                    For landlords, our cleaning ensures your property is market-ready—attracting high-quality tenants with a clean presentation.
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
                <h4>The Reason to Clean with End of Lease Cleaning West Adelaide</h4>
              </div>
            </Col>
            <Col md={6}>
              <div className="about-us-box">
                <ul>
                  <li>
                    <p><strong>1. Simple Confidence with Bond Back Guarantee</strong><br />
                      We clean using real estate-approved checklists—helping you secure your full bond return without stress.
                    </p>
                  </li>
                  <li>
                    <p><strong>2. Tailored to West Adelaide Homes</strong><br />
                      From heritage homes to modern units, we clean using the right methods for different building types and materials.
                    </p>
                  </li>
                  <li>
                    <p><strong>3. Save Time and Energy</strong><br />
                      Skip the DIY clean. Our team handles everything from windows to carpets so you can focus on your move.
                    </p>
                  </li>
                  <li>
                    <p><strong>4. Quality, Consistency, Responsibility</strong><br />
                      Our team is trained and well-equipped—delivering full-service cleaning including kitchens, bathrooms, carpets, and more.
                    </p>
                  </li>
                  <li>
                    <p><strong>5. Trusted by Property Managers</strong><br />
                      Many local agencies recommend using professional end of lease cleaners—ensuring stress-free final inspections.
                    </p>
                  </li>
                </ul>
                <p>
                  Book OSM Cleaning Services in West Adelaide today to experience hassle-free, professional-grade end of lease cleaning. Make your exit smooth and your bond recovery certain.
                </p>
              </div>
            </Col>
            <Col md={6}>
              <img width="100%" src="/images/carpet-cleaning.jpg" alt="End of Lease Cleaning West Adelaide" />
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
