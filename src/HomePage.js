// src/HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="landing-page">
      <h1>Welcome to TO-LET GLOBE</h1>
      <p>Your one-stop solution for all your needs.</p>
      <Link to="/contact" className="contact-link">Contact Us</Link>
    </div>
  );
};

export default HomePage;

