import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api";

function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post("/login", formData);
      localStorage.setItem("token", response.data.token);
      navigate("/dashboard");
    } catch (error) {
      alert("Invalid login credentials");
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
        <button type="submit">Login</button>
      </form>
      <p><a href="/forgot-password">Forgot Password?</a></p>
      <p>Don't have an account? <a href="/register">Register</a></p>
    </div>
  );
}

export default Login;
