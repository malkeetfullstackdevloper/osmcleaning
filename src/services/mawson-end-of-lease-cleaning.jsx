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
        <title>Mawson End of Lease Cleaning | Trustworthy and Cheap</title>
        <meta name="title" content="Mawson End of Lease Cleaning | Trustworthy and Cheap" />
        <meta name="description" content="Our end of lease cleaning service in Mawson offers a top to bottom clean that goes over every square inch of the home as per real estate norms- so you can get the money back at the end of the lease." />
      </Helmet>

      <CustomNavbar />

      <Container fluid className="hero-section d-flex align-items-center" style={{
        backgroundImage: "url('/images/osm/exitclean.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "80vh"
      }}>
        <div className="banner-content">
          <h1>Mawson End of Lease Cleaning | Trustworthy and Cheap</h1>
          <p>
            Our end of lease cleaning service in Mawson offers a top to bottom clean that goes over every square inch of the home as per real estate norms—so you can get the money back at the end of the lease. We can provide the cheapest prices, unique timings, and qualified cleaners who are attentive to the smallest details.
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
              <h4>Reasons to Hire End of Lease Cleaning Mawson</h4>
              <ul>
                <li><p><strong>Kitchen Cleaning</strong><br />
                  Our kitchen cleaning experts do a rigorous cleaning and degreasing of ovens, stovetops, rangehoods, benches, sinks and cupboards with a cleaning inside and outside of a cupboard. We make sure that all the surfaces are clean, we eliminate the grease, stains and food leftovers to leave your kitchen clean and hygienic.
                </p></li>
                <li><p><strong>Laundry and Bathroom Cleaning</strong><br />
                  We clean thoroughly by cleaning every corner in your washroom and restroom, especially the showers, bath tubs, toilets, sinks, tiles, and mirrors and fittings. All corners are cleaned and wiped to meet the cleanliness conditions necessary for end of lease inspections.
                </p></li>
                <li><p><strong>Living and Bedrooms</strong><br />
                  Bedrooms and living areas are well cleaned and dusted with walls, window shelves, skirting boards, and wardrobes wiped. We clean floors including vacuuming and mopping, and make sure all surfaces are dust and dirt free.
                </p></li>
                <li><p><strong>Optional Add-Ons</strong><br />
                  Optional extras include carpet steam cleaning, balcony and garage cleaning, and deep cleaning of appliances tailored to your property’s needs.
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
                <h4>What Makes End of Lease Cleaning Mawson a Good Choice?</h4>
              </div>
            </Col>
            <Col md={6}>
              <div className="about-us-box">
                <ul>
                  <li><p><strong>Professional and Good Cleaning</strong><br />
                    We make sure that all corners of your property have been cleaned to the best level demanded by real estate agents and landlords.
                  </p></li>
                  <li><p><strong>Team of Experienced and Insured Cleaners</strong><br />
                    Our cleaners are well-trained professionals and are fully insured, giving you peace of mind.
                  </p></li>
                  <li><p><strong>Bond-Back Guarantee</strong><br />
                    To ensure that you get your full bond back without any trouble, we provide a bond-back guarantee.
                  </p></li>
                  <li><p><strong>Flexible Scheduling</strong><br />
                    Book appointments according to your moving schedule—including weekends and after hours.
                  </p></li>
                  <li><p><strong>Low Price and Fair Pricing</strong><br />
                    We offer straightforward pricing with no hidden fees—you’ll always know what you're paying for.
                  </p></li>
                  <li><p><strong>Green Cleaning Products</strong><br />
                    Our cleaning products are non-toxic, eco-friendly, and safe for your pets and family.
                  </p></li>
                  <li><p><strong>Tailor-Made Cleaning Services</strong><br />
                    Add-ons like carpet steam cleaning, balcony cleaning, and garage cleaning available to meet your needs.
                  </p></li>
                  <li><p><strong>Quality and Dependable Service</strong><br />
                    We are known for our reliability and punctuality—you can count on us to make your property inspection-ready.
                  </p></li>
                </ul>
              </div>
            </Col>

            <Col md={6}>
              <img width="100%" src="/images/carpet-cleaning.jpg" alt="End of Lease Cleaning Mawson" />
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
