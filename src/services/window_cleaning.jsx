import React from "react";
import HomeCarousel from "../components/HomeCarousel";
import CustomNavbar from "../components/Navbar";
import Footer from "../components/Footer";
import CarpetCleaningContact from "../components/CarpetCleaningContact";
import ContactForm from "../components/ContactForm";
import { Container, Row, Col, Card, Button, Form, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import BannerButtons from "../components/BannerButtons";
import WeClean from "../components/weclean";
import CarpetCleaningPosts from "../posts/CarpetCleaningPosts";

function WindowCleaning() {
  return (
    <>
      <CustomNavbar />
      {/* Hero Section */}
      <Container fluid className="hero-section d-flex align-items-center" style={{
        backgroundImage: "url('/images/window_osm.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "80vh"
      }}>
        <div className="banner-content">
        <h1>Reliable Windows Cleaning for a Stress-Free Move</h1>
          <p>Move out with peace of mind as OSM Cleaning provides detailed Windows cleaning that meets real estate standards—leaving your property spotless and ready for inspection.</p>
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
                <h4>Leave Your Space Immaculate with Our Windows Cleaning Service</h4>
                <p>
                OSM Cleaning’s professional Windows Clean ensures your property is spotless and ready for handover. Whether you're moving out of a rental or preparing to sell, we handle every detail to meet inspection standards and leave a lasting impression.
                </p>
              </div>
            </Col>
            <Col md={6} className="">
            <img width="100%" src="/images/osm/windowsclean.jpg" alt="" />
            </Col>

          </Row>
        </div>
      </section>

      <CarpetCleaningPosts />

      <WeClean />

      <Footer />
    </>
  );
}

export default WindowCleaning;
