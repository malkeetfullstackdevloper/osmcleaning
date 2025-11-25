import React, { useState, useEffect } from "react";
import { Container, Navbar, Nav, NavDropdown, Button, Image } from "react-bootstrap";
import { Link , useNavigate} from "react-router-dom";
import api from "../api";


const Sidebar = () => {
  const [isSticky, setIsSticky] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    myFunction(); // Function will be called on page load
  }, []); // Empty dependency array ensures it runs only once when the component mounts

  const myFunction = () => {
    api.get("/isauth", {}, { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } })
    .then(res=>{
        console.log(res);
    })
    .catch((err) => {
        if (err.response) {
          // Server responded with a status outside the 2xx range
          if (err.response.status === 403) {
            navigate("/login");
            // Handle unauthorized access (e.g., redirect to login)
          } else {
            navigate("/login");
          }
        } else if (err.request) {
          // Request was made but no response received
          console.error("No response received from server.");
        } else {
          // Something else happened
          console.error("Error:", err.message);
        }
    });
          
  };

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

  const handleLogout = async () => {
    await api.post("/logout", {}, { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } });
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <Navbar expand="lg" bg="light" variant="light" className={`navvar ${isSticky ? "sticky-nav" : ""}`}>
      <Container>
        <Navbar.Brand as={Link} to="/">
          <Image src="/images/footer-logo.png" alt="Office Cleaning" fluid />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/admin/dashboard">Home</Nav.Link>
            <Nav.Link as={Link} to="/admin/posts">About</Nav.Link>
            <Button onClick={handleLogout} variant="light" className="ms-3">
              Log Out
            </Button>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Sidebar;
