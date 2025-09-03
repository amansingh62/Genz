"use client";

import Button2 from "@/components/Button2";
import React, { useState } from "react";
import Link from "next/link";
import styled from "styled-components";
import { useRouter } from "next/navigation";

const SignIn: React.FC = () => {
  const router = useRouter(); // ✅ Hook to navigate after login

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState(""); // ✅ Handle errors
  const [loading, setLoading] = useState(false); // ✅ Handle loading state

  // ✅ Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ✅ Handle form submission for email/password login
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("http://localhost:5000/api/auth/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Login failed");
      }

      // ✅ Store JWT token in localStorage
      localStorage.setItem("token", data.token);

      alert("Login Successful! Redirecting...");
      router.push("/"); // ✅ Redirect to dashboard
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

  // ✅ Handle Google Login
  const handleGoogleLogin = () => {
    window.location.href = "http://localhost:5000/api/auth/google"; // Redirect to backend Google auth
  };

  return (
    <StyledWrapper>
      <div className="login-box">
        <span className="border-anim" /><span className="border-anim" /><span className="border-anim" /><span className="border-anim" />
        <p className="text-3xl mb-20">Sign In</p>

        {error && <p className="text-red-500 mb-4">{error}</p>} {/* ✅ Show errors if any */}

        <form onSubmit={handleSubmit}>
          <div className="user-box">
            <input required name="email" type="email" value={formData.email} onChange={handleChange} />
            <label>Email</label>
          </div>
          <div className="user-box">
            <input required name="password" type="password" value={formData.password} onChange={handleChange} />
            <label>Password</label>
          </div>
          <div className="mb-24">
            <Button2 text={loading ? "Signing In..." : "Sign In"} disabled={loading} />
          </div>

          {/* ✅ Google Login Button */}
          <div className="google-btn">
            <button type="button" className="google-login" onClick={handleGoogleLogin}>
              <img src="/google2.png" alt="Google" className="google-icon" />
              <p className="font-light">Continue with Google</p>
            </button>
          </div>
        </form>

        <p>
          Do not have an account? <Link href="/signup" className="a2">Sign up!</Link>
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
    margin-bottom: 40px;
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

  .google-btn {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
  }

  .google-login {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 320px;
    padding: 12px;
    background: linear-gradient(to right, #fafafa, #6b7280); /* Neutral-50 to Neutral-500 */
    color: #111;
    font-size: 16px;
    font-weight: bold;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: 0.3s ease-in-out;
  }

    .google-login:hover {
    background: linear-gradient(to right, #e5e7eb, #4b5563); /* Slightly darker on hover */
  }

    .google-icon {
    width: 30px;
    height: 25px;
    margin-right: 10px;
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

export default SignIn;