import React from "react";
import HomeCarousel from "../components/HomeCarousel";
import CustomNavbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Container, Row, Col, Card, Button, Form, Image } from "react-bootstrap";

function Commercial() {
    return (
        <>
            <CustomNavbar />
            {/* Benefits Section */}
            <section className="our-service m-5">
                <Container className="pb-5">
                    <div className="top-heading text-center pb-4 mb-3">
                        <p className="">Comprehensive Solutions for Every Need</p>
                        <h2>Explore Our Commercial Cleaning Services</h2>
                    </div>
                    <Row>
                        <Col md={4} className="mb-4">
                            <Card className="shadow-sm border-0">
                                <Card.Img variant="top" src="/images/premimum-quality.webp" />
                                <Card.Body>
                                    <Card.Title>Office Cleaning</Card.Title>
                                    <Card.Text>
                                        Ensure a spotless, professional workspace with Osm Cleaning’s Office Cleaning Services.
                                    </Card.Text>
                                    <Button variant="success">Learn More</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4} className="mb-4">
                            <Card className="shadow-sm border-0">
                                <Card.Img variant="top" src="/images/meth_decontamination.webp" />
                                <Card.Body>
                                    <Card.Title>Commercial Building Cleaning</Card.Title>
                                    <Card.Text>
                                        Maintain a pristine and professional environment with our expert commercial building cleaning services.
                                    </Card.Text>
                                    <Button variant="success">Learn More</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4} className="mb-4">
                            <Card className="shadow-sm border-0">
                                <Card.Img variant="top" src="/images/healthcare_cleaning.webp" />
                                <Card.Body>
                                    <Card.Title>After Builders Cleaning</Card.Title>
                                    <Card.Text>
                                        Transforming newly constructed spaces from worksites to showcase-ready.
                                    </Card.Text>
                                    <Button variant="success">Learn More</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4} className="mb-4">
                            <Card className="shadow-sm border-0">
                                <Card.Img variant="top" src="/images/child_care_cleaning.webp" />
                                <Card.Body>
                                    <Card.Title>Child Care Cleaning</Card.Title>
                                    <Card.Text>
                                        Keep your childcare center safe and hygienic with our specialized cleaning services, ensuring a germ-free environment for kids.
                                    </Card.Text>
                                    <Button variant="success">Learn More</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4} className="mb-4">
                            <Card className="shadow-sm border-0">
                                <Card.Img variant="top" src="/images/pub_and_restaurant_cleaning.webp" />
                                <Card.Body>
                                    <Card.Title>Window Cleaning</Card.Title>
                                    <Card.Text>
                                        Crystal-clear windows to enhance brightness and business appearance.
                                    </Card.Text>
                                    <Button variant="success">Learn More</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4} className="mb-4">
                            <Card className="shadow-sm border-0">
                                <Card.Img variant="top" src="/images/window.webp" />
                                <Card.Body>
                                    <Card.Title>Commercial Window Cleaning</Card.Title>
                                    <Card.Text>
                                        Crystal-clear windows to enhance brightness and business appearance.
                                    </Card.Text>
                                    <Button variant="success">Learn More</Button>
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
                            <Form className="quote-form p-4 shadow">
                                <h2 className="mb-4">Want a Cleaning Team That Gets You?</h2>
                                <Row>
                                    <Col md={12}>
                                        <Form.Group className="mb-4">
                                            {/* <Form.Label>Name</Form.Label> */}
                                            <Form.Control type="text" placeholder="First name" />
                                        </Form.Group>
                                    </Col>
                                    <Col md={12}>
                                        <Form.Group className="mb-4">
                                            {/* <Form.Label>Email</Form.Label> */}
                                            <Form.Control type="email" placeholder="Email address" />
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Form.Group className="mb-4">
                                    {/* <Form.Label>Message</Form.Label> */}
                                    <Form.Control as="textarea" rows={3} placeholder="Message" />
                                </Form.Group>
                                <Button variant="success">schedule now</Button>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </section>

            <Footer />
        </>
    );
}

export default Commercial;
