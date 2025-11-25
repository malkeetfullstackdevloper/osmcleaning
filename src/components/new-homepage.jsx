import { Container, Row, Col, Card, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import CustomNavbar from "./Navbar";
import Footer from "./Footer";
import ContactForm from "./ContactForm";
import Buttons from "./Buttons";
import { Link } from "react-router-dom";
import WeClean from "./weclean";
import WhyChoose from "./WhyChoose";
import Faq from "./faq";

const CleaningServicePage = () => {

  return (
    <>
      <CustomNavbar />

      {/* Hero Section */}
      <section className="hero-section text-white d-flex align-items-center" style={{
        backgroundImage: "url('/images/end-of-lease-cleaning.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh"
      }}>
        <Container>
          <Row className="align-items-center">
            <Col md={6} className="text-shadow bnrh">
              <h2 className="display-6 fw-bold">Professional End of Lease & Carpet Steam Cleaning in Adelaide</h2>
              <p className="lead">Expert cleaning services across Adelaide. We specialise in end of lease, carpet steam, and commercial cleaning with guaranteed satisfaction.</p>
              <div className="appointment-btn">
                <Buttons />
              </div>
            </Col>
            <Col md={6} className="mt-4 mt-md-0">
              <div className="bg-white p-4 rounded shadow">
                <ContactForm />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Features Section */}
    <section className="about-service">
        <Container className="text-center">
        <Row className="justify-content-center g-4">
            <Col lg={2} md={4}><Card><Card.Body><svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="InventoryOutlinedIcon"><path d="M5 5h2v3h10V5h2v5h2V5c0-1.1-.9-2-2-2h-4.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h6v-2H5zm7-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1"></path><path d="M21 11.5 15.51 17l-3.01-3-1.5 1.5 4.51 4.5 6.99-7z"></path></svg><h5>100% bond back guarantee</h5></Card.Body></Card></Col>
            <Col lg={2} md={4}><Card><Card.Body><svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="GroupOutlinedIcon"><path d="M9 13.75c-2.34 0-7 1.17-7 3.5V19h14v-1.75c0-2.33-4.66-3.5-7-3.5M4.34 17c.84-.58 2.87-1.25 4.66-1.25s3.82.67 4.66 1.25zM9 12c1.93 0 3.5-1.57 3.5-3.5S10.93 5 9 5 5.5 6.57 5.5 8.5 7.07 12 9 12m0-5c.83 0 1.5.67 1.5 1.5S9.83 10 9 10s-1.5-.67-1.5-1.5S8.17 7 9 7m7.04 6.81c1.16.84 1.96 1.96 1.96 3.44V19h4v-1.75c0-2.02-3.5-3.17-5.96-3.44M15 12c1.93 0 3.5-1.57 3.5-3.5S16.93 5 15 5c-.54 0-1.04.13-1.5.35.63.89 1 1.98 1 3.15s-.37 2.26-1 3.15c.46.22.96.35 1.5.35"></path></svg><h5>⁠7 days available</h5></Card.Body></Card></Col>
            {/* <Col lg={2} md={4}><Card><Card.Body><svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="VerifiedUserOutlinedIcon"><path d="M12 1 3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5zm7 10c0 4.52-2.98 8.69-7 9.93-4.02-1.24-7-5.41-7-9.93V6.3l7-3.11 7 3.11zm-11.59.59L6 13l4 4 8-8-1.41-1.42L10 14.17z"></path></svg><h5>⁠Covering all Adelaide areas</h5></Card.Body></Card></Col>
             */}<Col lg={2} md={4}><Card><Card.Body><svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="RecyclingOutlinedIcon"><path d="M5.77 7.15 7.2 4.78l1.03-1.71c.39-.65 1.33-.65 1.72 0l1.48 2.46-1.23 2.06-1 1.62zm15.95 5.82-1.6-2.66-3.46 2L18.87 16H20c.76 0 1.45-.43 1.79-1.11.14-.28.21-.58.21-.89 0-.36-.1-.71-.28-1.03M16 21h1.5c.76 0 1.45-.43 1.79-1.11L20.74 17H16v-2l-4 4 4 4zm-6-4H5.7l-.84 1.41c-.3.5-.32 1.12-.06 1.65.28.57.87.94 1.52.94H10zm-3.88-2.65 1.73 1.04L6.48 9.9 1 11.27l1.7 1.02-.41.69c-.35.59-.38 1.31-.07 1.92l1.63 3.26zm10.9-9.21-1.3-2.17C15.35 2.37 14.7 2 14 2h-3.53l3.12 5.2-1.72 1.03 5.49 1.37 1.37-5.49z"></path></svg><h5>⁠Professional bond cleaning team</h5></Card.Body></Card></Col>
            <Col lg={2} md={4}><Card><Card.Body><svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="SpeedOutlinedIcon"><path d="m20.38 8.57-1.23 1.85a8 8 0 0 1-.22 7.58H5.07A8 8 0 0 1 15.58 6.85l1.85-1.23A10 10 0 0 0 3.35 19a2 2 0 0 0 1.72 1h13.85a2 2 0 0 0 1.74-1 10 10 0 0 0-.27-10.44z"></path><path d="M10.59 15.41a2 2 0 0 0 2.83 0l5.66-8.49-8.49 5.66a2 2 0 0 0 0 2.83"></path></svg><h5>⁠No hidden or extra charges</h5></Card.Body></Card></Col>
        </Row>
        </Container>
    </section>

      {/* Why Choose Us Section */}
      <section className="py-5">
        <Container>
          <Row className="align-items-center">
            <Col lg={8}>
              <h2 className="mb-4">Why Choose Our Cleaning Services in Adelaide?</h2>
              <p className="text-muted">Our Adelaide-based cleaning company delivers reliable, top-quality services tailored to homes and businesses. We offer eco-friendly, professional solutions from carpet steam cleaning to post-renovation deep cleans. Trust us for flexible scheduling, no hidden fees, and thorough service every time.</p>
              <ul className="list-unstyled">
                <li><strong>✔ Move-in and move-out</strong> cleaning for stress-free transitions</li>
                <li><strong>✔ Carpet steam cleaning</strong> using high-grade equipment</li>
                <li><strong>✔ Window cleaning</strong> for all building types</li>
                <li><strong>✔ Upholstery & mattress</strong> cleaning</li>
                <li><strong>✔ Post-renovation</strong> construction cleanup</li>
              </ul>
            </Col>
            <Col lg={4} className="text-center mt-4 mt-lg-0">
              <Image src="/images/office-cleaning.jpg" fluid rounded />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Trustindex Review Section */}
      <section className="py-5">
        <Container>
          <Row className="align-items-center">
            <Col md={12} className="bg text-white p-5 rounded">
              <script src="https://static.elfsight.com/platform/platform.js" async></script>
              <div class="elfsight-app-addf665c-9817-428a-af5e-f224429ae0a4" data-elfsight-app-lazy></div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="py-5 bg-light">
        <Container>
            <Row className="mb-5">
            <Col className="text-center">
                <h2 className="fw-bold mb-3">End of Lease Cleaning</h2>
                <p className="text-muted mx-auto" style={{ maxWidth: '800px' }}>
                Our end-of-lease cleaning service in Adelaide is among the best. We understand how hard it can be to recover your bond. Our team ensures your property meets all requirements set by agents and landlords.
                </p>
                <Link to="/end_of_lease_cleaning" className="btn btn-success mt-2">Read More</Link>
            </Col>
            </Row>

            <Row className="g-4">
            {[
                {
                title: "Move Out Clean",
                text: "Simplify your move with professional move-out cleaning — spotless for inspections or new tenants.",
                image: "/images/osm/moveoutclean.jpg",
                link: "/move_outclean"
                },
                {
                title: "New Home Builder Clean",
                text: "Post-construction cleaning to make your new home dust-free, spotless, and move-in ready.",
                image: "/images/osm/endofleaseclean.jpg",
                link: "/move_inclean"
                },
                {
                title: "Move In Cleaning",
                text: "Start fresh in your new home — sanitized and ready for you to settle in comfortably.",
                image: "/images/osm/moveinclean.jpg",
                link: "/new_home_builder_clean"
                }
            ].map((service, i) => (
                <Col md={4} key={i}>
                <Card className="h-100 shadow-sm border-0 hover-zoom">
                    <Card.Img variant="top" src={service.image} style={{ objectFit: 'cover', height: '220px' }}  className="card-img-small"  />
                    <Card.Body>
                    <Card.Title>{service.title}</Card.Title>
                    <Card.Text>{service.text}</Card.Text>
                    <Link to={service.link} className="btn btn-outline-success btn-sm">Read More</Link>
                    </Card.Body>
                </Card>
                </Col>
            ))}
            </Row>

            <Row className="mt-5 mb-5">
            <Col className="text-center">
                <h2 className="fw-bold mb-3">Carpet & Upholstery Cleaning</h2>
                <p className="text-muted mx-auto" style={{ maxWidth: '800px' }}>
                Time to refresh your prized floor coverings! Our carpet and upholstery cleaning team brings years of experience and proven results.
                </p>
                <Link to="/carpet-cleaning" className="btn btn-success mt-2">Read More</Link>
            </Col>
            </Row>

            <Row className="g-4">
            {[
                {
                title: "Upholstery Cleaning",
                text: "Refresh your furniture — clean, deodorized, and allergen-free upholstery services.",
                image: "/images/upholstery-cleaning.jpg",
                link: "/upholstery_cleaning"
                },
                {
                title: "Mattress Cleaning",
                text: "Sleep better with allergen and dust-mite-free mattresses. Clean and sanitized.",
                image: "/images/osm/mattressclean.jpg",
                link: "/mattress_cleaning"
                },
                {
                title: "Tile & Grout Cleaning",
                text: "Bring back the shine — expert tile and grout services for hygienic, clean floors.",
                image: "/images/osm/tileandgroute.jpg",
                link: "/tile_grout_cleaning"
                }
            ].map((service, i) => (
                <Col md={4} key={i}>
                <Card className="h-100 shadow-sm border-0 hover-zoom">
                    <Card.Img variant="top" src={service.image} style={{ objectFit: 'cover', height: '220px' }}   className="card-img-small" />
                    <Card.Body>
                    <Card.Title>{service.title}</Card.Title>
                    <Card.Text>{service.text}</Card.Text>
                    <Link to={service.link} className="btn btn-outline-success btn-sm">Read More</Link>
                    </Card.Body>
                </Card>
                </Col>
            ))}
            </Row>
        </Container>
      </section>

      {/* Immaculate Interiors Section */}
      <section className="py-5">
        <Container>
          <Row className="align-items-center">
            <Col md={6} className=" p-5 rounded-start">
              <h2 className="clrblu">Immaculate Interiors, Peaceful Living </h2>
              <p>Our team ensures your home is fresh, hygienic, and ready to enjoy.Experience the tranquility of a spotlessly clean home. At OSM Cleaning Services, we believe that a clean space is the foundation for peace of mind and healthy living. Whether you're moving out, preparing for guests, or simply need a fresh start, our dedicated professionals go beyond surface cleaning to ensure every corner of your home is pristine.</p>
            </Col>
            <Col md={6} className="p-0">
              <Image src="/images/office-cleaning.jpg" fluid className="rounded-end" />
            </Col>
          </Row>
        </Container>
      </section>

      <WhyChoose />
      <Faq />
      <WeClean />
      <Footer />
    </>
  );
};

export default CleaningServicePage;
