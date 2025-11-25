import React from "react";
import CustomNavbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactForm2 from "../components/ContactForm2";
import { Container, Row, Col } from "react-bootstrap";
import { Helmet } from "react-helmet";
import BannerButtons from "../components/BannerButtons";

function BondCarpetCleaningParkside() {
return (
<> <Helmet> <title>Pocket-Friendly Bond and Carpet Cleaning Parkside - OSM Cleaning Services</title> <meta
       name="title"
       content="Pocket-Friendly Bond and Carpet Cleaning Parkside - OSM Cleaning Services"
     /> <meta
       name="description"
       content="OSM Cleaning Services offers professional bond and carpet cleaning in Parkside with deep steam extraction, eco-friendly solutions, and insured cleaners. Call 04316 45222."
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
      <h1>Pocket-Friendly Bond and Carpet Cleaning in Parkside</h1>
      <p>
        Exit your rental property on a high note with OSM Cleaning Services.
        Our team ensures your property passes the final inspection and helps
        secure a 100% bond refund. With expert cleaners, flexible timelines,
        and eco-friendly methods, we make moving stress-free in Parkside.
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
            We provide personalised{" "}
            <strong>bond and carpet cleaning in Parkside</strong> for both
            residential and commercial properties. From deep cleaning carpets
            to preparing the entire property for inspection, our experts
            deliver spotless results. Call{" "}
            <a href="tel:0431645222">04316 45222</a> or email{" "}
            <a href="mailto:Osmcleaningservices@gmail.com">
              Osmcleaningservices@gmail.com
            </a>{" "}
            to book your service today.
          </p>

          <h4>Significant Features of Bond and Carpet Cleaning Parkside</h4>
          <h5>1. Deep Steam Extraction</h5>
          <p>
            Hot water extraction to remove dirt, allergens, and bacteria while
            killing dust mites.
          </p>
          <h5>2. Removal of Stains and Odours</h5>
          <p>
            Targeted treatments proven to remove tough stains (pet stains, red
            wine, smoke) without harming fabrics.
          </p>
          <h5>3. Reduced Drying Time</h5>
          <p>
            Advanced drying techniques help you meet tight move-out deadlines
            with minimal downtime.
          </p>
          <h5>4. Environmentally Safe</h5>
          <p>
            We use biodegradable, low-irritant detergents safe for kids, pets,
            and the environment.
          </p>
          <h5>5. Mattress and Upholstery Cleaning</h5>
          <p>
            Extend the life of sofas, chairs, and mattresses with deep fabric
            sanitisation — great for allergy sufferers.
          </p>
          <h5>6. Covered by Insurance</h5>
          <p>
            Our trained, uniformed staff are punctual, courteous, and fully
            insured for your peace of mind.
          </p>
          <h5>7. No Hidden Fees</h5>
          <p>Straightforward packages with transparent quotes every time.</p>

          <h4>Our Bond and Carpet Cleaning Process in Parkside</h4>
          <ul className="ul_li">
            <li>
              <strong>Pre-inspection:</strong> Assessing property and carpets
              for a tailored clean.
            </li>
            <li>
              <strong>Pre-treatment:</strong> Targeted cleaning of problem
              areas to loosen dirt and stains.
            </li>
            <li>
              <strong>Hot Water Extraction:</strong> Deep extraction of soil,
              spills, and residues with minimal soak time.
            </li>
            <li>
              <strong>Groom & Dry:</strong> Carpets groomed evenly with
              high-efficiency drying.
            </li>
            <li>
              <strong>Final Check & Report:</strong> A last inspection with a
              short report for tenancy handovers.
            </li>
          </ul>

          <h4>Why Choose Us?</h4>
          <ul className="ul_li">
            <li>Insured and protected bond & carpet cleaning in Parkside.</li>
            <li>
              Punctual, fast, and reliable service that meets tight deadlines.
            </li>
            <li>
              Trusted by landlords for consistent cleaning and clear reports.
            </li>
            <li>
              Easy booking, reliable attendance, and carpets restored like new.
            </li>
            <li>
              Eco-friendly products ensure a safe clean for you and the
              planet.
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
      <h4>Bond and Carpet Cleaning Parkside – Other Areas We Serve</h4>
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
      <h4>Book Bond and Carpet Cleaning in Parkside Today</h4>
      <p>
        OSM Cleaning Services is your safest bet for a smooth rental exit.
        Our insured team handles residential and commercial cleaning with
        efficiency. Call{" "}
        <a href="tel:0431645222" className="txtred">
          04316 45222
        </a>{" "}
        or email{" "}
        <a href="mailto:Osmcleaningservices@gmail.com" className="txtred">
          Osmcleaningservices@gmail.com
        </a>{" "}
        to book your Parkside cleaning service today.
      </p>
    </div>
  </section>

  <Footer />
</>

);
}

export default BondCarpetCleaningParkside;
