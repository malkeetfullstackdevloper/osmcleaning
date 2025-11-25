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
        <title>Professional End of Lease Cleaning Mitchell Park | Real Estate Approved</title>
        <meta name="title" content="Professional End of Lease Cleaning Mitchell Park | Real Estate Approved" />
        <meta name="description" content="Leave your Mitchell Park rental spotless with professional end of lease cleaning. 100% bond back guarantee. Real estate approved checklist. Book now!" />
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
          <h1>Professional End of Lease Cleaning Mitchell Park | Real Estate Approved</h1>
          <p>
            Leaving a house in Mitchell Park on rent? Let us assist you in ensuring it’s ready for inspection. Tenants, landlords, and agents trust our reliable and precise service.
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

              <h4>So What Do Our End of Lease Cleaning Services Do?</h4>
              <ul>
                <li>
                  <p><strong>Bond Back Guarantee</strong><br />
                    We guarantee a 100% bond return. If the property manager finds any issue with the clean, we offer a free fix—giving you peace of mind.
                  </p>
                </li>
                <li>
                  <p><strong>General Interior Restoration</strong><br />
                    Full top-to-bottom cleaning: walls, ceilings, switches, floors, skirting, kitchen, bathroom, and more. Our checklist meets real estate standards.
                  </p>
                </li>
                <li>
                  <p><strong>Retail Carpet Steam Cleaning</strong><br />
                    Our deep steam carpet cleaning removes stains, dirt, and allergens—ideal for lease agreements requiring professional carpet cleaning.
                  </p>
                </li>
                <li>
                  <p><strong>Oven & Appliance Cleaning</strong><br />
                    We scrub ovens, stovetops, rangehoods, and other appliances clean of grease and grime—passing even the strictest inspections.
                  </p>
                </li>
                <li>
                  <p><strong>Window & Glass Cleaning</strong><br />
                    We clean all internal windows and accessible external glass surfaces including tracks—leaving the property looking bright and cared for.
                  </p>
                </li>
                <li>
                  <p><strong>Professional, Vetted Staff</strong><br />
                    Our team is fully trained, insured, and background checked. We’re experienced in end-of-lease expectations and deliver excellence every time.
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

      {/* Why Choose Us Section */}
      <section className="about-US mb-0">
        <div className="inner-about">
          <Row className="align-items-center">
            <Col md={12}>
              <div className="about-us-box text-center mt-5 mb-5">
                <h4>Why Use Our End of Lease Cleaning in Mitchell Park?</h4>
              </div>
            </Col>

            <Col md={6}>
              <div className="about-us-box">
                <ul>
                  <li>
                    <p><strong>Real Estate Checklist Approved</strong><br />
                      We follow agent-approved cleaning lists to cover floors, walls, kitchens, bathrooms, and more—ensuring you meet every inspection standard.
                    </p>
                  </li>
                  <li>
                    <p><strong>Deep Room Cleaning</strong><br />
                      Every corner gets attention. From ceiling fans to marked walls, we do detailed cleaning that leaves your home feeling fresh and ready.
                    </p>
                  </li>
                  <li>
                    <p><strong>Steam Carpet Cleaning</strong><br />
                      Our industrial-grade carpet steamers tackle stains, odors, and dirt, leaving carpets clean and compliant with lease agreements.
                    </p>
                  </li>
                  <li>
                    <p><strong>Oven & Appliance Detailing</strong><br />
                      We target kitchen appliances, including microwaves and rangehoods, for a spotless, hygienic result that passes property manager checks.
                    </p>
                  </li>
                  <li>
                    <p><strong>Trained, Insured Professionals</strong><br />
                      Our staff are prompt, experienced, and respectful of your property. We arrive on time and complete your cleaning with care and efficiency.
                    </p>
                  </li>
                </ul>

                <p>
                  Let OSM Cleaning Services in Mitchell Park help you move stress-free and reclaim your full bond. Book today and experience professional cleaning with guaranteed results.
                </p>

              </div>
            </Col>

            <Col md={6}>
              <img width="100%" src="/images/carpet-cleaning.jpg" alt="End of Lease Cleaning Mitchell Park" />
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
