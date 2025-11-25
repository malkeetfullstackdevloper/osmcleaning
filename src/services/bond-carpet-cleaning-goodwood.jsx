import React from "react";
import CustomNavbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactForm2 from "../components/ContactForm2";
import { Container, Row, Col } from "react-bootstrap";
import { Helmet } from "react-helmet";
import BannerButtons from "../components/BannerButtons";

function BondCarpetCleaningGoodwood() {
  return (
    <>
      <Helmet>
        <title>
          Bond and Carpet Cleaning Goodwood - OSM Cleaning Services
        </title>
        <meta
          name="title"
          content="Bond and Carpet Cleaning Goodwood - OSM Cleaning Services"
        />
        <meta
          name="description"
          content="Professional bond and carpet cleaning in Goodwood with eco-friendly carpet care, flexible booking, and a bond-back guarantee. Call OSM Cleaning Services at 04316 45222."
        />
      </Helmet>

      <CustomNavbar />

      {/* Hero Section */}
      <Container
        fluid
        className="hero-section d-flex align-items-center"
        style={{
          backgroundImage: "url('/images/End-of-Lease-Cleaning.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "80vh",
        }}
      >
        <div className="banner-content">
          <h1>
            Personalised Bond and Carpet Cleaning in Goodwood – Stress-Free
            Move-Out
          </h1>
          <p>
            Looking for reliable exit and carpet cleaning in Goodwood? OSM
            Cleaning Services provides full-proof solutions tailored to your
            needs with bond-back assurance and flexible booking.
          </p>
          <div className="appointment-btn">
            <BannerButtons />
          </div>
        </div>
      </Container>

      {/* Service Details */}
      <Container>
        <Row>
          <Col md={6} className="about-US22 mb-0">
            <div className="about-US22-box servicepage">
              <p>
                Leaving a property can be exciting, but it also requires
                top-notch cleaning before the final inspection. At OSM Cleaning
                Services, our{" "}
                <strong>bond and carpet cleaning Goodwood service</strong> makes
                sure you leave your rental spotless. Call{" "}
                <a href="tel:0431645222">04316 45222</a> or email{" "}
                <a href="mailto:Osmcleaningservices@gmail.com">
                  Osmcleaningservices@gmail.com
                </a>{" "}
                to book your service.
              </p>

              <h4>
                Top Features of Our Bond and Carpet Cleaning Goodwood Service
              </h4>
              <h5>1. Comprehensive Cleaning Packages</h5>
              <p>
                From skirting boards to window tracks and carpet steam cleaning,
                our packages cover everything.
              </p>
              <h5>2. Advanced Carpet Care</h5>
              <p>
                We use eco-friendly compounds, hot water extraction, and deep
                stain removal techniques to restore carpets fully.
              </p>
              <h5>3. End of Lease Compliance</h5>
              <p>
                Cleaning is done in line with landlord and property manager
                checklists to meet inspection standards.
              </p>
              <h5>4. Flexible Scheduling</h5>
              <p>
                Evening and weekend appointments available to suit your moving
                plans.
              </p>
              <h5>5. Skilled Professionals</h5>
              <p>
                Our insured, trained, and experienced cleaners provide peace of
                mind and consistent results.
              </p>

              <h4>Why Choose Us?</h4>
              <ul className="ul_li">
                <li>
                  <strong>Bond-Back Guarantee:</strong> Free re-clean if your
                  landlord isn’t satisfied.
                </li>
                <li>
                  <strong>One-Stop Solution:</strong> Bond and carpet cleaning
                  combined into one service.
                </li>
                <li>
                  <strong>Attention to Detail:</strong> We tackle stains,
                  appliances, and even mould with precision.
                </li>
                <li>
                  <strong>Local Goodwood Expertise:</strong> We know what local
                  landlords expect and deliver beyond that.
                </li>
                <li>
                  <strong>Transparent Pricing:</strong> Affordable and
                  no-surprise quotes.
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

      {/* FAQ Section */}
      <section className="about-US3 mb-0 btop">
        <div className="inner-about">
          <h3 className="text-center propswhite">FAQs – Bond and Carpet Cleaning in Goodwood</h3>
          <ol className="ol_li mt-4">
            <li>
              <strong>
                Will I definitely get my bond back if I use your cleaning
                service?
              </strong>
              <p>
                We clean to real estate standards, which maximises your chance
                of a full bond return. If something is missed, we’ll re-clean
                for free. Final approval rests with the landlord or property
                manager.
              </p>
            </li>
            <li>
              <strong>
                How long will bond and carpet cleaning take in Goodwood?
              </strong>
              <p>
                For a standard two-bedroom apartment, it usually takes 6–8
                hours. Larger properties take longer depending on size and
                condition.
              </p>
            </li>
          </ol>
        </div>
      </section>

      {/* Areas We Serve */}
      <section className="about-US33 mb-0">
        <div className="inner-about propsblue">
          <h4>Bond and Carpet Cleaning Goodwood – Other Areas We Serve</h4>
          <Row className="mt-4">
            <Col md={6}>
              <p>
                <strong>North:</strong> Salisbury, Mawson Lakes, Parafield
                Gardens, Golden Grove, Elizabeth, Tea Tree Gully, Angle Vale,
                Gawler
              </p>
              <p>
                <strong>South:</strong> Morphett Vale, Christies Beach, Seaford,
                Hallett Cove, Aldinga Beach, Noarlunga, Reynella
              </p>
            </Col>
            <Col md={6}>
              <p>
                <strong>East:</strong> Campbelltown, Athelstone, Hectorville,
                Rostrevor, Tranmere
              </p>
              <p>
                <strong>West:</strong> Glenelg, Glenelg North, Plympton, Marion,
                Henley Beach, West Lakes, Fulham Gardens, Brighton, Semaphore,
                Port Adelaide
              </p>
            </Col>
          </Row>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="about-US3 propswhite mb-0 text-center">
        <div className="inner-about">
          <h4>Book Bond and Carpet Cleaning in Goodwood Today</h4>
          <p>
            Make your move-out stress-free with OSM Cleaning Services. Call{" "}
            <a href="tel:0431645222" className="txtred">
              04316 45222
            </a>{" "}
            or email{" "}
            <a href="mailto:Osmcleaningservices@gmail.com" className="txtred">
              Osmcleaningservices@gmail.com
            </a>{" "}
            to schedule your service today.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default BondCarpetCleaningGoodwood;
