import React from "react";
import HomeCarousel from "../components/HomeCarousel";
import CustomNavbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Container, Row, Col, Card, Button, Form, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import BannerButtons from "../components/BannerButtons";
import CarpetCleaningContact from "../components/CarpetCleaningContact";
import ContactForm from "../components/ContactForm";
import { Helmet } from "react-helmet";

function CarpetCleaning() {
    return (
        <>

        <title>Carpet Cleaning Adelaide - OSM Cleaning Service</title>
        <Helmet>
            <meta name="title" content="Carpet Cleaning Adelaide - OSM Cleaning Service" />
            <meta name="description" content="Move out with peace of mind as OSM Cleaning provides detailed Carpet Cleaning services in Adelaide that meets real estate standards. " />
        </Helmet>
            <CustomNavbar />
            <Container fluid className="hero-section d-flex align-items-center" style={{
                backgroundImage: "url('/images/osm/carpetsteamclean.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "80vh"
            }}>
                <div className="banner-content">
                <h1>Reliable Carpet Cleaning for a Stress-Free Move</h1>
                <p>Move out with peace of mind as OSM Cleaning provides detailed Carpet Cleaning that meets real estate standards—leaving your property spotless and ready for inspection.</p>
                <div className="appointment-btn ">
                    <BannerButtons />
                </div>
                </div>
            </Container>
            <Container>
        <Row>
          <Col md={12}>
            <div className="contact-form translate-form">
              <CarpetCleaningContact />

            </div>
          </Col>
        </Row>
      </Container>

      {/* About Company Section */}
            <section className="about-US mb-0">
              <div className="inner-about">
                <Row className="align-items-center">
                  <Col md={6} className="">
                    <div className="about-us-box">
                      <h4>Leave Your Space Immaculate with Our Carpet Cleaning Service</h4>
                      <p>
                      OSM Cleaning’s professional Carpet Clean ensures your property is spotless and ready for handover. Whether you're moving out of a rental or preparing to sell, we handle every detail to meet inspection standards and leave a lasting impression.
                      </p>
                    </div>
                  </Col>
                  <Col md={6} className="">
                  <img width="100%" src="images/osm/carpetsteamclean.jpg" alt="" />
                  </Col>
      
                </Row>
              </div>
            </section>
            {/* Benefits Section */}
            <section className="our-service mt-5">
                <Container className="pb-5">
                    <div className="top-heading text-center pb-4 mb-3">
                        <p className="">Comprehensive Solutions for Every Need</p>
                        <h2>Explore Our Carpet Cleaning Services</h2>
                    </div>
                    <Row>
                        <Col md={4} className="mb-4">
                            <Card className="shadow-sm border-0">
                                <Card.Img variant="top" src="/images/upholstery-cleaning.jpg" />
                                <Card.Body>
                                    <Card.Title>Upholstery Cleaning</Card.Title>
                                    <Card.Text>
                                        Refresh and rejuvenate your furniture! Our professional upholstery cleaning service brings new life to your sofas, chairs and other upholstered items, leaving them looking, feeling and smelling fresh.
                                    </Card.Text>
                                    <Link to="/upholstery_cleaning" className="btn btn-success">Learn More</Link>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4} className="mb-4">
                            <Card className="shadow-sm border-0">
                                <Card.Img variant="top" src="/images/osm/rugclean.jpg" />
                                <Card.Body>
                                    <Card.Title>Rug Cleaning</Card.Title>
                                    <Card.Text>
                                        Bring your rugs back to life with Osm Cleaning’s specialised Rug Cleaning — deep cleaned, vibrant, and allergen-free.
                                    </Card.Text>
                                    <Link to="/rugcleaning" className="btn btn-success">Learn More</Link>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4} className="mb-4">
                            <Card className="shadow-sm border-0">
                                <Card.Img variant="top" src="/images/osm/couchclean.jpg" />
                                <Card.Body>
                                    <Card.Title>Couch Cleaning</Card.Title>
                                    <Card.Text>
                                        Revive your couch with Osm Cleaning’s expert Couch Cleaning services — removing stains, odours, and deep-seated dirt.
                                    </Card.Text>
                                    <Link to="/cleaning_couch" className="btn btn-success">Learn More</Link>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4} className="mb-4">
                            <Card className="shadow-sm border-0">
                                <Card.Img variant="top" src="/images/osm/mattressclean.jpg" />
                                <Card.Body>
                                    <Card.Title>Mattress Cleaning</Card.Title>
                                    <Card.Text>
                                        Sleep healthier with Osm Cleaning’s Mattress Cleaning — removing dust mites, allergens, and stains for a fresher rest.
                                    </Card.Text>
                                    <Link to="/mattress_cleaning" className="btn btn-success">Learn More</Link>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4} className="mb-4">
                            <Card className="shadow-sm border-0">
                                <Card.Img variant="top" src="/images/osm/tileandgroute.jpg" />
                                <Card.Body>
                                    <Card.Title>Tile & Grout Cleaning</Card.Title>
                                    <Card.Text>
                                        Restore the shine to your floors with Osm Cleaning’s Tile & Grout Cleaning — powerful, precise, and hygienic.
                                    </Card.Text>
                                    <Link to="/tile_grout_cleaning" className="btn btn-success">Learn More</Link>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4} className="mb-4">
                            <Card className="shadow-sm border-0">
                                <Card.Img variant="top" src="/images/osm/windowsclean.jpg" />
                                <Card.Body>
                                    <Card.Title>Window Cleaning</Card.Title>
                                    <Card.Text>
                                        Crystal-clear windows to enhance brightness and business appearance.
                                    </Card.Text>
                                    <Link to="/window_cleaning" className="btn btn-success">Learn More</Link>
                                </Card.Body>
                            </Card>
                        </Col>

                    </Row>

                </Container>
            </section>


            <section className="about-US about-US2 mb-0 mt-0">
                <Container>
                    <Row>
                    <Col md={12}>
                        <div className="about-us-box servicearea">
                            <h2 className="text-center sarea">Our Carpet Cleaning Services Areas</h2>
                            <div className="link-wrapper">
                                <Link to="/exit-carpet-cleaning-prospect" className="eofbtn">
                                Exit and Carpet Cleaning Prospect
                                </Link>

                                <Link to="/bond-carpet-cleaning-goodwood" className="eofbtn">
                                Bond and Carpet Cleaning Goodwood
                                </Link>

                                <Link to="/bond-carpet-cleaning-unley" className="eofbtn">
                                Bond and carpet cleaning Unley
                                </Link>

                                <Link to="/bond-carpet-cleaning-parkside" className="eofbtn">
                                Bond and carpet cleaning parkside
                                </Link>

                                <Link to="/bond-carpet-cleaning-norwood" className="eofbtn">
                                Bond and carpet cleaning norwood
                                </Link>

                                <Link to="/bond-carpet-cleaning-osmond" className="eofbtn">
                                Bond and carpet cleaning osmond
                                </Link>

                                <Link to="/bond-carpet-cleaning-burnside" className="eofbtn">
                                Bond and carpet cleaning burnside
                                </Link>

                                <Link to="/bond-carpet-cleaning-glen" className="eofbtn">
                                Bond and carpet cleaning glen
                                </Link>

                                <Link to="/bond-carpet-cleaning-magill" className="eofbtn">
                                Bond and carpet cleaning magill
                                </Link>

                            </div>
                        </div>
                    </Col>
                    </Row>
                </Container>
                </section>
            

            {/* We Clean With Your Satisfaction in Mind Section */}
            <section className="contact_us">
                <Row className="inner-contact align-items-center g-4">
                    <Col md={6}>
                        <div className="clean-box">
                            <Image src="/images/premimum-quality.svg" alt="Builder Cleaning" fluid />
                            <h2>We Clean With Your Satisfaction in Mind</h2>
                            <p>Our primary commitment to our clients is to ensure you are content with our cleaning services. We understand that every site is different, therefore we ensure our cleaning solutions are tailored to suit your unique space.</p>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className="contact-form">
                            <ContactForm />
                        </div>
                    </Col>
                </Row>
            </section>

            <Footer />
        </>
    );
}

export default CarpetCleaning;
