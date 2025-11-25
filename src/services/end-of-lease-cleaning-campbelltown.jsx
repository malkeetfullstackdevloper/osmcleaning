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
        <title>End Of Lease Cleaning Campbelltown | Bond Back Guarantee</title>
        <meta name="title" content="End Of Lease Cleaning Campbelltown | Bond Back Guarantee" />
        <meta name="description" content="Professional 100 percent bond back end of lease clean in Campbelltown. You can rely on us, it is cheap, and open 7 days a week. Reserve your stress free move-out cleaning now!" />
      </Helmet>

      <CustomNavbar />

      <Container fluid className="hero-section d-flex align-items-center" style={{
        backgroundImage: "url('/images/osm/exitclean.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "80vh"
      }}>
        <div className="banner-content">
          <h1>End Of Lease Cleaning Campbelltown | Bond Back Guarantee</h1>
          <p>
            Professional 100 percent bond back end of lease clean in Campbelltown. You can rely on us, it is cheap, and open 7 days a week. Reserve your stress free move-out cleaning now!
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
              <h4>What Is Our End of Lease Cleaning Services?</h4>
              <p>Getting out of a house rented in Campbelltown? We will remove the pressure of your end of rentals clean. Tenants, landlords and property managers throughout the Campbelltown area trust our professional end of lease cleaning service which is delivered throughout the Campbelltown area. And it is because of this that we are the best:</p>
              <ul>
                <li><strong>Bond Back Guarantee</strong><br />
                  We have an obligation to assist you to get back your entire bond payment. We also have a 100% bond back guarantee behind our service, such that in the event that something should be left out we will be back out to re clean it at no charges.
                </li>
                <li><strong>Real Estate Approved Checklist Detailed</strong><br />
                  We possess a carefully thought-out checklist that our cleaning process follows in accordance with the requirements of a local real estate and property manager. This would make sure that all rooms were inspected at a quality standard to avert any possibility of deductions.
                </li>
                <li><strong>Professional, Covered Group Cleaning</strong><br />
                  Our cleaners are fully trained, experienced and are insured. You will know that your home is in safe hands, and much care is taken to every surface, appliance, and secret corner.
                </li>
                <li><strong>Value Pricing</strong><br />
                  No surprises. There are just the straightforward prices. You can be assured of reasonable fixed-rate packages, per the size and nature of your property, all inclusive, no last minute surprises here.
                </li>
                <li><strong>Complete Cleaning Services</strong><br />
                  We take care of all what you need to have smooth handover. Whether steam cleaning carpets, scrubbing ovens, cleaning windows and removing wall spots we provide a complete package of end of lease services with optional extras on request.
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
                <h4>What Makes End of Lease Cleaning Campbelltown?</h4>
              </div>
            </Col>
            <Col md={6}>
              <div className="about-us-box ulli">
                <ul>
                  <li><strong>Overall Cleaning of Property</strong><br />
                    We serve all residential areas in your property including kitchens, bathrooms, bedrooms, living areas, floors, walls among others. Our thorough cleaning extends into ovens and rangehoods to the sinks, showers and tubs.
                  </li>
                  <li><strong>The Carpet Steam Cleaning</strong><br />
                    We provide professional carpet steam cleaning both as an add-on or on certain packages. This assists in eliminating stains, smells and allergens and makes your carpets clean and new looking like they never had them to match real estate requirements.
                  </li>
                  <li><strong>Window, & Glass Cleaning</strong><br />
                    It is important to impress by means of crystal-clean windows and glass doors during the inspections. We clean both exterior and interiors (as much as possible), window tracks and frames etc to ensure everything is smear-free and spotless at the end of our cleaning.
                  </li>
                  <li><strong>Qualified, Insurance, and Dependable Cleansers</strong><br />
                    The cleaners who work with us have all been trained, checked on background and insured. Having experienced several years of being in business as end of lease cleaners, they are familiar with exactly what landlords desire as well as how to provide the same by the results that achieve even the most stringent inspection checklist.
                  </li>
                </ul>
              </div>
            </Col>

            <Col md={6}>
              <img width="100%" src="/images/carpet-cleaning.jpg" alt="End of Lease Cleaning Campbelltown" />
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
