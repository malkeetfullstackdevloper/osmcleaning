import { useState } from "react";
import axios from "axios";
import { Col, Form } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";
import "./ContactForm.css"; // Optional: for styling success message

import { useNavigate  } from "react-router-dom";

function ContactForm() {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    phone: "",
    preferred_date: null,
    suburb: "",
    text: "",
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });

    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: "" });
    }
  };

  const validateForm = () => {
    let newErrors = {};
    Object.keys(formData).forEach((key) => {
      if (!formData[key]) {
        newErrors[key] = "This field is required";
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setLoading(true);

    const submissionData = {
      ...formData,
      preferred_date: formData.preferred_date
        ? format(formData.preferred_date, "dd-MM-yyyy")
        : "",
    };

    try {
      const response = await axios.post(
        "https://admin.osmcleaningservices.au/api/contact_form",
        submissionData
      );
      console.log("Success:", response.data);
      setSuccess(true);
      setFormData({
        fullname: "",
        email: "",
        phone: "",
        preferred_date: null,
        suburb: "",
        text: "",
      });

      setTimeout(() => {
        window.scrollTo(0, 0); // Scroll to top
        navigate("/thank-you");
      }, 500);
      

      //setTimeout(() => setSuccess(false), 5000);
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Error submitting form, please try again");
      setLoading(false);
    }
  };

  return (
    <>
      {success && (
        <div className="success-message">
          Thank you! Your form has been submitted successfully.
        </div>
      )}

      <form onSubmit={handleSubmit} className="quote-form p-4 shadow">
        <h3>Get a Custom Cleaning Quote</h3>

        {/* Fullname */}
        <Col md={12}>
          <Form.Group className="mb-4">
            <input
              type="text"
              name="fullname"
              placeholder="Full name *"
              className="form-control"
              value={formData.fullname}
              onChange={handleChange}
            />
            {errors.fullname && (
              <small className="text-danger">{errors.fullname}</small>
            )}
          </Form.Group>
        </Col>

        {/* Email */}
        <Col md={12}>
          <Form.Group className="mb-4">
            <input
              type="email"
              name="email"
              placeholder="Email address *"
              className="form-control"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && (
              <small className="text-danger">{errors.email}</small>
            )}
          </Form.Group>
        </Col>

        {/* Phone */}
        <Col md={12}>
          <Form.Group className="mb-4">
            <input
              type="text"
              name="phone"
              placeholder="Phone number *"
              className="form-control"
              value={formData.phone}
              onChange={handleChange}
            />
            {errors.phone && (
              <small className="text-danger">{errors.phone}</small>
            )}
          </Form.Group>
        </Col>

        {/* Preferred Date */}
        <Col md={12}>
          <Form.Group className="mb-4">
            <label>Preferred Date</label>
            <DatePicker
              selected={formData.preferred_date}
              onChange={(date) =>
                setFormData({ ...formData, preferred_date: date })
              }
              minDate={new Date()}
              dateFormat="dd-MM-yyyy"
              placeholderText="Select preferred date"
              className="form-control"
              wrapperClassName="w-100"
            />
            {errors.preferred_date && (
              <small className="text-danger">{errors.preferred_date}</small>
            )}
          </Form.Group>
        </Col>

        {/* Suburb */}
        <Col md={12}>
          <Form.Group className="mb-4">
            <input
              type="text"
              name="suburb"
              placeholder="Suburb"
              className="form-control"
              value={formData.suburb}
              onChange={handleChange}
            />
            {errors.suburb && (
              <small className="text-danger">{errors.suburb}</small>
            )}
          </Form.Group>
        </Col>

        {/* Text */}
        <Col md={12}>
          <Form.Group className="mb-4">
            <input
              type="text"
              name="text"
              placeholder="Message"
              className="form-control"
              value={formData.text}
              onChange={handleChange}
            />
            {errors.text && (
              <small className="text-danger">{errors.text}</small>
            )}
          </Form.Group>
            
        </Col>

        <button type="submit" className="btn btn-success" disabled={loading}>
          {loading ? "Submitting..." : "Submit"}
        </button>

      </form>
    </>
  );
}

export default ContactForm;
