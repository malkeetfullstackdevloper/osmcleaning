import { useState } from "react";
import axios from "axios";
import { Col, Form } from "react-bootstrap";
import DatePicker from "react-datepicker";
import { format } from "date-fns";
import "react-datepicker/dist/react-datepicker.css";
import "./ContactForm.css";

import { useNavigate  } from "react-router-dom";

function CarpetCleaningContact() {
  const [formData, setFormData] = useState({
    premises_type: "",
    floors: "",
    stairs: "",
    landing: "",
    number_of_bedrooms: "",
    number_of_living: "",
    furnished: "",
    preferred_date: "",
    fullname: "",
    phone: "",
    email: "",
    suburb: "",
    service: "",
  });

  
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "premises_type") {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
        floors: value === "Apartment" ? prev.floors : "",
        stairs: value === "Townhouse" ? prev.stairs : "",
        landing: value === "Townhouse" ? prev.landing : "",
      }));
    } else {
      setFormData({ ...formData, [name]: value });
    }

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    let newErrors = {};
    
    const { premises_type } = formData;

    Object.keys(formData).forEach((key) => {
      const skipFields = [
        (premises_type !== "Apartment" && key === "floors"),
        (premises_type !== "Townhouse" && key === "stairs"),
        (premises_type !== "Townhouse" && key === "landing"),
      ];
      if (!formData[key] && !skipFields.includes(true)) {
        newErrors[key] = "This field is required";
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);

    try {
      await axios.post(
        "https://admin.osmcleaningservices.au/api/carpet_contact_form",
        formData
      );
      setSuccess(true);
      setFormData({
        premises_type: "",
        floors: "",
        stairs: "",
        landing: "",
        number_of_bedrooms: "",
        number_of_living: "",
        furnished: "",
        preferred_date: "",
        fullname: "",
        phone: "",
        email: "",
        suburb: "",
        service: "",
      });
      
      // setTimeout(() => setSuccess(false), 5000);

      setTimeout(() => {
        window.scrollTo(0, 0); // Scroll to top
        navigate("/thank-you");
      }, 500);
      

    } catch(error) {
      alert("Error submitting form. Please try again.");
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
        <h3>Get a Custom Carpet Cleaning Quote</h3>

        {/* Full Name */}
        <Col md={12}>
          <Form.Group className="mb-4">
            <label htmlFor="fullname">Full Name</label>
            <input
              type="text"
              id="fullname"
              name="fullname"
              className="form-control"
              value={formData.fullname}
              onChange={handleChange}
            />
            {errors.fullname && <small className="text-danger">{errors.fullname}</small>}
          </Form.Group>
        </Col>

        {/* Email */}
        <Col md={12}>
          <Form.Group className="mb-4">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-control"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <small className="text-danger">{errors.email}</small>}
          </Form.Group>
        </Col>

        {/* Phone */}
        <Col md={12}>
          <Form.Group className="mb-4">
            <label htmlFor="phone">Mobile Number</label>
            <input
              type="text"
              id="phone"
              name="phone"
              className="form-control"
              value={formData.phone}
              onChange={handleChange}
            />
            {errors.phone && <small className="text-danger">{errors.phone}</small>}
          </Form.Group>
        </Col>

        {/* Suburb */}
        <Col md={12}>
          <Form.Group className="mb-4">
            <label htmlFor="suburb">Suburb</label>
            <input
              type="text"
              id="suburb"
              name="suburb"
              className="form-control"
              value={formData.suburb}
              onChange={handleChange}
            />
            {errors.suburb && <small className="text-danger">{errors.suburb}</small>}
          </Form.Group>
        </Col>

        {/* Preferred Date with Calendar Below */}
        <Col md={12}>
          {/* Preferred Date */}
        <Form.Group className="mb-3 position-relative">
          <label htmlFor="preferred_date">Preferred Cleaning Date</label>
          <div className="position-relative">
            <DatePicker
              selected={
                formData.preferred_date
                  ? new Date(formData.preferred_date.split("-").reverse().join("-"))
                  : null
              }
              onChange={(date) =>
                handleChange({
                  target: {
                    name: "preferred_date",
                    value: format(date, "dd-MM-yyyy"),
                  },
                })
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
        </Col>
        
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
              <option value="Carpet Cleaning">Carpet Steam Cleaning</option>
              <option value="Upholstery Cleaning">Upholstery Cleaning</option>
              <option value="Mattress Cleaning">Mattress Cleaning </option>
              <option value="Rug Cleaning">Rug Cleaning</option>
              <option value="Couch Cleaning">Couch Cleaning</option>
              <option value="Tile and Grout Cleaning">Tile and Grout Cleaning</option>
              <option value="Window Cleaning">Window Cleaning</option>
            </select>
            {errors.service && (
              <small className="text-danger">{errors.service}</small>
            )}
          </Form.Group>
        </Col>

        {/* Premises Type */}
        <Col md={12}>
          <Form.Group className="mb-4">
            <label htmlFor="premises_type">Premises Type</label>
            <select
              id="premises_type"
              name="premises_type"
              className="form-select"
              value={formData.premises_type}
              onChange={handleChange}
            >
              <option value="">Select Premises Type</option>
              <option value="House">House</option>
              <option value="Townhouse">Townhouse</option>
              <option value="Unit">Unit</option>
              <option value="Apartment">Apartment</option>
            </select>
            {errors.premises_type && (
              <small className="text-danger">{errors.premises_type}</small>
            )}
          </Form.Group>
        </Col>

        {/* Apartment Floor */}
        {formData.premises_type === "Apartment" && (
          <Col md={12}>
            <Form.Group className="mb-4">
              <label htmlFor="floors">Which Floor?</label>
              <select
                id="floors"
                name="floors"
                className="form-select"
                value={formData.floors}
                onChange={handleChange}
              >
                <option value="">Select Floor (1–10)</option>
                {[...Array(10)].map((_, i) => (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                ))}
              </select>
              {errors.floors && <small className="text-danger">{errors.floors}</small>}
            </Form.Group>
          </Col>
        )}

        {/* Townhouse Questions */}
        {formData.premises_type === "Townhouse" && (
          <>
            <Col md={12}>
              <Form.Group className="mb-4">
                <label>Are stairs carpeted?</label>
                <div className="form-control d-grid">
                  <label>
                    <input
                      type="radio"
                      name="stairs"
                      value="yes"
                      onChange={handleChange}
                      checked={formData.stairs === "yes"}
                    />{" "}
                    Yes
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="stairs"
                      value="no"
                      onChange={handleChange}
                      checked={formData.stairs === "no"}
                    />{" "}
                    No
                  </label>
                </div>
                {errors.stairs && <small className="text-danger">{errors.stairs}</small>}
              </Form.Group>
            </Col>

            <Col md={12}>
              <Form.Group className="mb-4">
                <label>Is the landing area carpeted?</label>
                <div className="form-control d-grid">
                  <label>
                    <input
                      type="radio"
                      name="landing"
                      value="yes"
                      onChange={handleChange}
                      checked={formData.landing === "yes"}
                    />{" "}
                    Yes
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="landing"
                      value="no"
                      onChange={handleChange}
                      checked={formData.landing === "no"}
                    />{" "}
                    No
                  </label>
                </div>
                {errors.landing && (
                  <small className="text-danger">{errors.landing}</small>
                )}
              </Form.Group>
            </Col>
          </>
        )}

        {/* Number of Bedrooms */}
        <Col md={12}>
          <Form.Group className="mb-4">
            <label htmlFor="number_of_bedrooms">Number of Bedrooms (with carpet)</label>
            <select
              id="number_of_bedrooms"
              name="number_of_bedrooms"
              className="form-select"
              value={formData.number_of_bedrooms}
              onChange={handleChange}
            >
              <option value="">Select</option>
              {[0, 1, 2, 3, 4, 5].map((num) => (
                <option key={num} value={num}>
                  {num}
                </option>
              ))}
            </select>
            {errors.number_of_bedrooms && (
              <small className="text-danger">{errors.number_of_bedrooms}</small>
            )}
          </Form.Group>
        </Col>

        {/* Number of Living Areas */}
        <Col md={12}>
          <Form.Group className="mb-4">
            <label htmlFor="number_of_living">Number of Living Areas (with carpet)</label>
            <select
              id="number_of_living"
              name="number_of_living"
              className="form-select"
              value={formData.number_of_living}
              onChange={handleChange}
            >
              <option value="">Select</option>
              {[0, 1, 2, 3].map((num) => (
                <option key={num} value={num}>
                  {num}
                </option>
              ))}
            </select>
            {errors.number_of_living && (
              <small className="text-danger">{errors.number_of_living}</small>
            )}
          </Form.Group>
        </Col>

        {/* Furnished */}
        <Col md={12}>
          <Form.Group className="mb-4">
            <label>Is the property furnished?</label>
            <div className="form-control d-grid">
              <label>
                <input
                  type="radio"
                  name="furnished"
                  value="yes"
                  onChange={handleChange}
                  checked={formData.furnished === "yes"}
                />{" "}
                Yes
              </label>
              <label>
                <input
                  type="radio"
                  name="furnished"
                  value="no"
                  onChange={handleChange}
                  checked={formData.furnished === "no"}
                />{" "}
                No
              </label>
            </div>
            {errors.furnished && <small className="text-danger">{errors.furnished}</small>}
          </Form.Group>

          
          <Form.Group className="mb-3">
            <Form.Control as="textarea" rows={3} placeholder="Message" />
          </Form.Group>

        </Col>

        {/* Submit */}
        
        <button type="submit" className="btn btn-success" disabled={loading}>
          {loading ? "Submitting..." : "Submit"}
        </button>

      </form>
    </>
  );
}

export default CarpetCleaningContact;
