import {React , useEffect ,useState} from "react";
import HomeCarousel from "./HomeCarousel";
import CustomNavbar from "./Navbar";
import Footer from "./Footer";
import { Container, Row, Col, Card, Button, Form, Image } from "react-bootstrap";
import { useParams ,useNavigate, Link  } from "react-router-dom";
import axios from "axios";
import ContactForm from "./ContactForm";

function Services() {
  const { title } = useParams(); // Get title from URL params
  const [post, setPost] = useState([]);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Perform form validation and submission logic here...

    navigate("/getquote"); // Navigate to another page after submission
  };
  useEffect(() => {
    if (title) {
      axios.get(`https://admin.osmcleaningservices.au/api/post?title=${decodeURIComponent(title)}`)
        .then(res => setPost(res.data))
        .catch(error => console.error(error));
    }
  }, [title]);
  return (
    <>
      <CustomNavbar />
        {/* Hero Section */}
        <Container fluid className="hero-section d-flex align-items-center" style={{
          backgroundImage: `url(${post.bg_image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "80vh"
        }}>
          <div className="banner-content">
            <h1>{post.title}</h1>
            <p>{post.peragraph}</p>
            <div className="appointment-btn ">
              <Button variant="primary" onClick={handleSubmit}><svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium button-svg" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="CalendarMonthRoundedIcon"><path d="M17 2c-.55 0-1 .45-1 1v1H8V3c0-.55-.45-1-1-1s-1 .45-1 1v1H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-1V3c0-.55-.45-1-1-1m2 18H5V10h14zm-8-7c0-.55.45-1 1-1s1 .45 1 1-.45 1-1 1-1-.45-1-1m-4 0c0-.55.45-1 1-1s1 .45 1 1-.45 1-1 1-1-.45-1-1m8 0c0-.55.45-1 1-1s1 .45 1 1-.45 1-1 1-1-.45-1-1m-4 4c0-.55.45-1 1-1s1 .45 1 1-.45 1-1 1-1-.45-1-1m-4 0c0-.55.45-1 1-1s1 .45 1 1-.45 1-1 1-1-.45-1-1m8 0c0-.55.45-1 1-1s1 .45 1 1-.45 1-1 1-1-.45-1-1"></path></svg> Get A Quote</Button>
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.5 6C11.496 6 5 12.496 5 20.5C5 28.504 11.496 35 19.5 35C27.504 35 34 28.504 34 20.5C34 12.496 27.504 6 19.5 6ZM16.6 27.025V13.975L25.3 20.5L16.6 27.025Z" fill="#295000"></path><circle cx="20" cy="20" r="19.5" stroke="#295000"></circle></svg>
            </div>
          </div>
      </Container>
      {/* contact-us-form */}
      
      <Container>
          <Row>
            <Col md={12}>
              <div className="contact-form translate-form">
              {/* <ContactForm /> */}
                {/* <Form className="quote-form p-4 shadow">
                  <h2 className="mb-4">Schedule a Site Assessment with Our Manager</h2>
                  <p>Arrange a visit from our site manager to expertly assess your cleaning needs. We'll provide a personalized walkthrough to understand your specific requirements and devise the ideal cleaning solution for your space. Book an appointment now for a comprehensive evaluation.</p>
                  <Row>
                    <Col md={12}>
                      <Form.Group className="mb-4">
                        <Form.Control type="text" placeholder="First name*" />
                      </Form.Group>
                    </Col>
                    <Col md={12}>
                      <Form.Group className="mb-4">
                        <Form.Control type="text" placeholder="Last name*" />
                      </Form.Group>
                    </Col>
                    <Col md={12}>
                      <Form.Group className="mb-4">
                        <Form.Control type="email" placeholder="Email address" />
                      </Form.Group>
                    </Col>
                    <Col md={12}>
                      <Form.Group className="mb-4">
                        <Form.Control type="phone" placeholder="Phone number" />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Form.Group className="mb-4">
                    <Form.Control as="textarea" rows={3} placeholder="Message" />
                  </Form.Group>
                  <Button variant="success">Schedule Now</Button>
                </Form> */}
              </div>
            </Col>
          </Row>
        </Container>

        <Container className="blog-page py-5">
          <Row>
            <Col md={7}>
            <div className="dynamic-content" dangerouslySetInnerHTML={{ __html: post.content }} />
            </Col>

            <Col md={5}>
            <ContactForm />
              <Row className="mt-2 g-4 blog-images">
              <Col md={4}>
                   <Link to="https://www.instagram.com/p/C_XUoX6PYmV/"> <Image src="/images/insta/insta1.jpg" alt="Office Cleaning" fluid /></Link>
              </Col>
              <Col md={4}>
                   <Link to="https://www.instagram.com/p/C_XUoX6PYmV/"> <Image src="/images/insta/insta2.jpg" alt="Office Cleaning" fluid /></Link>
              </Col>
              <Col md={4}>
                   <Link to="https://www.instagram.com/p/C_XUoX6PYmV/"> <Image src="/images/insta/insta3.jpg" alt="Office Cleaning" fluid /></Link>
              </Col>
              <Col md={4}>
                   <Link to="https://www.instagram.com/p/C_XUoX6PYmV/"> <Image src="/images/insta/insta4.jpg" alt="Office Cleaning" fluid /></Link>
              </Col>
              <Col md={4}>
                   <Link to="https://www.instagram.com/p/C_XUoX6PYmV/"> <Image src="/images/insta/insta5.jpg" alt="Office Cleaning" fluid /></Link>
              </Col>
              <Col md={4}>
                   <Link to="https://www.instagram.com/p/C_XUoX6PYmV/"> <Image src="/images/insta/insta6.jpg" alt="Office Cleaning" fluid /></Link>
              </Col>
              <Col md={4}>
                   <Link to="https://www.instagram.com/p/C_XUoX6PYmV/"> <Image src="/images/insta/insta1.jpg" alt="Office Cleaning" fluid /></Link>
              </Col>
              <Col md={4}>
                   <Link to="https://www.instagram.com/p/C_XUoX6PYmV/"> <Image src="/images/insta/insta2.jpg" alt="Office Cleaning" fluid /></Link>
              </Col>
              <Col md={4}>
                   <Link to="https://www.instagram.com/p/C_XUoX6PYmV/"> <Image src="/images/insta/insta3.jpg" alt="Office Cleaning" fluid /></Link>
              </Col>
              <Col md={4}>
                   <Link to="https://www.instagram.com/p/C_XUoX6PYmV/"> <Image src="/images/insta/insta4.jpg" alt="Office Cleaning" fluid /></Link>
              </Col>
              <Col md={4}>
                   <Link to="https://www.instagram.com/p/C_XUoX6PYmV/"> <Image src="/images/insta/insta5.jpg" alt="Office Cleaning" fluid /></Link>
              </Col>
              <Col md={4}>
                   <Link to="https://www.instagram.com/p/C_XUoX6PYmV/"> <Image src="/images/insta/insta6.jpg" alt="Office Cleaning" fluid /></Link>
              </Col>
              <div className="view-btn text-center">
              <a role="button" tabindex="0" href="https://www.instagram.com/p/C_XUoX6PYmV/" class="ms-3 " data-discover="true">view on instagram</a>
              </div>
              </Row>

            </Col>
          </Row>
        </Container>

            
     
            
      <Footer />
    </>
  );
}

export default Services;
