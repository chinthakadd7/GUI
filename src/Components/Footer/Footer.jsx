import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section">
                    <h3>About LuxStay</h3>
                    <p>
                        Experience luxury and comfort at LuxStay. We provide world-class 
                        accommodation and dining services to make your stay memorable.
                    </p>
                </div>

                <div className="footer-section">
                    <h3>Contact Info</h3>
                    <p>
                        <strong>Address:</strong> 123 Luxury Avenue, <br />
                        Paradise City, PC 12345
                    </p>
                    <p>
                        <strong>Phone:</strong> +1 (555) 123-4567
                    </p>
                    <p>
                        <strong>Email:</strong> info@luxstay.com
                    </p>
                </div>

                <div className="footer-section">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><Link to="/">Rooms</Link></li>
                        <li><Link to="/food-menu">Food Menu</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h3>Follow Us</h3>
                    <div className="social-links">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            <FaFacebook />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                            <FaTwitter />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                            <FaInstagram />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin />
                        </a>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; 2024 LuxStay. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer; 