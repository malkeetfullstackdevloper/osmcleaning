import React from "react";
import { Container, Row, Accordion, Col, Button, Form, Card, Image ,Dropdown} from "react-bootstrap";

import { Link, useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

const BannerButtons = () => {
    const navigate = useNavigate();
    const handleSubmit = (e) => {
    e.preventDefault();
    
    // Perform form validation and submission logic here...

    navigate("/getquote"); // Navigate to another page after submission
    };


    return(
        <>

        <a href="tel:0431645222" className="btn btn1">
            <i class="fa-solid fa-phone"></i>  Call Now
        </a>
        <Button variant="primary" onClick={handleSubmit} className="btn2"><svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium button-svg" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="CalendarMonthRoundedIcon"><path d="M17 2c-.55 0-1 .45-1 1v1H8V3c0-.55-.45-1-1-1s-1 .45-1 1v1H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-1V3c0-.55-.45-1-1-1m2 18H5V10h14zm-8-7c0-.55.45-1 1-1s1 .45 1 1-.45 1-1 1-1-.45-1-1m-4 0c0-.55.45-1 1-1s1 .45 1 1-.45 1-1 1-1-.45-1-1m8 0c0-.55.45-1 1-1s1 .45 1 1-.45 1-1 1-1-.45-1-1m-4 4c0-.55.45-1 1-1s1 .45 1 1-.45 1-1 1-1-.45-1-1m-4 0c0-.55.45-1 1-1s1 .45 1 1-.45 1-1 1-1-.45-1-1m8 0c0-.55.45-1 1-1s1 .45 1 1-.45 1-1 1-1-.45-1-1"></path></svg> Get A Quote</Button>

        <Dropdown className="btn3">
            <Dropdown.Toggle variant="success" id="dropdown-basic">
            <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium button-svg" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="CalendarMonthRoundedIcon"><path d="M17 2c-.55 0-1 .45-1 1v1H8V3c0-.55-.45-1-1-1s-1 .45-1 1v1H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-1V3c0-.55-.45-1-1-1m2 18H5V10h14zm-8-7c0-.55.45-1 1-1s1 .45 1 1-.45 1-1 1-1-.45-1-1m-4 0c0-.55.45-1 1-1s1 .45 1 1-.45 1-1 1-1-.45-1-1m8 0c0-.55.45-1 1-1s1 .45 1 1-.45 1-1 1-1-.45-1-1m-4 4c0-.55.45-1 1-1s1 .45 1 1-.45 1-1 1-1-.45-1-1m-4 0c0-.55.45-1 1-1s1 .45 1 1-.45 1-1 1-1-.45-1-1m8 0c0-.55.45-1 1-1s1 .45 1 1-.45 1-1 1-1-.45-1-1"></path></svg> Get A Quote Online
            </Dropdown.Toggle>

            <Dropdown.Menu>
            <Dropdown.Item ><Link to="/lease_cleaning_quote">Lease Cleaning</Link></Dropdown.Item>
            <Dropdown.Item ><Link to="/carpet_cleaning_quote">Carpet Cleaning</Link></Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
        
        {/* <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.5 6C11.496 6 5 12.496 5 20.5C5 28.504 11.496 35 19.5 35C27.504 35 34 28.504 34 20.5C34 12.496 27.504 6 19.5 6ZM16.6 27.025V13.975L25.3 20.5L16.6 27.025Z" fill="#295000"></path><circle cx="20" cy="20" r="19.5" stroke="#295000"></circle></svg> */}
        </>
    )
}

export default BannerButtons;