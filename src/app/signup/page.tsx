"use client";

import Button2 from "@/components/Button2";
import React, { useState } from "react";
import Link from "next/link";
import styled from "styled-components";
import { useRouter } from "next/navigation";

const SignUp: React.FC = () => {
  const router = useRouter(); // ✅ Hook to redirect users
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState(""); // ✅ Handle errors
  const [loading, setLoading] = useState(false); // ✅ Handle loading state

  // ✅ Handle form input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ✅ Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("http://localhost:5000/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Signup failed");
      }

      alert("Signup Successful! Redirecting to login...");
      router.push("/signin"); // ✅ Redirect to login page after signup
    } catch (error) {
      // Properly handle unknown error type
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("An unexpected error occurred");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <StyledWrapper>
      <div className="login-box">
        <span className="border-anim" /><span className="border-anim" /><span className="border-anim" /><span className="border-anim" />
        <p className="text-3xl mb-8">Sign Up</p>

        {error && <p className="text-red-500 mb-4">{error}</p>} {/* ✅ Show error if exists */}

        <form onSubmit={handleSubmit}>
          <div className="user-box">
            <input required name="firstName" type="text" value={formData.firstName} onChange={handleChange} />
            <label>First Name</label>
          </div>
          <div className="user-box">
            <input required name="lastName" type="text" value={formData.lastName} onChange={handleChange} />
            <label>Last Name</label>
          </div>
          <div className="user-box">
            <input required name="email" type="email" value={formData.email} onChange={handleChange} />
            <label>Email</label>
          </div>
          <div className="user-box">
            <input required name="password" type="password" value={formData.password} onChange={handleChange} />
            <label>Password</label>
          </div>
          <div className="user-box">
            <input required name="confirmPassword" type="password" value={formData.confirmPassword} onChange={handleChange} />
            <label>Confirm Password</label>
          </div>
          <div className="mb-16">
            <Button2 text={loading ? "Signing Up..." : "Sign Up"} disabled={loading} />
          </div>
        </form>

        <p>
          Already have an account? <Link href="/signin" className="a2">Sign In!</Link>
        </p>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #111;

  .login-box {
    position: relative;
    width: 430px;
    padding: 40px;
    background: rgba(0, 0, 0, 0.9);
    box-shadow: 0 15px 25px rgba(0, 0, 0, 0.6);
    border-radius: 10px;
    overflow: hidden;
    text-align: center;
  }

  .user-box {
    position: relative;
    margin-bottom: 30px;
  }

  .user-box input {
    width: 100%;
    padding: 10px 0;
    font-size: 16px;
    color: #fff;
    background: transparent;
    border: none;
    border-bottom: 1px solid #fff;
    outline: none;
  }

  .user-box label {
    position: absolute;
    top: 10px;
    left: 0;
    font-size: 16px;
    color: #fff;
    pointer-events: none;
    transition: 0.5s;
  }

  .user-box input:focus ~ label,
  .user-box input:valid ~ label {
    top: -20px;
    left: 0;
    font-size: 12px;
    color: #fff;
  }

  .border-anim {
    position: absolute;
    display: block;
  }

  .border-anim:nth-child(1) {
    top: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(270deg, rgba(2, 29, 78, 0.681) 0%, rgba(31, 215, 232, 0.873) 60%);
    animation: box-anim1 1.5s linear infinite;
  }

  @keyframes box-anim1 {
    0% { left: -100%; }
    50%, 100% { left: 100%; }
  }

  .border-anim:nth-child(2) {
    top: 0;
    right: 0;
    width: 2px;
    height: 100%;
    background: linear-gradient(270deg, rgba(2, 29, 78, 0.681) 0%, rgba(31, 215, 232, 0.873) 60%);
    animation: box-anim2 1.5s linear infinite;
    animation-delay: 0.375s;
  }

  @keyframes box-anim2 {
    0% { top: -100%; }
    50%, 100% { top: 100%; }
  }

  .border-anim:nth-child(3) {
    bottom: 0;
    right: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(270deg, rgba(2, 29, 78, 0.681) 0%, rgba(31, 215, 232, 0.873) 60%);
    animation: box-anim3 1.5s linear infinite;
    animation-delay: 0.75s;
  }

  @keyframes box-anim3 {
    0% { right: -100%; }
    50%, 100% { right: 100%; }
  }

  .border-anim:nth-child(4) {
    bottom: 0;
    left: 0;
    width: 2px;
    height: 100%;
    background: linear-gradient(270deg, rgba(2, 29, 78, 0.681) 0%, rgba(31, 215, 232, 0.873) 60%);
    animation: box-anim4 1.5s linear infinite;
    animation-delay: 1.125s;
  }

  @keyframes box-anim4 {
    0% { bottom: -100%; }
    50%, 100% { bottom: 100%; }
  }

  .a2 {
    position: relative;
    color: #fff;
    text-decoration: none;
  }

  .a2::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -4px;
    width: 0;
    height: 2px;
    background: #fff;
    transition: width 0.3s ease-in-out;
  }

  .a2:hover::after {
    width: 100%;
  }
`;

export default SignUp;