import React from 'react';
import './About.css';
import { FaUmbrellaBeach, FaAward, FaHeart } from 'react-icons/fa';
import { MdLocationOn, MdNaturePeople } from 'react-icons/md';
import { BiLeaf } from 'react-icons/bi';

const About = () => {
  return (
    <div className="about-container">
      {/* Hero Section */}
      <div className="about-hero">
        <div className="hero-content">
          <h1>Our Story</h1>
          <p>Where Paradise Meets Luxury</p>
        </div>
      </div>

      {/* Vision Section */}
      <section className="vision-section">
        <div className="container">
          <div className="vision-content">
            <h2>Welcome to LuxStay Beach Resort</h2>
            <p>
              Nestled along the pristine shores of the Pacific Ocean, LuxStay Beach Resort 
              has been a sanctuary of tranquility and luxury since 2015. Our resort seamlessly 
              blends modern comfort with the natural beauty of our tropical paradise.
            </p>
            <div className="vision-stats">
              <div className="stat-item">
                <span className="stat-number">8</span>
                <span className="stat-label">Years of Excellence</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">50+</span>
                <span className="stat-label">Luxury Rooms</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">1000+</span>
                <span className="stat-label">Happy Guests</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <div className="features-grid">
            <div className="feature-card">
              <FaUmbrellaBeach className="feature-icon" />
              <h3>Private Beach</h3>
              <p>Exclusive access to 2km of pristine shoreline with crystal-clear waters</p>
            </div>
            <div className="feature-card">
              <MdLocationOn className="feature-icon" />
              <h3>Prime Location</h3>
              <p>Perfectly situated for both serenity and convenience</p>
            </div>
            <div className="feature-card">
              <BiLeaf className="feature-icon" />
              <h3>Eco-Friendly</h3>
              <p>Committed to sustainable practices and environmental conservation</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <div className="container">
          <h2>Our Core Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <FaHeart className="value-icon" />
              <h3>Genuine Hospitality</h3>
              <p>We treat every guest like family, providing personalized service with warmth and care.</p>
            </div>
            <div className="value-card">
              <FaAward className="value-icon" />
              <h3>Excellence</h3>
              <p>Committed to maintaining the highest standards in luxury hospitality.</p>
            </div>
            <div className="value-card">
              <MdNaturePeople className="value-icon" />
              <h3>Sustainability</h3>
              <p>Preserving our natural paradise for future generations to enjoy.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="commitment-section">
        <div className="container">
          <div className="commitment-content">
            <h2>Our Commitment</h2>
            <p>
              At LuxStay Beach Resort, we are dedicated to creating unforgettable experiences 
              while preserving the natural beauty of our environment. Our commitment extends 
              beyond luxury hospitality to environmental stewardship and community support.
            </p>
            <div className="commitment-points">
              <div className="point">
                <span className="check">✓</span>
                <p>Sustainable practices in all operations</p>
              </div>
              <div className="point">
                <span className="check">✓</span>
                <p>Support for local communities</p>
              </div>
              <div className="point">
                <span className="check">✓</span>
                <p>Marine life conservation efforts</p>
                 
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    
  );
};
 

export default About; 
