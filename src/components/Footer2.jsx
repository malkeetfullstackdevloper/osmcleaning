import React from "react";
import { Container ,Col,Row, Image, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.min.css';

function Footer() {
  return (
    <>

    <div>
      {/* Button in Hero Section */}
            <Button
            className="mbbtn"
              size="lg"
              variant="danger"
              onClick={() => {
                const formSection = document.getElementById("quote");
                if (formSection) {
                  formSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              Free Quote
            </Button>

      <a style={{right: 0 }} className="mbbtn" href="tel:0431645222"> <i className="fa-solid fa-phone"></i> 0431645222</a>
    </div>
    
    <footer>
    <Container fluid className="">
        <Row>
          <Col md={3}>
             <div className="me-0 me-lg-5">
             {/* <Image src="/images/footer-logo.png" alt="Office Cleaning" fluid /> */}
              <Image src="/images/footer-logo.png" alt="Office Cleaning" fluid />
             
             <p>OSM Cleaning Service has established itself as Adelaide's top cleaning service.</p>
             </div>
          </Col>
          <Col md={3}>
            <h5>Address</h5>
            <ul>
              <li> <i className="fa-solid fa-location-dot"></i> <a href="#">Findon SA 5023</a></li>
              <li><i className="fa-solid fa-envelope"></i> <a href="mailto:Osmcleaningservices@gmail.com">Osmcleaningservices@gmail.com</a></li>
              <li><i className="fa-solid fa-phone"></i> <a href="tel:0431645222">0431645222</a></li>
              <div className="social-profile">
                  <a href="https://www.facebook.com/profile.php?id=61559681475825&amp;mibextid=LQQJ4d"><i className="fa-brands fa-facebook-f"></i></a>
                  <a href="https://www.instagram.com/osmcleaningservices/"><i className="fa-brands fa-instagram"></i></a>

                </div>
            </ul>
          </Col>

          <Col md={3}>
            <h5>Service Links</h5>
            <ul>
              <li><Link to="/end_of_lease_cleaning">End of lease Cleaning</Link></li>
              <li><Link to="/exitclean">Exit Cleaning</Link></li>
              <li><Link to="/window_cleaning">Window Cleaning</Link></li>
              <li><Link to="/tile_grout_cleaning">Tiles & Grout cleaning</Link></li>
              <li><Link to="/upholstery_cleaning">Upholstery Cleaning</Link></li>
            </ul>
            
          </Col>
          <Col md={3}>
            
            <ul>
              <li><Link to="/carpet-cleaning">Carpet Cleaning</Link></li>
              <li><Link to="/cleaning_couch">Couch Cleaning</Link></li>
              <li><Link to="/rugcleaning">Rug Cleaning</Link></li>
              <li><Link to="/bondclean">Bond Cleaning</Link></li>
              <li><Link to="/move_outclean">Move Out Cleaning</Link></li>
              <li><Link to="/move_inclean">Move In Cleaning</Link></li>
            </ul>
            
          </Col>
        </Row>
      </Container>
    </footer>
    <div className="copy-right text-center">
     <p>Copyright ©2020 osmcleaningservices. All Rights Reserved</p>
    </div>
    </>

  );
 
}

export default Footer
