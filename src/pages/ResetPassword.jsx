import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import api from "../api";

function ResetPassword() {
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");
  const [formData, setFormData] = useState({ email: "", password: "", password_confirmation: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post("/reset-password", { ...formData, token });
      alert("Password reset successfully! Login now.");
    } catch (error) {
      alert("Error resetting password");
    }
  };

  return (
    <div>
      <h2>Reset Password</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
        <input type="password" name="password" placeholder="New Password" onChange={handleChange} required />
        <input type="password" name="password_confirmation" placeholder="Confirm Password" onChange={handleChange} required />
        <button type="submit">Reset Password</button>
      </form>
    </div>
  );
}

export default ResetPassword;
