import React from "react";
import HomeCarousel from "../components/HomeCarousel";
import CustomNavbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";
import { Container, Row, Col, Card, Button, Form, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import BannerButtons from "../components/BannerButtons";

function OfficeCleaning() {
  return (
    <>
      <CustomNavbar />
        {/* Hero Section */}
        <Container fluid className="hero-section d-flex align-items-center" style={{
          backgroundImage: "url('/images/services-banner.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "80vh"
        }}>
          <div className="banner-content">
            <h1>Impress with Spotless, Professional Office Spaces</h1>
            <p>Create a clean, productive work environment with Osm Cleaning’s Office Cleaning Services. </p>
            <div className="appointment-btn ">
              <BannerButtons />
            </div>
          </div>
      </Container>
      <Container>
          <Row>
            <Col md={12}>
              <div className="contact-form translate-form">
              <ContactForm />
                
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
                      <h4>Enhancing Workspaces with Professional Office Cleaning</h4>
                      <p>
                      At Osm Cleaning, we understand that a clean office reflects a professional image. Our dedicated team delivers tailored office cleaning solutions that promote employee well-being, boost productivity, and leave a lasting impression on clients and visitors alike.
                      </p>
                    </div>
                  </Col>
                  <Col md={6} className="">
                    <video width="100%" controls poster="/images/thumbnail.png" style={{ borderRadius: "12px" }}>
                      <source src="/images/Raw-87.MP4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </Col>
                </Row>
              </div>
            </section>

      {/* our Service */}
        <section className="banner-bottom">
        <Container className="py-5">
            <div className="top-heading text-center pb-4 mb-3">
              <p className="">Who is This Service For?</p>
              <h2>Elevate Your Space with Our Service</h2>
            </div>
            <div className="grid gap-y-4">
                <Row className="g-4">
                  <Col lg={4} md={6}>
                    <div className="card-box">
                      <Image src="/images/office-cleaning.jpg" alt="Office Cleaning" fluid />
                      <div className="content-wrapper">
                        <h3 className="title"><a href="#">Office Cleaning</a></h3>
                        <p className="short-desc">Cleaning the workplace is critical for maintaining a good work</p>
                        <a href="#"><button type="button">learn more</button></a>
                      </div>
                    </div>
                  </Col>
                  <Col lg={4} md={6}>
                    <div className="card-box">
                      <Image src="/images/End-of-Lease-Cleaning.jpeg" alt="End of Lease Cleaning" fluid />
                      <div className="content-wrapper">
                        <h3 className="title"><a href="#">End of Lease Cleaning</a></h3>
                        <p className="short-desc">Cleaning the workplace is critical for maintaining a good work</p>
                        <a href="#"><button type="button">learn more</button></a>
                      </div>
                    </div>
                  </Col>
                  <Col lg={4} md={6}>
                    <div className="card-box">
                      <Image src="/images/c.png" alt="Builder Cleaning" fluid />
                      <div className="content-wrapper">
                        <h3 className="title"><a href="#">Builder Cleaning</a></h3>
                        <p className="short-desc">Cleaning the workplace is critical for maintaining a good work</p>
                        <a href="#"><button type="button">learn more</button></a>
                      </div>
                    </div>
                  </Col>
                  <Col lg={4} md={6}>
                    <div className="card-box">
                      <Image src="/images/carpet-cleaning.jpg" alt="Carpet Cleaning" fluid />
                      <div className="content-wrapper">
                        <h3 className="title"><a href="#">Carpet Cleaning</a></h3>
                        <p className="short-desc">Cleaning the workplace is critical for maintaining a good work</p>
                        <a href="#"><button type="button">learn more</button></a>
                      </div>
                    </div>
                  </Col>
                  <Col lg={4} md={6}>
                    <div className="card-box">
                      <Image src="/images/couch-steam-cleaning.webp" alt="Couch Steam Cleaning" fluid />
                      <div className="content-wrapper">
                        <h3 className="title"><a href="#">Couch Steam Cleaning</a></h3>
                        <p className="short-desc">Cleaning the workplace is critical for maintaining a good work</p>
                        <a href="#"><button type="button">learn more</button></a>
                      </div>
                    </div>
                  </Col>
                  <Col lg={4} md={6}>
                    <div className="card-box">
                      <Image src="/images/upholstery-cleaning.jpg" alt="Upholstery Cleaning" fluid />
                      <div className="content-wrapper">
                        {/* <div className="icon"><i className="icon-print-roller"></i></div> */}
                        <h3 className="title"><a href="#">Upholstery Cleaning</a></h3>
                        <p className="short-desc">Cleaning the workplace is critical for maintaining a good work</p>
                        <a href="#"><button type="button">learn more</button></a>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
    
          </Container>
        </section>

        
              {/* Benefits Section */}
              <section className="our-service">
               <Container className="pb-5">
                <div className="top-heading text-center pb-4 mb-3">
                  <p className="">Who is This Service For?</p>
                  <h2>Unlock the Benefits of Expert Cleaning</h2>
                </div>
                <div className="grid gap-y-4">
                    <Row className="g-4">
                      <Col lg={4} md={6}>
                        <div className="card-box">
                          <Image src="/images/office-cleaning.jpg" alt="Office Cleaning" fluid />
                          <div className="content-wrapper">
                            <h3 className="title"><a href="#">Professional Staff</a></h3>
                            <p className="short-desc">Cleaning the workplace is critical for maintaining a good work</p>
                          </div>
                        </div>
                      </Col>
                      <Col lg={4} md={6}>
                        <div className="card-box">
                          <Image src="/images/End-of-Lease-Cleaning.jpeg" alt="End of Lease Cleaning" fluid />
                          <div className="content-wrapper">
                            <h3 className="title"><a href="#">Quality Products</a></h3>
                            <p className="short-desc">Cleaning the workplace is critical for maintaining a good work</p>
                          </div>
                        </div>
                      </Col>
                      <Col lg={4} md={6}>
                        <div className="card-box">
                          <Image src="/images/c.png" alt="Builder Cleaning" fluid />
                          <div className="content-wrapper">
                            <h3 className="title"><a href="#">Peace of Mind</a></h3>
                            <p className="short-desc">Cleaning the workplace is critical for maintaining a good work</p>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </div>
        
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

export default OfficeCleaning;
