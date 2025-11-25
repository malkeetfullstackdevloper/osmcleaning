import React from "react";
import CustomNavbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactForm2 from "../components/ContactForm2";
import { Container, Row, Col } from "react-bootstrap";
import { Helmet } from "react-helmet";
import BannerButtons from "../components/BannerButtons";

function BondCarpetCleaningBurnside() {
return (
<> <Helmet> <title>Bond and Carpet Cleaning Burnside - OSM Cleaning Services</title> <meta
       name="title"
       content="Bond and Carpet Cleaning Burnside - OSM Cleaning Services"
     /> <meta
       name="description"
       content="OSM Cleaning Services offers professional bond and carpet cleaning in Burnside. Affordable, reliable, and safe cleaning with a bond-back guarantee."
     /> </Helmet>

  <CustomNavbar />

  {/* Hero Section */}
  <Container
    fluid
    className="hero-section d-flex align-items-center"
    style={{
      backgroundImage: "url('/images/osm/rugclean.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      height: "80vh",
    }}
  >
    <div className="banner-content">
      <h1>Personalised Bond and Carpet Cleaning Services in Burnside</h1>
      <p>
        Don’t risk losing your rental deposit! OSM Cleaning Services
        provides comprehensive bond and carpet cleaning in Burnside, designed
        to meet inspection standards and guarantee a smooth bond refund.
      </p>
      <div className="appointment-btn">
        <BannerButtons />
      </div>
    </div>
  </Container>

  {/* About Section */}
  <Container className="py-5">
    <Row className="align-items-center">
      <Col md={12}>
        <h2 className="fw-bold mb-4">Bond and Carpet Cleaning Burnside</h2>
        <p>
          We offer secure, reliable, and efficient bond and carpet cleaning
          services in Burnside. From residential to commercial spaces, our
          team ensures every corner is cleaned thoroughly to pass final
          inspections. Carpets are restored with deep cleaning methods to
          extend their lifespan and remove allergens.
        </p>
        <p>
          Call us at <a href="tel:0431645222">0431645222</a> or email{" "}
          <a href="mailto:osmcleaningservices@gmail.com">
            osmcleaningservices@gmail.com
          </a>{" "}
          to book professional cleaning services on your preferred dates.
        </p>
      </Col>
    </Row>
  </Container>

  {/* Features Section */}
  <Container fluid className="py-5 bg-light">
    <Container>
      <h2 className="fw-bold text-center mb-5">
        Starred Qualities of Our Bond and Carpet Cleaning Service Burnside
      </h2>
      <Row className="g-4 godd">
        <Col md={6} lg={3}>
          <h5>Comprehensive End-of-Lease Cleaning</h5>
          <p>
            From walls, floors, kitchens, bathrooms, blinds, and skirting
            boards — we clean every detail for inspection readiness and real
            estate compliance.
          </p>
        </Col>
        <Col md={6} lg={3}>
          <h5>Carpet Cleaning Without Comparison</h5>
          <p>
            Our steam cleaning eliminates allergens, stains, and dust,
            rejuvenating carpets for a healthier and fresher home or office.
          </p>
        </Col>
        <Col md={6} lg={3}>
          <h5>Reliable & Timely Service</h5>
          <p>
            We understand tight moving deadlines. Our professional cleaners
            always arrive on time and deliver results promptly.
          </p>
        </Col>
        <Col md={6} lg={3}>
          <h5>Mind the Inspection</h5>
          <p>
            We clean with the ultimate goal of ensuring your bond refund is
            smooth, dispute-free, and guaranteed.
          </p>
        </Col>
      </Row>
    </Container>
  </Container>

  {/* Why Choose Us */}
  <Container className="py-5">
    <h2 className="fw-bold text-center mb-5">Why Pick Us for Bond & Carpet Cleaning in Burnside?</h2>
    <Row className="g-4 godd">
      <Col md={6} lg={4}>
        <h5>We Know Our Stuff</h5>
        <p>
          Years of experience allow us to clean properties to landlord and
          agent standards for smooth inspections.
        </p>
      </Col>
      <Col md={6} lg={4}>
        <h5>Cool Tools</h5>
        <p>
          Equipped with modern vacuums and hot water extractors, we deliver
          unmatched deep-cleaning results.
        </p>
      </Col>
      <Col md={6} lg={4}>
        <h5>Get Your Bond Back</h5>
        <p>
          Our bond-focused cleaning ensures a higher chance of a full refund
          without disputes or deductions.
        </p>
      </Col>
      <Col md={6} lg={4}>
        <h5>Works With Your Schedule</h5>
        <p>
          Same-day, weekday, or weekend — we adapt to your preferred
          schedule for convenience and peace of mind.
        </p>
      </Col>
      <Col md={6} lg={4}>
        <h5>No Secrets</h5>
        <p>
          Transparent pricing with no hidden costs. The quote you get is the
          price you pay, guaranteed.
        </p>
      </Col>
    </Row>
  </Container>

  {/* Service Areas Section */}
  <Container fluid className="py-5 bg-light">
    <Container>
      <h2 className="fw-bold text-center mb-4">Bond and Carpet Cleaning Burnside – Other Areas We Serve</h2>
      <Row>
        <Col md={3}>
          <h5>North</h5>
          <p>Salisbury, Mawson Lakes, Parafield Gardens, Golden Grove, Elizabeth, Tea Tree Gully, Angle Vale, Gawler</p>
        </Col>
        <Col md={3}>
          <h5>South</h5>
          <p>Morphett Vale, Christies Beach, Seaford, Hallett Cove, Aldinga Beach, Noarlunga, Reynella</p>
        </Col>
        <Col md={3}>
          <h5>East</h5>
          <p>Campbelltown, Athelstone, Hectorville, Rostrevor, Tranmere</p>
        </Col>
        <Col md={3}>
          <h5>West</h5>
          <p>Glenelg, Glenelg North, Plympton, Marion, Henley Beach, West Lakes, Fulham Gardens, Brighton, Semaphore, Port Adelaide</p>
        </Col>
      </Row>
    </Container>
  </Container>

  {/* FAQs Section */}
  <Container className="py-5">
    <h2 className="fw-bold text-center mb-5">FAQs - Bond & Carpet Cleaning Burnside</h2>
    <Row className="mb-4">
      <Col md={12}>
        <h5>1. Will I get my bond back if you clean my place in Burnside?</h5>
        <p>
          Yes! We clean to landlord and agent standards, increasing your
          chances of a full bond refund without issues.
        </p>
      </Col>
    </Row>
    <Row>
      <Col md={12}>
        <h5>2. Are your cleaning products safe for kids and pets?</h5>
        <p>
          Absolutely! We use eco-friendly, non-toxic, and safe cleaning
          products that won’t harm kids or pets.
        </p>
      </Col>
    </Row>
  </Container>

  {/* Contact Form Section */}
  <Container className="py-5">
    <Row>
      <Col md={6}>
        <h2 className="fw-bold mb-4">Book Bond & Carpet Cleaning in Burnside</h2>
        <p>
          Avoid losing your bond due to poor cleaning. Rely on OSM Cleaning
          Services for professional end-of-lease cleaning in Burnside.
        </p>
        <p>
          Call us at <a href="tel:0431645222">0431645222</a> or email{" "}
          <a href="mailto:osmcleaningservices@gmail.com">
            osmcleaningservices@gmail.com
          </a>{" "}
          to schedule your booking today.
        </p>
      </Col>
      <Col md={6}>
        <ContactForm2 />
      </Col>
    </Row>
  </Container>

  <Footer />
</>

);
}

export default BondCarpetCleaningBurnside;
