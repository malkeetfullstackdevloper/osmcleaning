import React from "react";
import CustomNavbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactForm2 from "../components/ContactForm2";
import { Container, Row, Col } from "react-bootstrap";
import { Helmet } from "react-helmet";
import BannerButtons from "../components/BannerButtons";

function BondCarpetCleaningNorwood() {
return (
<> <Helmet> <title>Prolific Bond and Carpet Cleaning Norwood - OSM Cleaning Services</title> <meta
       name="title"
       content="Prolific Bond and Carpet Cleaning Norwood - OSM Cleaning Services"
     /> <meta
       name="description"
       content="Professional bond and carpet cleaning in Norwood with eco-friendly products, thorough inspection-ready cleaning, and bond-back guarantee. Call 04316 45222."
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
      <h1>Prolific Bond and Carpet Cleaning in Norwood</h1>
      <p>
        Moving out? We deliver safe and reliable bond and carpet cleaning in
        Norwood, tailored to your property’s inspection requirements. Our
        expert team ensures your property is inspection-ready and helps you
        secure your bond refund stress-free.
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
            Whether you’re moving in or out, our{" "}
            <strong>bond and carpet cleaning Norwood</strong> service ensures
            spotless properties and fresh carpets. Book with us today by
            calling{" "}
            <a href="tel:0431645222">04316 45222</a> or emailing{" "}
            <a href="mailto:Osmcleaningservices@gmail.com">
              Osmcleaningservices@gmail.com
            </a>
            .
          </p>

          <h4>Striking Features of Bond and Carpet Cleaning Norwood</h4>
          <h5>1. All-Inclusive Bond Cleaning Solutions</h5>
          <p>
            From kitchens and bathrooms to blinds and skirting boards — every
            area is made inspection-ready.
          </p>
          <h5>2. Professional Carpet Restoration</h5>
          <p>
            Stain, dust, pet hair, and allergen removal using heavy-duty
            machinery and safe cleaning products.
          </p>
          <h5>3. Eco-Safe Cleaning Products</h5>
          <p>
            Biodegradable, environmentally friendly detergents safe for kids
            and pets.
          </p>
          <h5>4. Custom Packages</h5>
          <p>
            Flexible cleaning packages designed to meet all rental agreement
            requirements.
          </p>
          <h5>5. Deadline Management</h5>
          <p>
            Fast and quality-driven service that meets tight move-out
            deadlines with no delays.
          </p>

          <h4>Why Choose Us?</h4>
          <ul className="ul_li">
            <li>
              <strong>Knowledgeable Staff:</strong> Trained, insured, and
              experienced cleaners for residential and commercial properties.
            </li>
            <li>
              <strong>Bond-Back Guarantee:</strong> Cleaning to the highest
              real estate standards for smooth refunds.
            </li>
            <li>
              <strong>Superior Tools:</strong> Steam cleaners, high-suction
              vacuums, and advanced machinery for top results.
            </li>
            <li>
              <strong>Adaptable Timelines:</strong> Same-day and weekend
              services available when you need us.
            </li>
            <li>
              <strong>Open Book Policy:</strong> No hidden costs — just
              transparent quotes and reliable service.
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
      <h4>Bond and Carpet Cleaning Norwood – Other Areas We Serve</h4>
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
      <h4>We Provide a Prolific Bond Cleaning Edge – Get Started Today</h4>
      <p>
        OSM Cleaning Services is the trusted choice for{" "}
        <strong>bond and carpet cleaning in Norwood</strong>. Our insured
        team ensures smooth move-outs and pristine results. Call{" "}
        <a href="tel:0431645222" className="txtred">
          04316 45222
        </a>{" "}
        or email{" "}
        <a href="mailto:Osmcleaningservices@gmail.com" className="txtred">
          Osmcleaningservices@gmail.com
        </a>{" "}
        to schedule your Norwood cleaning service today.
      </p>
    </div>
  </section>

  <Footer />
</>

);
}

export default BondCarpetCleaningNorwood;
