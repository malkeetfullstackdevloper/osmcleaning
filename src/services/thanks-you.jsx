
import CustomNavbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Container } from "react-bootstrap";

import { useEffect } from "react";

function ExitClean() {

    useEffect(() => {
        // Detect if the page was reloaded
        if (performance.navigation.type === performance.navigation.TYPE_RELOAD) {
        window.location.href = "/";
        }
    }, []);
  
    return (
    <>
      <title>Thank you - OSM Cleaning Service</title>

      <CustomNavbar />

      {/* Hero Section */}
      <Container
        fluid
        className="hero-section d-flex align-items-center"
        style={{
          backgroundImage: "url('/images/osm/exitclean.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "80vh",
        }}
      >
        <div
          className="banner-content text-center"
          style={{ margin: "0 auto" }}
        >
          <h1>Thank You</h1>
          <p>For Contacting Us, We Will Get Back to You Soon</p>
          <div
            className="appointment-btn"
            style={{ justifyContent: "center" }}
          >
            <a href="tel:+0431645222" className="btn">
              <i className="fa-solid fa-phone"></i> Call Now
            </a>
          </div>
        </div>
      </Container>

      <Footer />
    </>
  );
}

export default ExitClean;
