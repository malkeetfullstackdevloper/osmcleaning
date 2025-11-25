import React from "react";
import { Container, Row,  Col ,} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

const WhyChoose = () => {


    return (
        <>
            {/* Why Choose Us Section */}
            <section className="why-choose">
            <div className="top-headingz text-center">
                <Container>
                  <Row>
                  <p  className="text-white">Your Assurance of Excellence in Cleaning Services</p>
                  <h2 className="text-white">WHY CHOOSE OUR CLEANING SERVICES ADELAIDE?</h2>
                  <h3 className="text-white">We are the top-rated “End of Lease and Carpet Cleaning Company in Adelaide”. Our “Commercial Cleaning Services” and “office cleaning services” come with a 100% Guarantee.</h3>
                  <p className="text-white">We offer a 100% Guarantee with both our office cleaning and window cleaning services in Adelaide. Our dedicated team provides a thorough and detailed office cleaning service every time.  With cleaners in Adelaide that have an eye for detail and clean to the highest standards, our happy customers keep coming back to OSM Cleaning because our service is simply unmatched!
                  We take great pride in providing the highest quality end of lease cleaning, carpet steam cleaning, and commercial cleaning services in Adelaide. We value our clients and put a lot of effort into fulfilling our commitments to ensure our clients are 100% satisfied</p>
                  
                  </Row>
                </Container>
              </div>
             <div className="inner-about">
              <div className="grid gap-y-4">
                  <Row className="g-4">
                    <Col className="p-0 m-0" md={6}>
                      {/* <video width="100%" controls poster="/images/Consistent-Quality-Assurance.jpg" >
                      <source src="/images/Raw-87.MP4" type="video/mp4"/>
                      Your browser does not support the video tag.
                     </video> */}
                     <img width="100%" src="/images/carpet-cleaning.jpg" alt="" />
                    </Col>
                    <Col className="green-box p-0 m-0" md={6}>
                      <div className="about-us-box">
                           <h4>Reliable Quality Assurance</h4>
                           <p>Our dedicated managers perform bi-weekly quality audits to maintain the highest standards of cleanliness and hygiene across all facilities. This consistent, hands-on oversight ensures every cleaning task meets our commitment to excellence.</p>
                      </div>
                    </Col>
      
                    <Col className="green-box p-0 m-0" md={6}>
                      <div className="about-us-box">
                           <h4>Enhance your space with OSM cleaning</h4>
                           <p>Embark on a journey of cleanliness with OSM Cleaning. We specialise in transforming spaces into sparkling havens. Our dedicated team brings the expertise, care, and attention to detail your home or business needs.</p>
                      </div>
                    </Col>
      
                    <Col className="p-0 m-0" md={6}>
                    <img width="100%" src="/images/office-cleaning.jpg" alt="" />
                    </Col>
      
                    <Col className="p-0 m-0" md={6}>
                    <img width="100%" src="/images/floor_img.png" alt="" />
                    </Col>
                    <Col className="green-box p-0 m-0" md={6}>
                      <div className="about-us-box">
                           <h4>Environmentally Friendly Cleaning</h4>
                           <p>Sustainability is at the heart of what we do. We use eco-friendly products and methods that are safe for both people and the planet, creating a healthier space for you and those around you.</p>
                      </div>
                    </Col>
      
                    <Col className="green-box p-0 m-0" md={6}>
                      <div className="about-us-box">
                           <h4>Professionals and High-Qualified Team</h4>
                           <p>Our team of certified cleaners brings specialized skills and a professional approach to every job. Their expertise in a variety of areas is vital, ensuring a thorough and tailored cleaning service to meet the specific needs of each facility.</p>
                      </div>
                    </Col>
                    <Col className="p-0 m-0" md={6}>
                      <img width="100%" src="/images/osm2.webp" alt="" />
                    </Col>
      
                  </Row>
                </div>
            </div>
          </section>
        </>
    )
}

export default WhyChoose;