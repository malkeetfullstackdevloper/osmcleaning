import React from "react";
import CustomNavbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactForm2 from "../components/ContactForm2";
import { Container, Row, Col } from "react-bootstrap";
import { Helmet } from "react-helmet";
import BannerButtons from "../components/BannerButtons";

function BondCarpetCleaningOsmond() {
return (
<> <Helmet> <title>Distinct Bond and Carpet Cleaning Osmond - OSM Cleaning Services</title> <meta
       name="title"
       content="Distinct Bond and Carpet Cleaning Osmond - OSM Cleaning Services"
     /> <meta
       name="description"
       content="OSM Cleaning Services delivers reliable bond and carpet cleaning in Osmond. Affordable, advanced cleaning methods with a bond-back guarantee. Call 04316 45222."
     /> </Helmet>

```
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
      <h1>Distinct Bond and Carpet Cleaning in Osmond</h1>
      <p>
        Leaving your rental in Osmond? Our professionals arrive equipped with
        advanced cleaning tools to restore your property’s best shape and
        ensure a hassle-free bond refund. We cover all your bond and carpet
        cleaning needs with a customised checklist.
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
        <h2 className="fw-bold mb-4">Bond and Carpet Cleaning Osmond</h2>
        <p>
          The exit from a rental space is exciting but requires careful
          planning. OSM Cleaning Services guarantees the return of bond or
          lease money through secure bond cleaning assistance in Osmond. We
          prepare a tailored checklist that matches the cleaning needs of
          your property and timelines.
        </p>
        <p>
          Call us at <a href="tel:0431645222">0431645222</a> or email{" "}
          <a href="mailto:osmcleaningservices@gmail.com">
            osmcleaningservices@gmail.com
          </a>{" "}
          to book our professional cleaning service in Osmond.
        </p>
      </Col>
    </Row>
  </Container>

  {/* Features Section */}
  <Container fluid className="py-5 bg-light">
    <Container>
      <h2 className="fw-bold text-center mb-5">
        Top Features of Our Bond and Carpet Cleaning in Osmond
      </h2>
      <Row className="g-4">
        <Col md={6} lg={3}>
          <h5>Personalised Cleaning Support</h5>
          <p>
            We provide customised cleaning services to meet rental demands.
            Every property is analysed and addressed with a tailored
            checklist.
          </p>
        </Col>
        <Col md={6} lg={3}>
          <h5>Trained Cleaning Professionals</h5>
          <p>
            Our experienced team in Osmond delivers cleaning on time and
            ensures full-proof results that satisfy inspection requirements.
          </p>
        </Col>
        <Col md={6} lg={3}>
          <h5>Advanced Cleaning Techniques</h5>
          <p>
            We use modern cleaning tools to remove stubborn stains and dirt,
            ensuring safe handling of equipment and complete cleaning.
          </p>
        </Col>
        <Col md={6} lg={3}>
          <h5>Affordable Prices</h5>
          <p>
            Enjoy transparent and cost-effective bond & carpet cleaning in
            Osmond without compromising on quality or reliability.
          </p>
        </Col>
      </Row>
    </Container>
  </Container>

  {/* Service Areas Section */}
  <Container className="py-5">
    <h2 className="fw-bold text-center mb-4">Bond and Carpet Cleaning Osmond – Other Areas We Serve</h2>
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

  {/* Carpet Cleaning Section */}
  <Container fluid className="py-5 bg-light">
    <Container>
      <Row className="align-items-center">
        <Col md={12}>
          <h2 className="fw-bold mb-4">
            Revitalising Your Carpets with Proven Cleaning Techniques
          </h2>
          <p>
            We provide safe and effective carpet cleaning methods to restore
            the look and feel of your carpets. Whether in homes or offices,
            our Osmond team delivers deep cleaning that extends carpet life
            and solves long-standing issues.
          </p>
          <p>
            Contact our experienced cleaning professionals in Osmond for
            timely completion of both bond and carpet cleaning tasks. Call{" "}
            <a href="tel:0431645222">0431645222</a> or email{" "}
            <a href="mailto:osmcleaningservices@gmail.com">
              osmcleaningservices@gmail.com
            </a>{" "}
            today!
          </p>
        </Col>
      </Row>
    </Container>
  </Container>

  {/* Contact Form Section */}
  <Container className="py-5">
    <Row>
      <Col md={6}>
        <h2 className="fw-bold mb-4">Book Bond & Carpet Cleaning in Osmond</h2>
        <p>
          Get in touch with OSM Cleaning Services to secure bond-back
          cleaning in Osmond. We deliver reliable results with customised
          timelines for your rental property.
        </p>
        <p>
          Call us at <a href="tel:0431645222">0431645222</a> or email{" "}
          <a href="mailto:osmcleaningservices@gmail.com">
            osmcleaningservices@gmail.com
          </a>{" "}
          to schedule your cleaning today.
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

export default BondCarpetCleaningOsmond;
