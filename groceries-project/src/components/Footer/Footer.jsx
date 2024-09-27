// Footer.jsx
import React from 'react';
import { FaPhone, FaEnvelope, FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="max-w-7xl mx-auto bg-homepage-secondary text-white py-10">
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h2 className="text-7xl font-bold mb-4 px-20 py-5">YOUR LOGO</h2>
          </div>
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-4">PRODUCT</h3>
            <ul>
              <li>PRODUCT OVERVIEW</li>
              <li>OMNI-CHANNEL</li>
              <li>SOURCING</li>
              <li>COMPLIANCE & CONTRACTING</li>
              <li>PAYMENTS</li>
              <li>DATA & REPORTINGPRICING</li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-4">WHY WORKSOME</h3>
            <ul>
              <li>PRODUCT OVERVIEW</li>
              <li>OMNI-CHANNEL</li>
              <li>SOURCING</li>
              <li>COMPLIANCE & CONTRACTING</li>
              <li>PAYMENTS</li>
              <li>DATA & REPORTINGPRICING</li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-4">RESOURCES</h3>
            <ul>
              <li>PRODUCT OVERVIEW</li>
              <li>OMNI-CHANNEL</li>
              <li>SOURCING</li>
              <li>COMPLIANCE & CONTRACTING</li>
              <li>PAYMENTS</li>
              <li>DATA & REPORTINGPRICING</li>
            </ul>
          </div>
        </div>
        <div className="flex justify-end py-12 mt-8 space-x-4">
          <FaPhone className="w-6 h-6" />
          <FaEnvelope className="w-6 h-6" />
          <FaFacebook className="w-6 h-6" />
          <FaLinkedin className="w-6 h-6" />
          <FaTwitter className="w-6 h-6" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
