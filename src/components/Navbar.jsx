import React, { useState, useEffect } from "react";
import { Container, Navbar, Nav, NavDropdown, Button, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./CustomNavbar.css";



const CustomNavbar = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
      // Load Facebook Pixel if not already loaded
      if (!window.fbq) {
        (function(f, b, e, v, n, t, s) {
          if (f.fbq) return;
          n = f.fbq = function() {
            n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
          };
          if (!f._fbq) f._fbq = n;
          n.push = n;
          n.loaded = true;
          n.version = "2.0";
          n.queue = [];
          t = b.createElement(e);
          t.async = true;
          t.src = v;
          s = b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t, s);
        })(window, document, "script", "https://connect.facebook.net/en_US/fbevents.js");
  
        window.fbq("init", "1062290062731559");
        window.fbq("track", "PageView");
      }
    }, []);

  return (
    <Navbar expand="lg"  variant="light" className={`navvar ${isSticky ? "sticky-nav" : ""}`}>
      <Container>
        <Navbar.Brand as={Link} to="/">
          <Image src="/images/osmcleaning.png" alt="End of lease Clean" fluid />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">

            <NavDropdown title="End of lease cleaning" id="residential-cleaning-dropdown">
              <NavDropdown.Item as={Link} to="/end_of_lease_cleaning/">End of lease cleaning</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/exitclean/">Exit clean</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/bondclean/">Bond clean</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/move_outclean/">Move out clean</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/move_inclean/">Move in cleaning</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/new_home_builder_clean/">New home builder clean</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/vacate-cleaning-adelaide/">Vacate cleaning adelaide</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Carpet Steam cleaning" id="carpet-cleaning-dropdown">
              <NavDropdown.Item as={Link} to="/carpet-cleaning">Carpet Steam cleaning</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/upholstery_cleaning/">Upholstery cleaning</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/rugcleaning/">Rug cleaning</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/cleaning_couch/">Couch cleaning</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/mattress_cleaning/">Mattress cleaning</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Floor and Windows Cleaning " id="floor-dropdown">
              <NavDropdown.Item as={Link} to="/tile_grout_cleaning/">Tile and grout cleaning</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/window_cleaning/">Windows cleaning</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link as={Link} to="/aboutus">About</Nav.Link>
            <Nav.Link as={Link} to="/contactus">Contact</Nav.Link>
            <Button as={Link} to="/getquote" variant="light" className="ms-3">
              Get a Quote
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
