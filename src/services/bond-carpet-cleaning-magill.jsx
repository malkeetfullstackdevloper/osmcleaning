import React from "react";
import CustomNavbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactForm2 from "../components/ContactForm2";
import { Container, Row, Col } from "react-bootstrap";
import { Helmet } from "react-helmet";
import BannerButtons from "../components/BannerButtons";

function BondCarpetCleaningMagill() {
return (
<> <Helmet> <title>Bond and Carpet Cleaning Magill - OSM Cleaning Services</title> <meta
       name="title"
       content="Bond and Carpet Cleaning Magill - OSM Cleaning Services"
     /> <meta
       name="description"
       content="OSM Cleaning Services offers expert bond and carpet cleaning in Magill. Eco-friendly solutions, flexible scheduling, and inspection-ready results."
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
      <h1>Extensive Bond and Carpet Cleaning in Magill</h1>
      <p>
        Prepare your rental space for final inspection with OSM Cleaning
        Services. Our expert bond and carpet cleaning in Magill guarantees
        spotless results and maximises your chance of a full bond refund.
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
        <h2 className="fw-bold mb-4">Bond and Carpet Cleaning Magill</h2>
        <p>
          Our professional cleaners in Magill deliver full-proof solutions
          for bond and carpet cleaning. From carpets and blinds to polished
          corners, we cover it all. Whether you’re moving out, renting, or
          preparing for new tenants, our cleaning ensures every angle shines
          for inspection.
        </p>
        <p>
          Call us at <a href="tel:0431645222">0431645222</a> or email{" "}
          <a href="mailto:osmcleaningservices@gmail.com">
            osmcleaningservices@gmail.com
          </a>{" "}
          to book reliable cleaning services in Magill at flexible times.
        </p>
      </Col>
    </Row>
  </Container>

  {/* Features Section */}
  <Container fluid className="py-5 bg-light">
    <Container>
      <h2 className="fw-bold text-center mb-5">
        Starred Features of Our Bond and Carpet Cleaning Services Magill
      </h2>
      <Row className="g-4">
        {[
          {
            title: "All-Inclusive Cleaning Solutions",
            text: "Thorough cleaning of every corner, including specialised carpet treatment with proven techniques.",
          },
          {
            title: "Professional Carpet Revival",
            text: "Carpet cleaning removes dirt, dust, odours, and allergens for a fresh and healthy home.",
          },
          {
            title: "Inspection-Ready Guarantee",
            text: "We meet property manager standards so you stand the best chance of receiving your full bond back.",
          },
          {
            title: "Eco-Friendly Approach",
            text: "Safe, biodegradable products that protect your family, pets, and the environment.",
          },
          {
            title: "Flexible Scheduling",
            text: "Our team works around your schedule to ensure a stress-free moving experience.",
          },
        ].map((item, idx) => (
          <Col md={4} key={idx}>
            <div className="p-4 border rounded bg-white h-100">
              <h5 className="fw-bold">{item.title}</h5>
              <p>{item.text}</p>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  </Container>

  {/* Why Choose Us Section */}
  <Container className="py-5 bgble">
    <h2 className="fw-bold text-center mb-5">Why Choose Us?</h2>
    <Row>
      <Col md={12} className="text-center">
        <p>
          Choosing the right cleaning team is the key to a hassle-free bond
          return. Our bond and carpet cleaning in Magill combines years of
          experience, innovative tools, and eco-friendly products to deliver
          top-notch results.
        </p>
        <ul>
          <li>Trusted reputation for reliability and punctuality.</li>
          <li>Tailored cleaning for tenants, landlords, and homeowners.</li>
          <li>Affordable, transparent pricing with no hidden costs.</li>
          <li>Dedicated to customer satisfaction and peace of mind.</li>
        </ul>
      </Col>
    </Row>
  </Container>

  {/* Service Areas */}
  <Container fluid className="py-5 bg-light">
    <Container>
      <h2 className="fw-bold text-center mb-5">
        Bond and Carpet Cleaning Magill – Other Areas We Serve
      </h2>
      <Row>
        <Col md={3}>
          <h5 className="fw-bold">North</h5>
          <p>Salisbury, Mawson Lakes, Parafield Gardens, Golden Grove, Elizabeth, Tea Tree Gully, Angle Vale, Gawler</p>
        </Col>
        <Col md={3}>
          <h5 className="fw-bold">South</h5>
          <p>Morphett Vale, Christies Beach, Seaford, Hallett Cove, Aldinga Beach, Noarlunga, Reynella</p>
        </Col>
        <Col md={3}>
          <h5 className="fw-bold">East</h5>
          <p>Campbelltown, Athelstone, Hectorville, Rostrevor, Tranmere</p>
        </Col>
        <Col md={3}>
          <h5 className="fw-bold">West</h5>
          <p>Glenelg, Glenelg North, Plympton, Marion, Henley Beach, West Lakes, Fulham Gardens, Brighton, Semaphore, Port Adelaide</p>
        </Col>
      </Row>
    </Container>
  </Container>

  {/* FAQs */}
  <Container className="py-5">
    <h2 className="fw-bold text-center mb-5">FAQs (Frequently Asked Questions)</h2>
    <Row>
      <Col md={12}>
        <div className="mb-4">
          <h5>Will I get my bond back if I use your cleaning service?</h5>
          <p>
            Yes, we clean based on landlord and property manager standards.
            While the final decision rests with the landlord, our proven
            record ensures you have the best chance to get your bond back.
          </p>
        </div>
        <div>
          <h5>How much time is needed for bond and carpet cleaning in Magill?</h5>
          <p>
            Cleaning duration depends on the property’s size and condition.
            Our team arrives fully equipped to complete the job efficiently
            without compromising on quality.
          </p>
        </div>
      </Col>
    </Row>
  </Container>

  {/* Contact Form */}
  <Container className="py-5">
    <h2 className="fw-bold text-center mb-4">
      Book Bond and Carpet Cleaning in Magill Today
    </h2>
    <Row className="justify-content-center">
      <Col md={8}>
        <ContactForm2 />
      </Col>
    </Row>
  </Container>

  <Footer />
</>

);
}

export default BondCarpetCleaningMagill;
