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
        <title>End Of Lease Cleaning Brighton | Full Bond Guarantee</title>
        <meta name="title" content="End Of Lease Cleaning Brighton | Full Bond Guarantee" />
        <meta name="description" content="End of Lease Cleaning Brighton – Reliable Cleaning for Full Bond Return. Get professional end of lease cleaners in Brighton to ensure a 100% bond refund with real estate-approved services." />
      </Helmet>

      <CustomNavbar />

      <Container fluid className="hero-section d-flex align-items-center" style={{
        backgroundImage: "url('/images/osm/exitclean.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "80vh"
      }}>
        <div className="banner-content">
          <h1>End Of Lease Cleaning Brighton | Full Bond Guarantee</h1>
          <p>
            Professional end of lease cleaners in Brighton to ensure 100% bond refund. Trusted by tenants and landlords alike.
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
              <h4>Why End of Lease Cleaning Brighton?</h4>
              <ul>
                <li><strong>Bond Refund Guarantee</strong><br />
                  Our professionals are trained to meet the high expectations of Brighton landlords and agents. We ensure your rental property is left spotless for a full bond refund.
                </li>
                <li><strong>Maintain Property Value</strong><br />
                  For landlords, a professionally cleaned property increases appeal and retains long-term value. Clean spaces attract better tenants and reduce vacancy periods.
                </li>
                <li><strong>Local Cleaning Expertise</strong><br />
                  Brighton’s coastal conditions bring salt and sand indoors. Our local team understands the unique challenges and uses the right tools and eco-friendly products to handle them.
                </li>
                <li><strong>Save Time & Energy</strong><br />
                  Moving is exhausting—leave the deep cleaning to us. We handle every detail so you can focus on your move.
                </li>
                <li><strong>Real Estate Approved Cleaning</strong><br />
                  We follow agent-approved checklists to ensure every nook and cranny is ready for final inspection—from appliances to windows and bathrooms.
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
                <h4>Benefits of Choosing Brighton End of Lease Cleaners</h4>
              </div>
            </Col>
            <Col md={6}>
              <div className="about-us-box ulli">
                <ul>
                  <li><strong>Shield Your Bond</strong><br />
                    We strictly follow real estate-approved checklists and offer a re-clean guarantee if anything is missed.
                  </li>
                  <li><strong>Custom Solutions for Brighton Homes</strong><br />
                    Our methods address Brighton’s coastal issues like salt, sand, and humidity to leave your space truly clean.
                  </li>
                  <li><strong>Simplify Your Move</strong><br />
                    Let go of stress—our trained cleaners take care of everything from carpets to ovens so you don’t have to.
                  </li>
                  <li><strong>Full Coverage of All Areas</strong><br />
                    From bathrooms and kitchens to glass, carpets and walls—we don’t miss a spot.
                  </li>
                  <li><strong>One-Stop Cleaning</strong><br />
                    We offer optional extras like steam carpet cleaning, window detailing, and oven cleaning in our complete packages.
                  </li>
                </ul>
              </div>
            </Col>

            <Col md={6}>
              <img width="100%" src="/images/carpet-cleaning.jpg" alt="End of Lease Cleaning Brighton" />
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
