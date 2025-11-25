import React from "react";
import { Container, Row, Accordion, Col, Button, Form, Card, Image, Dropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import CustomNavbar from "./Navbar";
import Footer from "./Footer";
import ContactForm from "./ContactForm";
import BannerButtons from "./BannerButtons";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import WeClean from "./weclean";
import WhyChoose from "./WhyChoose";
import Faq from "./faq";


const CleaningServicePage = () => {


  return (
    <>
      <CustomNavbar />
      {/* Hero Section */}
      <Container fluid className="hero-section hmpage d-flex align-items-center" style={{
        backgroundImage: "url('/images/End-of-Lease-Cleaning.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "80vh"
      }}>
        <div className="banner-content homepage">
          <h1>Professional End of Lease Cleaning and Carpet Steam Cleaning in Adelaide</h1>
          <p>Looking for expert cleaning services in Adelaide? We specialise in carpet steam cleaning, end of lease cleaning, and commercial cleaning services with delivering great results every time.</p>
          <div className="appointment-btn ">
            <BannerButtons />
          </div>
        </div>
      </Container>

      {/* About Us Section */}
      <section className="about-service">
        <Container className="text-center">
          <Row className="justify-content-center g-4">
            <Col lg={2} md={4}><Card><Card.Body><svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="InventoryOutlinedIcon"><path d="M5 5h2v3h10V5h2v5h2V5c0-1.1-.9-2-2-2h-4.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h6v-2H5zm7-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1"></path><path d="M21 11.5 15.51 17l-3.01-3-1.5 1.5 4.51 4.5 6.99-7z"></path></svg><h5>100% bond back guarantee</h5></Card.Body></Card></Col>
            <Col lg={2} md={4}><Card><Card.Body><svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="GroupOutlinedIcon"><path d="M9 13.75c-2.34 0-7 1.17-7 3.5V19h14v-1.75c0-2.33-4.66-3.5-7-3.5M4.34 17c.84-.58 2.87-1.25 4.66-1.25s3.82.67 4.66 1.25zM9 12c1.93 0 3.5-1.57 3.5-3.5S10.93 5 9 5 5.5 6.57 5.5 8.5 7.07 12 9 12m0-5c.83 0 1.5.67 1.5 1.5S9.83 10 9 10s-1.5-.67-1.5-1.5S8.17 7 9 7m7.04 6.81c1.16.84 1.96 1.96 1.96 3.44V19h4v-1.75c0-2.02-3.5-3.17-5.96-3.44M15 12c1.93 0 3.5-1.57 3.5-3.5S16.93 5 15 5c-.54 0-1.04.13-1.5.35.63.89 1 1.98 1 3.15s-.37 2.26-1 3.15c.46.22.96.35 1.5.35"></path></svg><h5>⁠7 days available</h5></Card.Body></Card></Col>
            <Col lg={2} md={4}><Card><Card.Body><svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="VerifiedUserOutlinedIcon"><path d="M12 1 3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5zm7 10c0 4.52-2.98 8.69-7 9.93-4.02-1.24-7-5.41-7-9.93V6.3l7-3.11 7 3.11zm-11.59.59L6 13l4 4 8-8-1.41-1.42L10 14.17z"></path></svg><h5>⁠Covering all Adelaide areas</h5></Card.Body></Card></Col>
            <Col lg={2} md={4}><Card><Card.Body><svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="RecyclingOutlinedIcon"><path d="M5.77 7.15 7.2 4.78l1.03-1.71c.39-.65 1.33-.65 1.72 0l1.48 2.46-1.23 2.06-1 1.62zm15.95 5.82-1.6-2.66-3.46 2L18.87 16H20c.76 0 1.45-.43 1.79-1.11.14-.28.21-.58.21-.89 0-.36-.1-.71-.28-1.03M16 21h1.5c.76 0 1.45-.43 1.79-1.11L20.74 17H16v-2l-4 4 4 4zm-6-4H5.7l-.84 1.41c-.3.5-.32 1.12-.06 1.65.28.57.87.94 1.52.94H10zm-3.88-2.65 1.73 1.04L6.48 9.9 1 11.27l1.7 1.02-.41.69c-.35.59-.38 1.31-.07 1.92l1.63 3.26zm10.9-9.21-1.3-2.17C15.35 2.37 14.7 2 14 2h-3.53l3.12 5.2-1.72 1.03 5.49 1.37 1.37-5.49z"></path></svg><h5>⁠Professional bond cleaning team</h5></Card.Body></Card></Col>
            <Col lg={2} md={4}><Card><Card.Body><svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="SpeedOutlinedIcon"><path d="m20.38 8.57-1.23 1.85a8 8 0 0 1-.22 7.58H5.07A8 8 0 0 1 15.58 6.85l1.85-1.23A10 10 0 0 0 3.35 19a2 2 0 0 0 1.72 1h13.85a2 2 0 0 0 1.74-1 10 10 0 0 0-.27-10.44z"></path><path d="M10.59 15.41a2 2 0 0 0 2.83 0l5.66-8.49-8.49 5.66a2 2 0 0 0 0 2.83"></path></svg><h5>⁠No hidden or extra charges</h5></Card.Body></Card></Col>
          </Row>
        </Container>
      </section>

      {/* about-us */}
      {/* <section className="about-service">
       <Container className="py-0 pb-3">
          <Row className="align-items-center">
              <Col md={6}>
                <div className="about-image">
                  <Image src="/images/office-cleaning.jpg" alt="Office Cleaning" fluid />
                </div>
              </Col>
              <Col md={6}>
                <div className="about-content">
                    <div className=""><i className="icon-print-roller"></i></div>
                    <h3 className="title">About Us</h3>
                    <h2>We Make Places Clean & Bright</h2>
                    <p className="short-desc">Our Cleaning services all across Adelaide are devoted to providing a broad variety of cleaning offerings in the city. Our firm specializes in complete commercial and Residential in Adelaide. We also provide Carpet cleaning, Window cleaning, and end-of-lease Cleaning services, Couch and Upholstery Cleaning, and Carpet Cleaning solutions at the cheapest prices.</p>
                </div>
              </Col>
            </Row>
      </Container>
    </section> */}
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


      {/* services*/}
      <section className="about-service abouT-banner ">
        <Container className="">
          <Row className="align-items-center g-4">
            <div class="top-heading text-center pb-4 mb-3 for_headline">
              <h2>End Of Lease Cleaning</h2>
              <br />
              <p>Our end-of-lease cleaning service in Adelaide is among the best in the city. As an experienced bond cleaning business, we understand how difficult it is to recover the bond amount from property management. Meet the stringent cleaning requirements of property agents and homeowners....</p>
              <Link to="/end_of_lease_cleaning" className="ms-3 btn btn-success">Read More</Link>
            </div>
            <Col md={4} className="mb-4">
              <Card className="shadow-sm border-0">
                <Card.Img variant="top" src="/images/osm/moveoutclean.jpg" />
                <Card.Body>
                  <Card.Title>Move Out Clean</Card.Title>
                  <Card.Text>
                    Simplify your move with OSM Cleaning’s professional move-out cleaning, ensuring your space is spotless for inspections or the next tenant.
                  </Card.Text>
                  <Link to="/move_outclean" className="btn btn-success">Read More</Link>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card className="shadow-sm border-0">
                <Card.Img variant="top" src="/images/osm/endofleaseclean.jpg" />
                <Card.Body>
                  <Card.Title>New Home Builder Clean</Card.Title>
                  <Card.Text>
                    Thorough post-construction cleaning services to ensure your newly built home is spotless, dust-free, and ready to move in.
                  </Card.Text>
                  <Link to="/move_inclean" className="btn btn-success">Read More</Link>
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
                  <Link to="/new_home_builder_clean" className="btn btn-success">Read More</Link>
                </Card.Body>
              </Card>
            </Col>

            <div class="top-heading text-center pb-4 mb-3 for_headline">
              <h2>Carpet Cleaning</h2>
              <br />
              <p>It's time to reach out to the best professionals in the neighbourhood to take care of your prized floor coverings. Our cleaners for carpets in Adelaide have extensive upholstery cleaning experience and a proven track record of exceeding clients' expectations.</p>
              <Link to="/carpet-cleaning" className="ms-3 btn btn-success">Read More</Link>
            </div>
            <Col md={4} className="mb-4">
              <Card className="shadow-sm border-0">
                <Card.Img variant="top" src="/images/upholstery-cleaning.jpg" />
                <Card.Body>
                  <Card.Title>Upholstery Cleaning</Card.Title>
                  <Card.Text>
                    Refresh and rejuvenate your furniture! Our professional upholstery cleaning service brings new life to your sofas, chairs and other upholstered items, leaving them looking, feeling and smelling fresh.
                  </Card.Text>
                  <Link to="/upholstery_cleaning" className="btn btn-success">Read More</Link>
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
                  <Link to="/mattress_cleaning" className="btn btn-success">Read More</Link>
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
                  <Link to="/tile_grout_cleaning" className="btn btn-success">Read More</Link>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Immaculate Interiors Section */}
      <section className="home-page-why why-choose">
        <div className="inner-about">
          <div className="grid gap-y-4">
            <Row className="">
              <Col className="green-box p-0 m-0" md={6}>
                <div className="about-us-box">
                  <h4>Immaculate Interiors, Peaceful Living</h4>
                  <p>Our expert cleaning team ensures every corner shines, making your home fresh and inviting.</p>
                </div>
              </Col>
              <Col className="p-0 m-0" md={6}>
                <img width="100%" src="/images/office-cleaning.jpg" alt="" />
              </Col>
            </Row>
          </div>
        </div>
      </section>

      <WhyChoose />

      <Faq />

      {/* We Clean With Your Satisfaction in Mind Section */}
      <WeClean />
      <Footer />
    </>
  );
};

export default CleaningServicePage;