import React from "react";
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <div className="about-us-header">
        <h1>About Us</h1>
        <p>Your perfect pet adoption partner!</p>
      </div>
      <div className="about-us-content">
        <p>
          Welcome to <strong>Pet Haven</strong>, where we connect loving families with adorable pets in need of a home. 
          Our mission is to provide a safe, transparent, and loving adoption process to ensure every pet finds its forever home.
        </p>
        <p>
          At Pet Haven, we work with local shelters and foster homes to care for pets and provide them with medical care, food, and love 
          until they are adopted. Whether you're looking for a playful puppy, a cuddly kitten, or a calm senior companion, 
          we’re here to help you find your perfect match.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
