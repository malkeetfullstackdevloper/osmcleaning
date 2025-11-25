import React from "react";
import HomeCarousel from "../components/HomeCarousel";
import CustomNavbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Container, Row, Col, Card, Button, Form, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import BannerButtons from "../components/BannerButtons";
import ContactForm2 from "../components/ContactForm2";
import ContactForm from "../components/ContactForm";

import { Helmet } from "react-helmet";

function EndOfLeaseCleaning() {
    return (
        <>

        <title>End of Lease Cleaning Adelaide - OSM Cleaning Service</title>
        <Helmet>
            <meta name="title" content="End of Lease Cleaning Adelaide - OSM Cleaning Service" />
            <meta name="description" content="Move out with peace of mind as OSM Cleaning provides detailed end-of-lease End of Lease cleaning that meets real estate standards - leaving your property spotless and ready for inspection." />
        </Helmet>

            <CustomNavbar />
            {/* Hero Section */}
            <Container fluid className="hero-section d-flex align-items-center" style={{
                backgroundImage: "url('/images/osm/endofleaseclean.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "80vh"
            }}>
                <div className="banner-content">
                    <h1>Reliable End of Lease Cleaning for a Stress-Free Move</h1>
                    <p>
                        Move out with peace of mind as OSM Cleaning provides detailed end-of-lease End of Lease cleaning that meets real estate standards—leaving your property spotless and ready for inspection.
                    </p>
                    <div className="appointment-btn ">
                        <BannerButtons />
                    </div>
                </div>
            </Container>

            <Container>
                <Row>
                    <Col md={2} className="">
                        
                    </Col>
                    <Col md={8}>
                        <div className="contact-form translate-form">
                            <ContactForm2 />

                        </div>
                    </Col>
                    <Col md={2} className="">
                        
                    </Col>
                </Row>
            </Container>

            <section className="about-US about-US2 mb-0 mt-0">
                <Container>
                    <Row>
                        
                        <Col md={12}>
                            <div className="about-us-box servicearea">

                                <h2 className="text-center sarea"> Our End Of Lease Services Area`s </h2>
                                <div className="link-wrapper">
                                    <a href="../end-of-lease-cleaning-glenelg" className="eofbtn">
                                        end of lease cleaning glenelg
                                    </a>
                                    <a href="../end-of-lease-cleaning-burnside" className="eofbtn">
                                        end of lease cleaning burnside
                                    </a>
                                    <a href="../end-of-lease-cleaning-goodwood" className="eofbtn">
                                        end of lease cleaning goodwood
                                    </a>
                                    <a href="../end-of-lease-cleaning-henley" className="eofbtn">
                                        end of lease cleaning henley
                                    </a>
                                    <a href="../end-of-lease-cleaning-prospect" className="eofbtn">
                                        end of lease cleaning prospect
                                    </a>
                                    <a href="../end-of-lease-cleaning-norwood" className="eofbtn">
                                        end of lease cleaning norwood
                                    </a>
                                    <a href="../end-of-lease-cleaning-semaphore" className="eofbtn">
                                        end of lease cleaning semaphore
                                    </a>
                                    <a href="../end-of-lease-cleaning-unley" className="eofbtn">
                                        end of lease cleaning unley
                                    </a>

                                    <a href="../end-of-lease-cleaning-mawson" className="eofbtn">
                                        end of lease cleaning mawson
                                    </a>

                                    <a href="../end-of-lease-cleaning-port-adelaide" className="eofbtn">
                                        end of lease cleaning port adelaide
                                    </a>

                                    <a href="../end-of-lease-cleaning-south-adelaide" className="eofbtn">
                                        end of lease cleaning south adelaide
                                    </a>

                                    <a href="../end-of-lease-cleaning-mitchell-park" className="eofbtn">
                                        end of lease cleaning mitchell park
                                    </a>

                                    <a href="../end-of-lease-cleaning-magill" className="eofbtn">
                                        end of lease cleaning magill
                                    </a>

                                    <a href="../end-of-lease-cleaning-west-adelaide" className="eofbtn">
                                        end of lease cleaning west adelaide
                                    </a>

                                    <a href="../end-of-lease-cleaning-morphett" className="eofbtn">
                                        end of lease cleaning morphett
                                    </a>

                                    <a href="../mawson-end-of-lease-cleaning" className="eofbtn">
                                        mawson end of lease cleaning
                                    </a>

                                    <a href="../end-of-lease-cleaning-campbelltown" className="eofbtn">
                                        end of lease cleaning campbelltown
                                    </a>

                                    <a href="../end-of-lease-cleaning-brighton" className="eofbtn">
                                        end of lease cleaning brighton
                                    </a>

                                    <a href="../lease-cleaning-unley" className="eofbtn">
                                        lease cleaning unley
                                    </a>

                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* About Company Section */}
            <section className="about-US mb-0 mt-0 bd0" >
                <div className="inner-about">
                    <Row className="align-items-center">
                        <Col md={6} className="">
                            <div className="about-us-box">
                                <h4>Leave Your Space Immaculate with Our End Of Lease Cleaning Service</h4>
                                <p>
                                    OSM Cleaning’s professional End Of Lease Cleaning ensures your property is spotless and ready for handover. Whether you're moving out of a rental or preparing to sell, we handle every detail to meet inspection standards and leave a lasting impression.
                                </p>
                            </div>

                        </Col>
                        <Col md={6} className="">
                            <img width="100%" src="/images/osm/endofleaseclean.jpg" alt="" />
                        </Col>
                    </Row>
                </div>
            </section>
            {/* Benefits Section */}
            <section className="our-service mt-5">
                <Container className="pb-5">
                    <div className="top-heading text-center pb-4 mb-3">
                        <p className="">Comprehensive Solutions for Every Need</p>
                        <h2>Explore Our End Of Lease Cleaning</h2>
                    </div>
                    <Row>
                        <Col md={4} className="mb-4">
                            <Card className="shadow-sm border-0">
                                <Card.Img variant="top" src="/images/osm/exitclean.jpg" />
                                <Card.Body>
                                    <Card.Title>Exit Cleaning</Card.Title>
                                    <Card.Text>
                                        Make your move stress-free with OSM Cleaning’s thorough and reliable Exit Cleaning Services.
                                    </Card.Text>
                                    <Link to="/exitclean" className="btn btn-success">Learn More</Link>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4} className="mb-4">
                            <Card className="shadow-sm border-0">
                                <Card.Img variant="top" src="/images/osm/bondclean.jpg" />
                                <Card.Body>
                                    <Card.Title>Bond Clean</Card.Title>
                                    <Card.Text>
                                        Secure your full bond refund with OSM Cleaning’s trusted and thorough bond cleaning services—preferred by both tenants and landlords.
                                    </Card.Text>
                                    <Link to="/bondclean" className="btn btn-success">Learn More</Link>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4} className="mb-4">
                            <Card className="shadow-sm border-0">
                                <Card.Img variant="top" src="/images/osm/moveoutclean.jpg" />
                                <Card.Body>
                                    <Card.Title>Move Out Clean</Card.Title>
                                    <Card.Text>
                                        Simplify your move with OSM Cleaning’s professional move-out cleaning, ensuring your space is spotless for inspections or the next tenant.
                                    </Card.Text>
                                    <Link to="/move_outclean" className="btn btn-success">Learn More</Link>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4} className="mb-4">
                            <Card className="shadow-sm border-0">
                                <Card.Img variant="top" src="/images/End-of-Lease-Cleaning.jpeg" />
                                <Card.Body>
                                    <Card.Title>New Home Builder Clean</Card.Title>
                                    <Card.Text>
                                        Thorough post-construction cleaning services to ensure your newly built home is spotless, dust-free, and ready to move in.
                                    </Card.Text>
                                    <Link to="/move_inclean" className="btn btn-success">Learn More</Link>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col md={4} className="mb-4">
                            <Card className="shadow-sm border-0">
                                <Card.Img variant="top" src="/images/osm/moveinclean.jpg" />
                                <Card.Body>
                                    <Card.Title>Move In Cleaning</Card.Title>
                                    <Card.Text>
                                        Start fresh in your new home with Osm Cleaning’s Move In Cleaning — sanitised, spotless, and ready for you to settle in.
                                    </Card.Text>
                                    <Link to="/new_home_builder_clean" className="btn btn-success">Learn More</Link>
                                </Card.Body>
                            </Card>
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

export default EndOfLeaseCleaning;
