import React from "react";
import CustomNavbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactForm2 from "../components/ContactForm2";
import { Container, Row, Col } from "react-bootstrap";
import { Helmet } from "react-helmet";
import BannerButtons from "../components/BannerButtons";

function BondCarpetCleaningGlen() {
return (
<> <Helmet> <title>Bond and Carpet Cleaning Glen - OSM Cleaning Services</title> <meta
       name="title"
       content="Bond and Carpet Cleaning Glen - OSM Cleaning Services"
     /> <meta
       name="description"
       content="Powerful bond and carpet cleaning in Glen by OSM Cleaning Services. Eco-friendly, customised plans, and a bond-back guarantee."
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
      <h1>Powerful Bond and Carpet Cleaning in Glen</h1>
      <p>
        Get rid of the troubles linked with bond cleaning. OSM Cleaning
        Services simplifies the process with customised cleaning plans and
        expert carpet restoration in Glen.
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
        <h2 className="fw-bold mb-4">Bond and Carpet Cleaning Glen</h2>
        <p>
          We prepare properties for tenancy movement and final inspection
          with tailored bond cleaning services. Our carpet cleaning experts
          restore freshness with steam cleaning, stain removal, and odour
          treatments. 
        </p>
        <p>
          Call us at <a href="tel:0431645222">0431645222</a> or email{" "}
          <a href="mailto:osmcleaningservices@gmail.com">
            osmcleaningservices@gmail.com
          </a>{" "}
          to get a personalised cleaning checklist today.
        </p>
      </Col>
    </Row>
  </Container>

  {/* Features Section */}
  <Container fluid className="py-5 bg-light">
    <Container>
      <h2 className="fw-bold text-center mb-5">
        Distinctive Features of Our Bond and Carpet Cleaning in Glen
      </h2>
      <Row className="g-4">
        {[
          {
            title: "Custom Cleaning Plans",
            text: "We create cleaning strategies tailored to the size, condition, and needs of your home.",
          },
          {
            title: "Eco-Friendly Cleaning",
            text: "Our team uses biodegradable cleaning products safe for kids, pets, and the environment.",
          },
          {
            title: "Carpet Cleaning Experts",
            text: "From steam cleaning to spot and odour removal, we give carpets a complete makeover.",
          },
          {
            title: "Complete Property Cleaning",
            text: "We cover all areas including kitchens, bathrooms, baseboards, and hard-to-reach spots.",
          },
          {
            title: "Bond Refund Promise",
            text: "Cleaning is carried out to meet landlord inspection lists so you can get your bond back.",
          },
          {
            title: "Flexible Scheduling",
            text: "Book us early, late, or last-minute — our cleaning is always reliable and convenient.",
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

  {/* Service Process Section */}
  <Container className="py-5 bgble">
    <h2 className="fw-bold text-center mb-5">
      Our Bond and Carpet Cleaning Process in Glen
    </h2>
    <Row>
      <Col md={12} className="text-center">
        <ul>
          <li>Inspection of trouble spots, stains, and worn areas.</li>
          <li>Comprehensive cleaning of ovens, toilets, and hidden spaces.</li>
          <li>Steam carpet cleaning to remove dirt, mites, and odours.</li>
          <li>Use of eco-friendly products for longer-lasting cleanliness.</li>
          <li>Final checks to meet landlord and agent standards.</li>
        </ul>
      </Col>
    </Row>
  </Container>

  {/* Service Areas */}
  <Container fluid className="py-5 bg-light">
    <Container>
      <h2 className="fw-bold text-center mb-5">
        Bond and Carpet Cleaning Glen – Other Areas We Serve
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

  {/* Why Choose Us */}
  <Container className="py-5 bgble">
    <h2 className="fw-bold text-center mb-5">Why Choose Us?</h2>
    <Row>
      <Col md={12} className="text-center">
        <ul>
          <li>Years of experience in end-of-lease cleaning with proven results.</li>
          <li>Competitive pricing without compromising quality.</li>
          <li>Trained, insured, and reliable cleaning staff.</li>
          <li>Local Glen experts who understand landlord expectations.</li>
          <li>Customer-first approach with quick responses and personalised service.</li>
        </ul>
      </Col>
    </Row>
  </Container>

  {/* Contact Form */}
  <Container className="py-5">
    <h2 className="fw-bold text-center mb-4">
      Get in Touch for Bond and Carpet Cleaning in Glen
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

export default BondCarpetCleaningGlen;
