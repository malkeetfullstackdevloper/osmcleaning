import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post("/register", formData);
      alert("Registration successful! Please login.");
      navigate("/");
    } catch (error) {
      alert(error.response?.data?.message || "Error registering user");
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
        <input type="password" name="password_confirmation" placeholder="Confirm Password" onChange={handleChange} required />
        <button type="submit">Register</button>
      </form>
      <p>Already have an account? <a href="/">Login</a></p>
    </div>
  );
}

export default Register;
