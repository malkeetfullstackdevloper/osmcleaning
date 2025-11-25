import React from "react";
import { Container, Row, Accordion, Col, Card, Button, Form, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import CustomNavbar from "./Navbar";
import Footer from "./Footer";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ContactForm from "./ContactForm";
import BannerButtons from "./BannerButtons";
import WhyChoose from "./WhyChoose";
import WeClean from "./weclean";

const CustomPrevArrow = (props) => {

  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-arrow left-arrow`}
      style={{ ...style, display: "block", left: "10px", zIndex: "10" }}
      onClick={onClick}
    >
      <FaChevronLeft size={20} />
    </div>
  );
};

const CustomNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-arrow right-arrow`}
      style={{ ...style, display: "block", right: "10px", zIndex: "10" }}
      onClick={onClick}
    >
      <FaChevronRight size={20} />
    </div>
  );
};

const AboutUs = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };



  return (
    <>
      <CustomNavbar />

      {/* Hero Section */}
      <Container
        fluid
        className="abouT-banner hero-section d-flex align-items-center"
        style={{
          backgroundImage: "url('/images/carpet-cleaning.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "80vh",
        }}
      >
        <div className="banner-content">
          <h1>A Decade of Professional Cleaning Solutions</h1>
          <p>With over a decade of experience, OSM Cleaning has earned a reputation as one of Tauranga’s most efficient and reliable cleaning service providers.</p>
          <div className="appointment-btn justify-content-start">
            <BannerButtons />
          </div>
        </div>
      </Container>

      {/* About Us Section */}
      <section className="about-service">
        <Container className="text-center">
          <Row className="justify-content-center g-4">
            <Col lg={2} md={4}><Card><Card.Body><svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="InventoryOutlinedIcon"><path d="M5 5h2v3h10V5h2v5h2V5c0-1.1-.9-2-2-2h-4.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h6v-2H5zm7-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1"></path><path d="M21 11.5 15.51 17l-3.01-3-1.5 1.5 4.51 4.5 6.99-7z"></path></svg><h5>Regular Audits</h5></Card.Body></Card></Col>
            <Col lg={2} md={4}><Card><Card.Body><svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="GroupOutlinedIcon"><path d="M9 13.75c-2.34 0-7 1.17-7 3.5V19h14v-1.75c0-2.33-4.66-3.5-7-3.5M4.34 17c.84-.58 2.87-1.25 4.66-1.25s3.82.67 4.66 1.25zM9 12c1.93 0 3.5-1.57 3.5-3.5S10.93 5 9 5 5.5 6.57 5.5 8.5 7.07 12 9 12m0-5c.83 0 1.5.67 1.5 1.5S9.83 10 9 10s-1.5-.67-1.5-1.5S8.17 7 9 7m7.04 6.81c1.16.84 1.96 1.96 1.96 3.44V19h4v-1.75c0-2.02-3.5-3.17-5.96-3.44M15 12c1.93 0 3.5-1.57 3.5-3.5S16.93 5 15 5c-.54 0-1.04.13-1.5.35.63.89 1 1.98 1 3.15s-.37 2.26-1 3.15c.46.22.96.35 1.5.35"></path></svg><h5>Expert Team</h5></Card.Body></Card></Col>
            <Col lg={2} md={4}><Card><Card.Body><svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="VerifiedUserOutlinedIcon"><path d="M12 1 3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5zm7 10c0 4.52-2.98 8.69-7 9.93-4.02-1.24-7-5.41-7-9.93V6.3l7-3.11 7 3.11zm-11.59.59L6 13l4 4 8-8-1.41-1.42L10 14.17z"></path></svg><h5>Competitive Prices</h5></Card.Body></Card></Col>
            <Col lg={2} md={4}><Card><Card.Body><svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="RecyclingOutlinedIcon"><path d="M5.77 7.15 7.2 4.78l1.03-1.71c.39-.65 1.33-.65 1.72 0l1.48 2.46-1.23 2.06-1 1.62zm15.95 5.82-1.6-2.66-3.46 2L18.87 16H20c.76 0 1.45-.43 1.79-1.11.14-.28.21-.58.21-.89 0-.36-.1-.71-.28-1.03M16 21h1.5c.76 0 1.45-.43 1.79-1.11L20.74 17H16v-2l-4 4 4 4zm-6-4H5.7l-.84 1.41c-.3.5-.32 1.12-.06 1.65.28.57.87.94 1.52.94H10zm-3.88-2.65 1.73 1.04L6.48 9.9 1 11.27l1.7 1.02-.41.69c-.35.59-.38 1.31-.07 1.92l1.63 3.26zm10.9-9.21-1.3-2.17C15.35 2.37 14.7 2 14 2h-3.53l3.12 5.2-1.72 1.03 5.49 1.37 1.37-5.49z"></path></svg><h5>Eco-Friendly Cleaning</h5></Card.Body></Card></Col>
            <Col lg={2} md={4}><Card><Card.Body><svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="SpeedOutlinedIcon"><path d="m20.38 8.57-1.23 1.85a8 8 0 0 1-.22 7.58H5.07A8 8 0 0 1 15.58 6.85l1.85-1.23A10 10 0 0 0 3.35 19a2 2 0 0 0 1.72 1h13.85a2 2 0 0 0 1.74-1 10 10 0 0 0-.27-10.44z"></path><path d="M10.59 15.41a2 2 0 0 0 2.83 0l5.66-8.49-8.49 5.66a2 2 0 0 0 0 2.83"></path></svg><h5>Quick Resolution</h5></Card.Body></Card></Col>
          </Row>
        </Container>
      </section>

      <section className="about-details py-5 pb-3">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8}>
              <div className="about-text">
                <h2 className="mb-4">Why Choose Our Cleaning Services in Adelaide?</h2>
                <p>
                  Our cleaning company has built a reputation across Adelaide for delivering consistent, high-quality cleaning services tailored to both residential and commercial spaces. We understand that a clean environment is essential not only for aesthetics but also for well-being, productivity, and overall peace of mind. With this in mind, we’ve developed a comprehensive range of cleaning solutions designed to meet the specific needs of our diverse clientele. From everyday home cleaning to detailed commercial deep cleans, our team is equipped with the skills, tools, and dedication to handle every job with care and precision. Our cleaners are trained professionals who take pride in their work, treating every property as if it were their own. We use eco-friendly products wherever possible to ensure the safety of your family, pets, or employees, and we continually update our techniques to align with industry best practices. We believe in building trust through reliability, transparency, and genuine customer service. That means no hidden fees, no rushed jobs, and no compromise on quality. Clients choose us time and again not just for our attention to detail but because we make the entire process easy—from the first inquiry to the final walk-through. We also understand that every client has unique scheduling needs, so we offer flexible time slots and customizable service plans. Whether you need a weekly home clean, an end-of-lease cleanup, or a one-off post-renovation scrub-down, we can tailor our services to suit your timeline and budget. Our offerings include, but are not limited to, carpet steam cleaning, window washing, tile and grout scrubbing, couch and upholstery refreshes, and move-in or move-out cleans. We even offer specialized cleaning for real estate agents and property managers looking to present homes in the best possible light. Over the years, we've grown not just through marketing but through word-of-mouth and repeat clients—people who value our commitment to excellence. Our goal is simple: to leave every space sparkling, sanitized, and ready for whatever life throws at it. As Adelaide locals, we also take pride in serving our community with integrity and care. Every job, no matter how big or small, is a chance to prove why we’re one of the most trusted cleaning companies in the area. We welcome new clients with open arms and aim to deliver an experience that’s as stress-free as it is effective. When you hire us, you’re not just getting a cleaning service—you’re gaining a dependable partner in cleanliness. Let us handle the mess, so you can enjoy the freshness, comfort, and peace of a truly clean space.
                </p>


              </div>
            </Col>
            <Col lg={4}>
              <div className="about-image">
                <Image src="/images/office-cleaning.jpg" alt="Office Cleaning" fluid />
              </div>
              <ul>
                <li><strong>Move-in and move-out</strong> cleaning for stress-free transitions</li>
                <li><strong>Carpet steam cleaning</strong> using high-grade equipment</li>
                <li><strong>Window cleaning</strong> for both low and high-rise properties</li>
                <li><strong>Couch, mattress,</strong> and upholstery deep cleaning</li>
                <li><strong>Post-renovation</strong> and construction site cleanups</li>
              </ul>
              <p>
                What sets us apart is not just the quality of our work but the relationships we build with our clients. Much of our business comes from repeat customers and referrals—a testament to our reliability and the trust we’ve earned in the community.
              </p>
              <p>
                If you're looking for a professional, friendly, and dependable cleaning service in Adelaide, you've come to the right place. We're more than just cleaners—we're partners in creating spaces that feel fresh, safe, and welcoming. Get in touch today to discover how we can help you maintain a spotless environment, no matter the size or scope of the job.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* About Company Section */}
      <section className="about-US">
        <div className="inner-about">
          <Row className="align-items-center g-4">
            <Col md={6} className="">
              <div className="about-us-box">
                <h4>Our Competitive Edge</h4>
                <p>
                  The cornerstone of Osm Cleaning’s success lies in our commitment to high-quality service. Each clients unique needs are at the heart of our approach. Our team, comprised of experienced and professional staff, excels in creating customised cleaning plans that cater precisely to your specifications.
                </p>
              </div>
            </Col>
            <Col md={6} className="">
                <img width="100%" src="/images/office-cleaning.jpg" alt="" />
           
            </Col>

          </Row>
        </div>
      </section>

      {/* First Aid Certification */}
      {/* <section className="first-aid pt-5">
        <Container>
          <h2 className="text-center">First Aid Certified Team</h2>
          <p> Our team’s First Aid Certification ensures we’re equipped to respond promptly and effectively to any health emergencies on the job. This training is essential for safeguarding the well-being of both our staff and clients in the event of accidents or unexpected health concerns.</p>
          <Row className="g-4">
            <Col md={6}>
              <Image src="/images/award.png" alt="Certification-1" fluid />
            </Col>
            <Col md={6}>
              <Image src="/images/award1.png" alt="Certification-2" fluid />
            </Col>
            <Col md={6}>
              <Image src="/images/award2.png" alt="Certification-3" fluid />
            </Col>
            <Col md={6}>
              <Image src="/images/award4.png" alt="Certification-4" fluid />
            </Col>
          </Row>
        </Container>
      </section> */}

      {/* Testimonials Section */}
      <section className="testimonal">
        <Container className="mw-100">
          <Row className="align-items-center">
            <Col md={5} className="bg-div">
              <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium icon" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="FormatQuoteRoundedIcon"><path d="M7.17 17c.51 0 .98-.29 1.2-.74l1.42-2.84c.14-.28.21-.58.21-.89V8c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h2l-1.03 2.06c-.45.89.2 1.94 1.2 1.94m10 0c.51 0 .98-.29 1.2-.74l1.42-2.84c.14-.28.21-.58.21-.89V8c0-.55-.45-1-1-1h-4c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h2l-1.03 2.06c-.45.89.2 1.94 1.2 1.94"></path></svg>
              <h2>What Our Customers Are Saying</h2>
            </Col>
            <Col md={7} className="testimonal-slider">
              <Slider {...settings}>
                <div className="slide">
                  <p>
                    "What sets OSM Cleaning apart is their strong commitment to delivering
                    outstanding results. I was amazed by how immaculate the College looked after
                    their services."
                  </p>
                  <h4>Jason Yorke</h4>
                  <h6>Aquinas College</h6>
                </div>
                <div className="slide">
                  <p>
                    "Their attention to detail and professionalism are unmatched. I highly recommend
                    OSM Cleaning for any business looking for top-quality cleaning services."
                  </p>
                  <h4>Sarah Thompson</h4>
                  <h6>GreenTech Ltd</h6>
                </div>
                <div className="slide">
                  <p>
                    "Absolutely wonderful experience! The team was thorough and exceeded my
                    expectations."
                  </p>
                  <h4>Mark Reynolds</h4>
                  <h6>Homeowner</h6>
                </div>
              </Slider>
            </Col>
          </Row>
        </Container>
      </section>

      <WhyChoose />
      
      
      <WeClean />

      <Footer />
    </>
  );
};

export default AboutUs;
