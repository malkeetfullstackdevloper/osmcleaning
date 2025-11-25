import { useState } from "react";
import axios from "axios";
import { Col, Form } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";
import "./ContactForm.css";
import { useNavigate  } from "react-router-dom";

function ContactForm2() {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    phone: "",
    preferred_date: null,
    suburb: "",
    premises_type: "",
    number_of_bedrooms: "",
    number_of_bathroom: "",
    number_of_living: "",
    windows: "",
    stairs: "",
    landing: "",
    balcony: "",
    professional_carpet_cleaning: "",
    bedroom_carpeted: "",
    living_carpeted: "",
    furnished: "",
    msg: "",
    service: "",
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
      "suburb",
      "premises_type",
      "number_of_bedrooms",
      "number_of_bathroom",
      "furnished",
      "service",
    ];

    requiredFields.forEach((field) => {
      if (!formData[field]) {
        newErrors[field] = "This field is required";
      }
    });

    if (["House", "Townhouse"].includes(formData.premises_type)) {
      if (!formData.number_of_living) newErrors.number_of_living = "This field is required";
      if (!formData.windows) newErrors.windows = "This field is required";
    }

    if (formData.premises_type === "Townhouse") {
      if (!formData.stairs) newErrors.stairs = "This field is required";
      if (!formData.landing) newErrors.landing = "This field is required";
    }

    if (formData.premises_type === "Apartment") {
      if (!formData.balcony) newErrors.balcony = "This field is required";
      if (!formData.windows) newErrors.windows = "This field is required";
    }

    if (formData.professional_carpet_cleaning === "yes") {
      if (!formData.bedroom_carpeted) newErrors.bedroom_carpeted = "Required";
      if (!formData.living_carpeted) newErrors.living_carpeted = "Required";
    }

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
        "https://admin.osmcleaningservices.au/api/contact_form2",
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
        premises_type: "",
        number_of_bedrooms: "",
        number_of_bathroom: "",
        number_of_living: "",
        windows: "",
        stairs: "",
        landing: "",
        balcony: "",
        professional_carpet_cleaning: "",
        bedroom_carpeted: "",
        living_carpeted: "",
        furnished: "",
        msg: "",
        service: "",
      });

      setTimeout(() => {
        window.scrollTo(0, 0); // Scroll to top
        navigate("/thank-you");
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
        <h3>Get a Custom Cleaning Quote</h3>

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
  <label htmlFor="preferred_date">Preferred Cleaning Date</label>
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
              <option value="End of lease cleaning">End of lease cleaning</option>
              <option value="Bond cleaning">Bond cleaning</option>
              <option value="Builder Cleaning">Builder Cleaning</option>
              <option value="Office Cleaning">Office Cleaning</option>
              <option value="Carpet Cleaning">Carpet Steam Cleaning</option>
              <option value="Upholstery Cleaning">Upholstery Cleaning</option>
              <option value="Mattress Cleaning">Mattress Cleaning </option>
              <option value="Tile and Grout Cleaning">Tile and Grout Cleaning</option>
              <option value="Window Cleaning">Window Cleaning</option>
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
          <label htmlFor="premises_type">Premises Type *</label>
          <select
            id="premises_type"
            name="premises_type"
            className="form-select"
            value={formData.premises_type}
            onChange={handleChange}
          >
            <option value="">Select Type</option>
            <option value="House">House</option>
            <option value="Townhouse">Townhouse</option>
            <option value="Unit">Unit</option>
            <option value="Apartment">Apartment</option>
          </select>
          {errors.premises_type && <small className="text-danger">{errors.premises_type}</small>}
        </Form.Group>

        <Form.Group className="mb-3">
              <label htmlFor="number_of_bedrooms">Number of Bedroom</label>
              <select
                id="number_of_bedrooms"
                name="number_of_bedrooms"
                className="form-select"
                value={formData.number_of_bedrooms}
                onChange={handleChange}
              >
                <option value="">Select</option>
                {[0, 1, 2, 3,4,5,6].map((num) => (
                  <option key={num} value={num}>{num}</option>
                ))}
              </select>
              {errors.number_of_bedrooms && <small className="text-danger">{errors.number_of_bedrooms}</small>}
            </Form.Group>

            <Form.Group className="mb-3">
              <label htmlFor="number_of_bathroom">Number of Bathroom *</label>
              <select
                id="number_of_bathroom"
                name="number_of_bathroom"
                className="form-select"
                value={formData.number_of_bathroom}
                onChange={handleChange}
              >
                <option value="">Select</option>
                {[0, 1, 2, 3,4,5,6].map((num) => (
                  <option key={num} value={num}>{num}</option>
                ))}
              </select>
              {errors.number_of_bathroom && <small className="text-danger">{errors.number_of_bathroom}</small>}
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

        {/* Townhouse Only */}
        {formData.premises_type === "Townhouse" && (
          <>
            <Form.Group className="mb-3">
              <label>Are stairs carpeted? *</label>
              <div className="form-control d-grid">
                <label><input type="radio" name="stairs" value="yes" onChange={handleChange} /> Yes</label>
                <label><input type="radio" name="stairs" value="no" onChange={handleChange} /> No</label>
              </div>
              {errors.stairs && <small className="text-danger">{errors.stairs}</small>}
            </Form.Group>

            <Form.Group className="mb-3">
              <label>Is landing carpeted? *</label>
              <div className="form-control d-grid">
                <label><input type="radio" name="landing" value="yes" onChange={handleChange} /> Yes</label>
                <label><input type="radio" name="landing" value="no" onChange={handleChange} /> No</label>
              </div>
              {errors.landing && <small className="text-danger">{errors.landing}</small>}
            </Form.Group>
          </>
        )}

        {/* Apartment */}
        {formData.premises_type === "Apartment" && (
          <>
            <Form.Group className="mb-3">
              <label>Does the apartment have a balcony? *</label>
              <div className="form-control d-grid">
                <label><input type="radio" name="balcony" value="yes" onChange={handleChange} /> Yes</label>
                <label><input type="radio" name="balcony" value="no" onChange={handleChange} /> No</label>
              </div>
              {errors.balcony && <small className="text-danger">{errors.balcony}</small>}
            </Form.Group>
          </>
        )}

        {/* Carpet Cleaning */}
        <Form.Group className="mb-3">
          <label>Do you need professional carpet cleaning? *</label>
          <div className="form-control d-grid">
            <label><input type="radio" name="professional_carpet_cleaning" value="yes" onChange={handleChange} /> Yes</label>
            <label><input type="radio" name="professional_carpet_cleaning" value="no" onChange={handleChange} /> No</label>
          </div>
          {errors.professional_carpet_cleaning && <small className="text-danger">{errors.professional_carpet_cleaning}</small>}
        </Form.Group>

        {formData.professional_carpet_cleaning === "yes" && (
          <>
            <Form.Group className="mb-3">
              <label htmlFor="bedroom_carpeted">How many carpeted bedrooms?</label>
              <select
                id="bedroom_carpeted"
                name="bedroom_carpeted"
                className="form-select"
                value={formData.bedroom_carpeted}
                onChange={handleChange}
              >
                <option value="">Select</option>
                {[0, 1, 2, 3, 4, 5, 6].map((n) => (
                  <option key={n} value={n}>{n}</option>
                ))}
              </select>
              {errors.bedroom_carpeted && <small className="text-danger">{errors.bedroom_carpeted}</small>}
            </Form.Group>

            <Form.Group className="mb-3">
              <label htmlFor="living_carpeted">How many carpeted living areas?</label>
              <select
                id="living_carpeted"
                name="living_carpeted"
                className="form-select"
                value={formData.living_carpeted}
                onChange={handleChange}
              >
                <option value="">Select</option>
                {[0, 1, 2, 3].map((n) => (
                  <option key={n} value={n}>{n}</option>
                ))}
              </select>
              {errors.living_carpeted && <small className="text-danger">{errors.living_carpeted}</small>}
            </Form.Group>
          </>
        )}

        <Form.Group className="mb-3">
          <label>Furnished *</label>
          <div className="form-control d-grid">
            <label><input type="radio" name="furnished" value="yes" onChange={handleChange} /> Yes</label>
            <label><input type="radio" name="furnished" value="no" onChange={handleChange} /> No</label>
          </div>
          {errors.furnished && <small className="text-danger">{errors.furnished}</small>}
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control as="textarea" rows={3} placeholder="Message" name="msg" value={formData.msg}
            onChange={handleChange} / >
        </Form.Group>

        <button type="submit" className="btn btn-success" disabled={loading}>
          {loading ? "Submitting..." : "Submit"}
        </button>
        
      </form>
    </>
  );
}

export default ContactForm2;
