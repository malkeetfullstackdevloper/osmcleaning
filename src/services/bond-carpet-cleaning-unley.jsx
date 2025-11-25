import React from "react";
import CustomNavbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactForm2 from "../components/ContactForm2";
import { Container, Row, Col } from "react-bootstrap";
import { Helmet } from "react-helmet";
import BannerButtons from "../components/BannerButtons";

function BondCarpetCleaningUnley() {
  return (
    <>
      <Helmet>
        <title>Bond and Carpet Cleaning Unley - OSM Cleaning Services</title>
        <meta
          name="title"
          content="Bond and Carpet Cleaning Unley - OSM Cleaning Services"
        />
        <meta
          name="description"
          content="Reliable bond and carpet cleaning in Unley with eco-friendly products, flexible booking, and bond-back guarantee. Call OSM Cleaning Services at 04316 45222."
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
            Reliable Bond and Carpet Cleaning in Unley – Move-Out Made Easy
          </h1>
          <p>
            OSM Cleaning Services delivers professional bond and carpet cleaning
            in Unley. With eco-friendly solutions, advanced tools, and a
            bond-back guarantee, we make your move stress-free.
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
                Moving out or refreshing your home? Our{" "}
                <strong>bond and carpet cleaning Unley</strong> service ensures
                your property meets inspection standards. Contact us at{" "}
                <a href="tel:0431645222">04316 45222</a> or email{" "}
                <a href="mailto:Osmcleaningservices@gmail.com">
                  Osmcleaningservices@gmail.com
                </a>{" "}
                to book your service.
              </p>

              <h4>Features of Our Bond and Carpet Cleaning Unley Service</h4>
              <h5>1. Comprehensive Bond Cleaning</h5>
              <p>
                Personalised cleaning checklist covering kitchens, bathrooms,
                walls, windows, and fixtures.
              </p>
              <h5>2. Result-Oriented Carpet Cleaning</h5>
              <p>
                Deep cleaning to remove dirt, dust, and stains from all carpet
                types.
              </p>
              <h5>3. Advanced Cleaning Tools</h5>
              <p>
                Our team uses safe, professional-grade tools for lasting
                results.
              </p>
              <h5>4. Eco-Friendly Solutions</h5>
              <p>
                We use biodegradable cleaning products to keep your home safe
                and hygienic.
              </p>
              <h5>5. Flexible Scheduling</h5>
              <p>
                Evening and weekend slots available to match your relocation
                plans.
              </p>

              <h4>Why Choose Us?</h4>
              <ul className="ul_li">
                <li>
                  <strong>Experienced Professionals:</strong> Skilled cleaners
                  who know inspection checklists inside out.
                </li>
                <li>
                  <strong>Quality Results:</strong> Long-lasting bond and carpet
                  cleaning with proven methods.
                </li>
                <li>
                  <strong>Bond-Back Guarantee:</strong> Free re-clean if your
                  landlord isn’t satisfied.
                </li>
                <li>
                  <strong>Transparent Pricing:</strong> No hidden fees — just
                  clear quotes.
                </li>
                <li>
                  <strong>Local Unley Expertise:</strong> Trusted by Unley
                  tenants and property managers.
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

      {/* Areas We Serve */}
      <section className="about-US33 mb-0">
        <div className="inner-about propsblue">
          <h4>Bond and Carpet Cleaning Unley – Other Areas We Serve</h4>
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
          <h4>Book Bond and Carpet Cleaning in Unley Today</h4>
          <p>
            Our dedicated team ensures pristine results and a stress-free
            relocation. Call{" "}
            <a href="tel:0431645222" className="txtred">
              04316 45222
            </a>{" "}
            or email{" "}
            <a href="mailto:Osmcleaningservices@gmail.com" className="txtred">
              Osmcleaningservices@gmail.com
            </a>{" "}
            to schedule your Unley service today.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default BondCarpetCleaningUnley;
