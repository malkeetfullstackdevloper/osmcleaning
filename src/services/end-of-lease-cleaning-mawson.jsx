import React from "react";
import HomeCarousel from "../components/HomeCarousel";
import CustomNavbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";
import ContactForm2 from "../components/ContactForm2";
import { Container, Row, Col, Card, Button, Form, Image } from "react-bootstrap";
import { Link } from "react-router-dom";


import "../My.css";

import { Helmet } from "react-helmet";

function ExitClean() {
return (
    <>
      <Helmet>
        <title>End of Lease Cleaning Mawson - OSM Cleaning Service</title>
        <meta name="description" content="Professional end of lease cleaners in Mawson with bond back guarantee. Book OSM Cleaning Services today!" />
      </Helmet>

      <CustomNavbar />

        <div className="mainsection">
            <Container className="my-5">
                <h1 className="page-title">End of Lease Cleaning Mawson – Book Trusted Cleaners Now!</h1>

                <p>Are you vacating a tenanted house in Mawson and require good end of lease cleaning services? <strong>OSM Cleaning Services</strong> is a professional end of lease cleaner in Mawson with 100 percent bond back guarantee. With several years of experience, registered professional cleaning teams, and great attention to detail, we get you to impress both the landlord and property management.</p>
                <h4>📞 Call now to book: 04316 45222</h4>
            </Container>
        </div>

        <Container className="my-5">

        <Row className="align-items-center my-4 secsa">
            <h2 className="mt-4">What Does Our End of Lease Cleaning Services Include?</h2>
          <Col md={12}>
            <h3>Whale Coast Oven and Rangehood Cleaning</h3>
            <p>We clean, de-grease and scrub your rangehood, oven and stovetop and scrub off dried-on grime, food residue and smoke stains, which are normally one of the most inspected items.</p>
          </Col>

        </Row>

        <Row className="align-items-center my-4 secsa">
          <Col md={12}>
            <h3>Bathroom Cleaning</h3>
            <p>We go in with cleaners and scrub the shower, tiles, bathtub, toilet and the vanity section. The bathroom is polished and disinfected and it is now clean and shining, polished in all glass, chrome and tiled surfaces.</p>
          </Col>

        </Row>

        <Row className="align-items-center my-4 secsa">
          <Col md={12}>
            <h3>Walls Spot Cleaning</h3>
            <p>We also remove everyday marks, scuffs, and stains on walls with non-damaging cleaning solutions, and make the walls move-in ready again.</p>
          </Col>
        </Row>

        <Row className="align-items-center my-4 secsa">
          <Col md={12}>
            <h3>Internal Window Cleaning</h3>
            <p>Walls are wiped (all internal windows, sills and tracks) so that the dust, fingerprints and smudges are eliminated. Windows can also be cleaned, externally as an optional option.</p>
          </Col>
        </Row>

        <Row className="align-items-center my-4 secsa">
          <Col md={12}>
            <h3>General Surface & Floor Cleaning</h3>
            <p>We vacuum carpets, mop hard floors, and we wipe light switches, clean doors, and dust the skirting boards so that there is no spot in any room that we have left out.</p>
          </Col>
        </Row>

        <Row className="my-4 secsForm">
            <Col md={6}>
            <h2 className="mt-5">Why Choose End of Lease Cleaning Mawson?</h2>
            <ul>
            <li><strong>Insured and Experienced Cleaners –</strong> Our team is well trained, police checked and insured so you can be assured that your property is in safe hands.</li>
            <li><strong>Master Cleaning List –</strong> We use a specific checklist of all the rooms and surfaces and make sure no space is left unchecked in the overall cleaning process.</li>
            <li><strong>Environmentally Sound Cleaners –</strong> We apply eco-friendly cleaning products that are friendly and harmless to both the environment and health.</li>
            <li><strong>Flexible Scheduling –</strong> Book at the last minute or the weekend, we have flexible booking times which suit your moving schedule.</li>
            </ul>
            </Col>
            <Col md={6}>
                <div className="contact-form translate-form">
                <ContactForm2 />
                </div>
            </Col>
        </Row>    
      </Container>

      <Footer />
    </>
  );
}

export default ExitClean;
