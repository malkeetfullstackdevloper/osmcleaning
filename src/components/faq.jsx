import React from "react";
import { Container, Row, Col ,Accordion } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

const Faq = () => {


    return (
        <>
            <section className="faq-section py-5">
                <Container>
                    <Row className="justify-content-center mb-4">
                        <Col lg={8} className="text-center">
                            <h2 className="mb-3">Frequently Asked Questions</h2>
                            <p className="text-muted">Have questions? We’ve got answers. Here are some of the most common queries about our cleaning services in Adelaide.</p>
                        </Col>
                    </Row>
                    <Row className="justify-content-center">
                        <Col lg={10}>
                            <Accordion defaultActiveKey="0">
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>What areas do you service in Adelaide?</Accordion.Header>
                                    <Accordion.Body>
                                    We offer cleaning services throughout all suburbs of Adelaide. Whether you're located in the CBD, the northern suburbs, the south, or anywhere in between, we we have got you covered.
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>Can I book a cleaning service for the same day?</Accordion.Header>
                                    <Accordion.Body>
                                    Yes, we do offer same-day cleaning services when availability allows. To increase your chances of securing a spot, it's best to contact us as early in the day as possible.
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="2">
                                    <Accordion.Header>Can I use your cleaning products around kids and pets?</Accordion.Header>
                                    <Accordion.Body>
                                    Yes, definitely! Our products are made with non-toxic, eco-friendly ingredients, making them completely safe to use around children and pets.
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="3">
                                    <Accordion.Header>What if I’m unhappy with the cleaning service?</Accordion.Header>
                                    <Accordion.Body>
                                    Customer satisfaction matters to us. If something wasn’t up to your expectations, let us know within 24 hours, and we’ll come back to make it right—at no extra cost.
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="4">
                                    <Accordion.Header>What’s the best way to schedule a cleaning service?</Accordion.Header>
                                    <Accordion.Body>
                                    You can easily schedule a cleaning by visiting our website, calling us directly, or sending an email. We’ll confirm the time that works best for you and customize the service to match your specific needs.
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Faq;