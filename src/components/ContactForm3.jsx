import { useState } from "react";
import axios from "axios";
import { Col, Form } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";
import "./ContactForm.css";
import { useNavigate  } from "react-router-dom";

function ContactForm3() {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    phone: "",
    service: "",
    property_type: "",
    preferred_date: null,
    suburb: "",
    notes: "",
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    const requiredFields = [
      "fullname",
      "email",
      "phone",
      "preferred_date",
      "service",
      "property_type",
    ];

    requiredFields.forEach((field) => {
      if (!formData[field]) {
        newErrors[field] = "This field is required";
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    console.log(errors);
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
        "https://admin.osmcleaningservices.au/api/landing_form",
        submissionData
      );
      console.log("Success:", response.data);
      setSuccess(true);
      setFormData({
        fullname: "",
        email: "",
        phone: "",
        preferred_date: null,
        service: "",
        property_type: "",
        notes: "",
      });

      setTimeout(() => {
        window.scrollTo(0, 0); // Scroll to top
        navigate("/thanks-you");
      }, 500);
      
      //setTimeout(() => setSuccess(false), 5000);
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Submission failed");
      setLoading(false);
    }
  };

  return (
    <>
      {success && <div className="success-message">Form submitted successfully.</div>}

      <form onSubmit={handleSubmit} className="quote-form p-4 shadow">
        <h3>Get Free Quote</h3>

        <Form.Group className="mb-3">
          <label htmlFor="fullname">Full Name *</label>
          <input
            id="fullname"
            name="fullname"
            className="form-control"
            value={formData.fullname}
            onChange={handleChange}
          />
          {errors.fullname && <small className="text-danger">{errors.fullname}</small>}
        </Form.Group>

        <Form.Group className="mb-3">
          <label htmlFor="email">Email Address *</label>
          <input
            id="email"
            type="email"
            name="email"
            className="form-control"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <small className="text-danger">{errors.email}</small>}
        </Form.Group>

        <Form.Group className="mb-3">
          <label htmlFor="phone">Mobile Number *</label>
          <input
            id="phone"
            name="phone"
            className="form-control"
            value={formData.phone}
            onChange={handleChange}
          />
          {errors.phone && <small className="text-danger">{errors.phone}</small>}
        </Form.Group>

        {/* Preferred Date with Calendar Below */}
        <Form.Group className="mb-3 position-relative">
          <label htmlFor="preferred_date">Preferred Date</label>
          <div className="position-relative">
            <DatePicker
              selected={formData.preferred_date}
              onChange={(date) =>
                setFormData((prev) => ({
                  ...prev,
                  preferred_date: date,
                }))
              }
              minDate={new Date()}
              dateFormat="dd-MM-yyyy"
              placeholderText="Select preferred date"
              className="form-control pe-5"
              wrapperClassName="w-100"
            />
            <span className="calendar-icon position-absolute top-50 end-0 translate-middle-y me-3">
              📅
            </span>
          </div>
          {errors.preferred_date && (
            <small className="text-danger">{errors.preferred_date}</small>
          )}
        </Form.Group>

        {/* Service Dropdown */}
        <Col md={12}>
          <Form.Group className="mb-4">
            <select
              name="service"
              className="form-control"
              value={formData.service}
              onChange={handleChange}
            >
              <option value="">Select Service</option>
              <option value="Carpet — 1 room $99">Carpet — 1 room $99</option>
              <option value="Carpet — 3 rooms $120"> Carpet — 3 rooms $120</option>
              <option value="End of lease cleaning"> End of lease cleaning</option>
              <option value="Combo/Other"> Combo/Other</option>
            </select>
            {errors.service && (
              <small className="text-danger">{errors.service}</small>
            )}
          </Form.Group>
        </Col>

        <Form.Group className="mb-3">
          <label htmlFor="suburb">Suburb *</label>
          <input
            id="suburb"
            name="suburb"
            className="form-control"
            value={formData.suburb}
            onChange={handleChange}
          />
          {errors.suburb && <small className="text-danger">{errors.suburb}</small>}
        </Form.Group>

        <Form.Group className="mb-3">
          <label htmlFor="property_type">Property Type *</label>
          <select
            id="property_type"
            name="property_type"
            className="form-select"
            value={formData.property_type}
            onChange={handleChange}
          >
            <option value="">Select Type</option>
            <option value="House">House</option>
            <option value="Studio">Studio</option>
            <option value="Unit">Unit</option>
            <option value="Apartment">Apartment</option>
          </select>
          {errors.property_type && <small className="text-danger">{errors.property_type}</small>}
        </Form.Group>

        

        {/* Conditional: House / Townhouse */}
        {["House", "Townhouse"].includes(formData.premises_type) && (
          <>
            <Form.Group className="mb-3">
              <label htmlFor="number_of_living">Number of Living Areas *</label>
              <select
                id="number_of_living"
                name="number_of_living"
                className="form-select"
                value={formData.number_of_living}
                onChange={handleChange}
              >
                <option value="">Select</option>
                {[0, 1, 2, 3].map((num) => (
                  <option key={num} value={num}>{num}</option>
                ))}
              </select>
              {errors.number_of_living && <small className="text-danger">{errors.number_of_living}</small>}
            </Form.Group>

            <Form.Group className="mb-3">
              <label>Window Cleaning *</label>
              <div className="form-control d-grid">
                <label>
                  <input type="radio" name="windows" value="Inside only" onChange={handleChange} /> Inside only
                </label>
                <label>
                  <input type="radio" name="windows" value="Inside and outside" onChange={handleChange} /> Inside and outside
                </label>
              </div>
              {errors.windows && <small className="text-danger">{errors.windows}</small>}
            </Form.Group>
          </>
        )}
        
        <Form.Group className="mb-3">
          <Form.Control as="textarea" rows={3} placeholder="Notes" name="notes" value={formData.notes}
            onChange={handleChange} / >
        </Form.Group>

        <button type="submit" className="btn btn-success" disabled={loading}>
          {loading ? "Submitting..." : "Send Inquiry"}
        </button>
        
      </form>
    </>
  );
}

export default ContactForm3;
