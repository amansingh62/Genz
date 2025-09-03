"use client";

import { useEffect, useState } from "react";
import React from "react";
import Link from "next/link";
import styled from "styled-components";
import axios from "axios";

const Button = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Function to check authentication status
  const checkAuth = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/auth/check-auth", {
        withCredentials: true, // Ensure cookies are sent
      });
  
      if (response.data.isAuthenticated) {
        setIsAuthenticated(true);
        localStorage.setItem("auth", "true");
      } else {
        setIsAuthenticated(false);
        localStorage.removeItem("auth");
      }
    } catch (error) {
      console.error("Error checking auth:", error);
      setIsAuthenticated(false);
      localStorage.removeItem("auth");
    }
  };
  

  // Check for token in URL (for OAuth redirects)
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get('token');
    
    if (token) {
      // If token exists in URL, set as authenticated
      setIsAuthenticated(true);
      localStorage.setItem("auth", "true");
      
      // Optionally remove token from URL
      window.history.replaceState({}, document.title, window.location.pathname);
    }
  }, []);

  // Run authentication check on page load
  useEffect(() => {
    // First check local storage for faster initial render
    const authFromStorage = localStorage.getItem("auth") === "true";
    setIsAuthenticated(authFromStorage);
    
    // Then verify with server
    checkAuth();
    
    // Set up interval to periodically check auth status
    const intervalId = setInterval(checkAuth, 60000); // Check every minute
    
    return () => clearInterval(intervalId);
  }, []);

  // Listen for storage events from other tabs
  useEffect(() => {
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === "auth") {
        setIsAuthenticated(e.newValue === "true");
      }
    };
    
    window.addEventListener("storage", handleStorageChange);
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  // Handle user logout
  const handleLogout = async () => {
    try {
      await axios.get("http://localhost:5000/api/auth/logout", { withCredentials: true });
      setIsAuthenticated(false);
      localStorage.removeItem("auth"); // Remove auth status
    } catch (error) {
      console.error("Logout failed", error);
    }
  };

  console.log("Current auth state:", isAuthenticated); // Debugging

  return (
    <StyledWrapper>
      {isAuthenticated ? (
        <button className="mt-12" onClick={handleLogout}>
          <span>SIGN OUT</span>
        </button>
      ) : (
        <Link href="/signin">
          <button className="mt-12">
            <span>SIGN IN</span>
          </button>
        </Link>
      )}
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  button {
   border: 1px solid #dcdcdc;
   position: relative;
   width: 200px;
   height: 73px;
   padding: 0;
   z-index: 2;
   -webkit-mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='868' width='2500' viewBox='0 0 726 252.17'%3E%3Cpath d='M483.92 0S481.38 24.71 466 40.11c-11.74 11.74-24.09 12.66-40.26 15.07-9.42 1.41-29.7 3.77-34.81-.79-2.37-2.11-3-21-3.22-27.62-.21-6.92-1.36-16.52-2.82-18-.75 3.06-2.49 11.53-3.09 13.61S378.49 34.3 378 36a85.13 85.13 0 0 0-30.09 0c-.46-1.67-3.17-11.48-3.77-13.56s-2.34-10.55-3.09-13.61c-1.45 1.45-2.61 11.05-2.82 18-.21 6.67-.84 25.51-3.22 27.62-5.11 4.56-25.38 2.2-34.8.79-16.16-2.47-28.51-3.39-40.21-15.13C244.57 24.71 242 0 242 0H0s69.52 22.74 97.52 68.59c16.56 27.11 14.14 58.49 9.92 74.73C170 140 221.46 140 273 158.57c69.23 24.93 83.2 76.19 90 93.6 6.77-17.41 20.75-68.67 90-93.6 51.54-18.56 103-18.59 165.56-15.25-4.21-16.24-6.63-47.62 9.93-74.73C656.43 22.74 726 0 726 0z'/%3E%3C/svg%3E") no-repeat 50% 50%;
   mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='868' width='2500' viewBox='0 0 726 252.17'%3E%3Cpath d='M483.92 0S481.38 24.71 466 40.11c-11.74 11.74-24.09 12.66-40.26 15.07-9.42 1.41-29.7 3.77-34.81-.79-2.37-2.11-3-21-3.22-27.62-.21-6.92-1.36-16.52-2.82-18-.75 3.06-2.49 11.53-3.09 13.61S378.49 34.3 378 36a85.13 85.13 0 0 0-30.09 0c-.46-1.67-3.17-11.48-3.77-13.56s-2.34-10.55-3.09-13.61c-1.45 1.45-2.61 11.05-2.82 18-.21 6.67-.84 25.51-3.22 27.62-5.11 4.56-25.38 2.2-34.8.79-16.16-2.47-28.51-3.39-40.21-15.13C244.57 24.71 242 0 242 0H0s69.52 22.74 97.52 68.59c16.56 27.11 14.14 58.49 9.92 74.73C170 140 221.46 140 273 158.57c69.23 24.93 83.2 76.19 90 93.6 6.77-17.41 20.75-68.67 90-93.6 51.54-18.56 103-18.59 165.56-15.25-4.21-16.24-6.63-47.62 9.93-74.73C656.43 22.74 726 0 726 0z'/%3E%3C/svg%3E") no-repeat 50% 50%;
   -webkit-mask-size: 100%;
   cursor: pointer;
   background-color: [#fafafa];
   transform: translateY(8px)
  }

  button:after {
   content: '';
   position: absolute;
   left: 0;
   right: 0;
   bottom: 0;
   box-shadow: 0px 0 0 0 white;
   transition: all 2s ease;
  }

  button:hover:after {
   box-shadow: 0px -13px 56px 12px #ffffff;
   border-solid: 1px solid #fafafa;
  }

  button span {
   position: absolute;
   width: 100%;
   font-size: 15px;
   font-weight: 500;
   left: 50%;
   top: 40%;
   letter-spacing: 3px;
   text-align: center;
   transform: translate(-50%,-50%);
   color: [#fafafa];
   transition: all 2s ease;
  }

  button:hover span {
   color: white;
  }

  button:before {
   content: '';
   position: absolute;
   width: 0;
   height: 100%;
   background-color: black;
   left: 50%;
   top: 50%;
   transform: translate(-50%, -50%);
   transition: all 1s ease;
  }

  button:hover:before {
   width: 100%;
  }`;

export default Button;
