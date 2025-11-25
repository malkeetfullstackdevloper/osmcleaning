import React from "react";
import { Container, Row,  Col, Button, Form, Card, Image, Dropdown } from "react-bootstrap";
import ContactForm from "./ContactForm";
import 'bootstrap/dist/css/bootstrap.min.css';

const WeClean = () => {


    return (
        <>
            <section className="contact_us">
                <Row className="inner-contact align-items-center g-4">
                    <Col md={6}>
                        <div className="clean-box">
                            <Image src="/images/premimum-quality.svg" alt="Builder Cleaning" fluid />
                            <h2>Our cleaning goal is to satisfy you</h2>
                            <p>Our first commitment to our customers is to ensure that you are satisfied with our cleaning services. We understand that every venue is different, so we make sure our cleaning solutions are tailored to your unique space.</p>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className="contact-form">
                            <ContactForm />
                        </div>
                    </Col>
                </Row>
            </section></>
    )
}

export default WeClean;