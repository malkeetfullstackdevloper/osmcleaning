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
        <title>End of Lease Cleaning Port Adelaide - OSM Cleaning Service</title>
        <meta name="description" content="Expert end of lease cleaning in Port Adelaide with 100% bond back guarantee. Eco-friendly, fast, and reliable service by OSM Cleaning Services." />
      </Helmet>

      <CustomNavbar />
        <div className="mainsection">
            <Container className="my-5">
                <h1 className="page-title">End of Lease Cleaning Port Adelaide - Get your bond back without any trouble.</h1>
                <p>Leaving your apartment in Port Adelaide? Our professional End of Lease Cleaning ensures that your property is clean and is ready to be inspected. At OSM Cleaning Services, our speciality has been to provide cleaning services (thorough and real estate approved services) that would ensure that you get your full bond back with ease.</p>
            </Container>
        </div>

        <Container className="my-5">

        <h2 className="mt-4">What Our End of Lease Cleaning Services Do</h2>

        <Row className="align-items-center secsa">
          <Col md={12}>
            <h3>Oven And Rangehood Cleaning</h3>
            <p>A heavy clean which will get grease, burnt food, and grime off your oven, stovetop and rangehood. In such busy kitchen spots, this service makes them clean and hygienic.</p>
          </Col>
        </Row>

        <Row className="align-items-center secsa">
          <Col md={12}>
            <h3>Cleaning of Bathrooms and Toilets</h3>
            <p>Full clean and disinfection of showers, bathrooms, sinks, taps, toilette, mirrors and tiles. This not only eliminates soap scum, mould and dirt, but you will be able to see your bathroom gleaming.</p>
          </Col>
        </Row>

        <Row className="align-items-center secsa">
          <Col md={12}>
            <h3>Carpet Steam Cleaning</h3>
            <p>With the help of professional steam cleaning machinery we would extract deeply stored dirt, stains and allergens in carpets and create freshness letting carpets last longer.</p>
          </Col>
        </Row>

        <Row className="align-items-center secsa">
          <Col md={12}>
            <h3>Internal & External Window Cleaning</h3>
            <p>We wash windows which clear off the smudges, dust, and dirt off the glasses and window frames to light up your house.</p>
          </Col>
        </Row>

        <Row className="align-items-center secsa">
          <Col md={12}>
            <h3>Wall Spot Cleaning</h3>
            <p>A keen attention to the cleaning of walls, to eliminate of marks, stains and scuffs without affecting the paint, to the eye of the apartment or house clean and well taken care of.</p>
          </Col>
        </Row>

        <Row className="align-items-center secsa">
          <Col md={12}>
            <h3>Additional Services</h3>
            <p>We can also provide optional extras which can include garage cleaning, balcony cleaning, and mould removal depending upon your particular needs to make the clean the right one.</p>
          </Col>
        </Row>

            <Row className="my-4 secsForm">
                <Col md={6}>
                    <h2 className="mt-5">What Can You Get with End of Lease Cleaning Port Adelaide?</h2>
                    <ul>
                    <li><strong>Hundred percent Bond Back Guarantee –</strong> We have an extensive cleaning schedule which is to the landlord and real estate agents standards so you have all your bond back.</li>
                    <li><strong>Matured & Insured Practitioners –</strong> All our cleaners have been trained, pass the police background check, and are insured, and they always provide a high-quality service.</li>
                    <li><strong>The All-Embracing Housekeeping –</strong> We clean kitchens and bathrooms, carpets and windows to leave no trace of dirt in your property.</li>
                    <li><strong>Cleaning Products with Friendly Environment –</strong> We employ eco friendly products that are safe to you and the environment but will still present a strong clean.</li>
                    <li><strong>Flexible Scheduling –</strong> Emergency Clean or Weekend time? We provide convenient terms of booking that can suit your moving schedule.</li>
                    <li><strong>Transparent Pricing –</strong> No encouragement of surprises, no sorely hidden charges, simply competitive rates that are honest, and adjusted to your cleaning demand.</li>
                    <li><strong>Local Knowledge –</strong> We are familiar with special needs of Port Adelaide property managers and landlords, and hence clean up to their exact specifications.</li>
                    <li><strong>Free Re-Clean (When it is Necessitated) –</strong> In case your property manager encounters some areas that require action, we will come back after 72 hours and repair it at no cost to you.</li>
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
