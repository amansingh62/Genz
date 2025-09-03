'use client';

import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-b from-black text-white mt-32 py-16 px-8">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        
        {/* Logo & Description */}
        <aside className="flex flex-col items-start space-y-4">
          <img src="G (2).png" alt="Logo" width="200" className="-mt-6" />
          <p className="text-gray-400 text-sm">
            GENZ FITNESS Ltd.<br />
            Providing reliable coaching since 2025
          </p>
        </aside>

        {/* Services Section */}
        <nav className="flex flex-col space-y-3">
          <h6 className="footer-heading">Services</h6>
          <a className="footer-link">Branding</a>
          <a className="footer-link">Design</a>
          <a className="footer-link">Marketing</a>
          <a className="footer-link">Advertisement</a>
        </nav>

        {/* Company Section */}
        <nav className="flex flex-col space-y-3">
          <h6 className="footer-heading">Company</h6>
          <a className="footer-link">About us</a>
          <a className="footer-link">Contact</a>
          <a className="footer-link">Jobs</a>
          <a className="footer-link">Press kit</a>
        </nav>

        {/* Legal Section */}
        <nav className="flex flex-col space-y-3">
          <h6 className="footer-heading">Legal</h6>
          <a className="footer-link">Terms of use</a>
          <a className="footer-link">Privacy policy</a>
          <a className="footer-link">Cookie policy</a>
        </nav>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 text-center text-gray-500 text-sm border-t border-gray-800 pt-4">
        © 2025 GENZ FITNESS Ltd. All rights reserved.
      </div>

      {/* Styles for hover underline animation */}
      <style jsx>{`
        /* Footer Link Animation */
        .footer-link {
          position: relative;
          color: #cbd5e1;
          transition: color 0.3s ease;
          display: inline-block;
          width: max-content;
          cursor: pointer;
        }

        .footer-link:hover {
          color: #ffffff;
        }

        .footer-link::after {
          content: "";
          position: absolute;
          width: 0%;
          height: 2px;
          bottom: -2px;
          left: 0;
          background-color: white;
          transition: width 0.3s ease-in-out;
        }

        .footer-link:hover::after {
          width: 100%;
        }

        /* Footer Heading Animation */
        .footer-heading {
          font-size: 1.2rem;
          font-weight: semibold;
          text-transform: uppercase;
          letter-spacing: 1px;
          position: relative;
          text-align: left;
          color: #ffffff;
          padding-bottom: 8px;
          overflow: hidden;
          display: inline-block;
          cursor: pointer;
        }

        .footer-heading::after {
          content: "";
          position: absolute;
          width: 0%;
          height: 2px;
          bottom: 0;
          left: 50%;
          background: linear-gradient(to right, #00c6ff, #0072ff);
          transition: width 0.4s ease-in-out, left 0.4s ease-in-out;
        }

        .footer-heading:hover::after {
          width: 100%;
          left: 0;
        }

        .footer-heading:hover {
          color: #00c6ff;
          transition: color 0.3s ease-in-out;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
