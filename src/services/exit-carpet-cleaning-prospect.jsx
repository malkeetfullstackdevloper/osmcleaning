import React from "react";
import CustomNavbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactForm2 from "../components/ContactForm2";
import { Container, Row, Col } from "react-bootstrap";
import { Helmet } from "react-helmet";
import BannerButtons from "../components/BannerButtons";
import LeaseCleaningPosts from "../posts/LeaseCleaningPosts";
import WeClean from "../components/weclean";

function ExitCarpetCleaningProspect() {
  return (
    <>
      <Helmet>
        <title>
          Exit and Carpet Cleaning Prospect - OSM Cleaning Services
        </title>
        <meta
          name="title"
          content="Exit and Carpet Cleaning Prospect - OSM Cleaning Services"
        />
        <meta
          name="description"
          content="Reliable exit and carpet cleaning in Prospect with bond back guarantee, eco-safe products, and flexible booking. Call OSM Cleaning Services at 04316 45222."
        />
      </Helmet>

      <CustomNavbar />

      {/* Hero Section */}
      <Container
        fluid
        className="hero-section d-flex align-items-center"
        style={{
          backgroundImage: "url('/images/osm/carpetsteamclean.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "80vh",
        }}
      >
        <div className="banner-content">
          <h1>
            Fantastic Exit and Carpet Cleaning Prospect – Transforming the Local
            Properties
          </h1>
          <p>
            Moving out of a rental or keeping it pristine isn’t just a quick
            tidy-up. With OSM Cleaning Services, get reliable bond and carpet
            cleaning in Prospect, simplified with modern techniques and flexible
            timelines.
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
                Connect with OSM Cleaning Services for reliable and full-proof
                bond and carpet cleaning in Prospect. Contact us at{" "}
                <a href="tel:0431645222">04316 45222</a> or write to{" "}
                <a href="mailto:Osmcleaningservices@gmail.com">
                  Osmcleaningservices@gmail.com
                </a>{" "}
                to book top-rated services at easy prices. With effective new
                cleaning techniques, we simplify end-of-lease cleaning and deep
                carpet cleaning.
              </p>

              <h4>
                Starred Features of Our Exit and Carpet Cleaning Prospect
                Services
              </h4>
              <h5>1. Complete Exit Cleaning</h5>
              <p>
                We attend to every part of your property, from kitchens and
                bathrooms to windows, walls, and skirting boards, ensuring it
                meets real estate checklist compliance.
              </p>
              <h5>2. Professional Carpet Cleaning</h5>
              <p>
                Carpets are revitalised with perfected steam and hot water
                extraction methods to remove stains, dust mites, and allergens.
              </p>
              <h5>3. Eco-Safe Cleaning Products</h5>
              <p>
                All cleaning agents are eco-safe, pet-safe, and child-safe for
                responsible cleaning.
              </p>
              <h5>4. Tailored Solutions</h5>
              <p>
                Services customised according to your property’s condition and
                landlord expectations.
              </p>
              <h5>5. Speed and Flexibility</h5>
              <p>
                Flexible booking windows and rapid completion make your move
                stress-free.
              </p>

              <h4>What Makes Us Different?</h4>
              <ul className="ul_li">
                <li>
                  <strong>Expertise You Can Rely On:</strong> Certified,
                  experienced cleaners for all property sizes.
                </li>
                <li>
                  <strong>Real Estate Approved:</strong> Cleaning aligned with
                  landlord & manager inspection standards.
                </li>
                <li>
                  <strong>Bond Back Guarantee:</strong> Free re-clean if your
                  landlord isn’t satisfied.
                </li>
                <li>
                  <strong>Reasonable Rates:</strong> Transparent, affordable
                  pricing without compromising quality.
                </li>
                <li>
                  <strong>Local Expertise:</strong> Serving Prospect with a
                  trusted community reputation.
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
    
      {/* Process Section */}
      <section className="about-US3 mb-0 btop">
        <div className="inner-about">
          <Row className="align-items-center">
            <Col md={6}>
              <div className="about-US22-box pros">
                <h3>Our Process for Exit and Carpet Cleaning in Prospect</h3>
                <ol className="ol_li">
                  <li>
                    <strong>Inspection & Planning:</strong> Review property,
                    note problem stains/areas.
                  </li>
                  <li>
                    <strong>Detailed Bond Cleaning:</strong> Every room,
                    cupboard, appliance, and surface is cleaned thoroughly.
                  </li>
                  <li>
                    <strong>Deep Carpet Cleaning:</strong> Steam and machine
                    cleaning revives carpets fully.
                  </li>
                  <li>
                    <strong>Final Touch-Ups:</strong> Polished, sanitised, and
                    checklist-ready.
                  </li>
                  <li>
                    <strong>Customer Feedback:</strong> Walk-through with client
                    to ensure satisfaction.
                  </li>
                </ol>
              </div>
            </Col>
            <Col md={6}>
              <img
                width="100%"
                src="/images/carpet-cleaning.jpg"
                alt="Carpet Cleaning Prospect"
              />
            </Col>
          </Row>
        </div>
      </section>

      {/* Areas We Serve */}
      <section className="about-US33 mb-0">
        <div className="inner-about propsblue">
          <h4>Bond and Carpet Cleaning Prospect – Other Areas We Serve</h4>
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
          <h4>Contact Us Today – Make Your Rental Exit Flawless</h4>
          <p>
            Whether it’s exit cleaning or carpet cleaning in Prospect, our
            dedicated team ensures a relaxed moving experience. Call{" "}
            <a href="tel:0431645222" className="txtred">04316 45222</a> or email{" "}
            <a href="mailto:Osmcleaningservices@gmail.com" className="txtred">
              Osmcleaningservices@gmail.com
            </a>{" "}
            to book now.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default ExitCarpetCleaningProspect;
