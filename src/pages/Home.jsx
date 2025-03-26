import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import { FaArrowRight, FaCocktail, FaConciergeBell, FaSwimmingPool, FaUmbrellaBeach } from 'react-icons/fa';
import { MdSpa } from 'react-icons/md';
import { MdRestaurant } from 'react-icons/md';
import { BiWater } from 'react-icons/bi';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd",
      title: "Welcome to Paradise",
      subtitle: "Experience Luxury by the Ocean"
    },
    {
      image: "https://images.unsplash.com/photo-1582719508461-905c673771fd",
      title: "Luxury Accommodations",
      subtitle: "Wake up to Ocean Views"
    },
    {
      image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d",
      title: "Beachfront Dining",
      subtitle: "Savor the Moment"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => 
        prevSlide === slides.length - 1 ? 0 : prevSlide + 1
      );
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);
  };

  return (
    <div className="home">
      {/* Slideshow Section */}
      <section className="slideshow">
        {slides.map((slide, index) => (
          <div 
            key={index}
            className={`slide ${index === currentSlide ? 'active' : ''}`}
            style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${slide.image})` }}
          >
            <div className="slide-content">
              <h1>{slide.title}</h1>
              <p>{slide.subtitle}</p>
              <Link to="/rooms" className="cta-button">
                Book Your Stay <FaArrowRight className="arrow-icon" />
              </Link>
            </div>
          </div>
        ))}
        <button className="slide-arrow prev" onClick={prevSlide}>❮</button>
        <button className="slide-arrow next" onClick={nextSlide}>❯</button>
        <div className="slide-dots">
          {slides.map((_, index) => (
            <span 
              key={index} 
              className={`dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
            ></span>
          ))}
        </div>
      </section>

      {/* Featured Rooms Section */}
      <section className="featured-rooms">
        <div className="container">
          <div className="section-header">
            <h2>Featured Accommodations</h2>
            <p>Discover our most popular luxury stays</p>
          </div>
          <div className="rooms-grid">
            <div className="room-card">
              <div className="room-image">
                <img src="https://images.unsplash.com/photo-1582719508461-905c673771fd" alt="Luxury Suite" />
                <div className="room-tag">Most Popular</div>
                <div className="price-tag">
                  <span className="amount">$299</span>
                  <span className="per-night">/night</span>
                </div>
              </div>
              <div className="room-info">
                <h3>Ocean View Suite</h3>
                <p>Wake up to breathtaking ocean views from your private balcony</p>
                <div className="room-features">
                  <span><i className="fas fa-bed"></i> King Bed</span>
                  <span><i className="fas fa-ruler-combined"></i> 45m²</span>
                  <span><i className="fas fa-user-friends"></i> 2 Adults</span>
                </div>
                <div className="room-amenities">
                  <span>Ocean View</span>
                  <span>Private Balcony</span>
                  <span>Room Service</span>
                </div>
                <Link to="/rooms" className="view-room-btn">
                  Explore Room <FaArrowRight />
                </Link>
              </div>
            </div>

            <div className="room-card">
              <div className="room-image">
                <img src="https://images.unsplash.com/photo-1571896349842-33c89424de2d" alt="Beach Villa" />
                <div className="room-tag">Best Value</div>
                <div className="price-tag">
                  <span className="amount">$499</span>
                  <span className="per-night">/night</span>
                </div>
              </div>
              <div className="room-info">
                <h3>Beachfront Villa</h3>
                <p>Your private paradise with direct access to pristine beaches</p>
                <div className="room-features">
                  <span><i className="fas fa-bed"></i> 2 King Beds</span>
                  <span><i className="fas fa-ruler-combined"></i> 85m²</span>
                  <span><i className="fas fa-user-friends"></i> 4 Adults</span>
                </div>
                <div className="room-amenities">
                  <span>Private Pool</span>
                  <span>Beach Access</span>
                  <span>Butler Service</span>
                </div>
                <Link to="/rooms" className="view-room-btn">
                  Explore Room <FaArrowRight />
                </Link>
              </div>
            </div>

            <div className="room-card">
              <div className="room-image">
                <img src="https://images.unsplash.com/photo-1602002418082-a4443e081dd1" alt="Royal Suite" />
                <div className="room-tag">Luxury</div>
                <div className="price-tag">
                  <span className="amount">$799</span>
                  <span className="per-night">/night</span>
                </div>
              </div>
              <div className="room-info">
                <h3>Royal Beach Palace</h3>
                <p>Ultimate luxury with panoramic ocean views and private infinity pool</p>
                <div className="room-features">
                  <span><i className="fas fa-bed"></i> 2 King Beds</span>
                  <span><i className="fas fa-ruler-combined"></i> 150m²</span>
                  <span><i className="fas fa-user-friends"></i> 6 Adults</span>
                </div>
                <div className="room-amenities">
                  <span>Infinity Pool</span>
                  <span>Private Beach</span>
                  <span>Chef Service</span>
                </div>
                <Link to="/rooms" className="view-room-btn">
                  Explore Room <FaArrowRight />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Paradise Row Section */}
      <section className="paradise-row">
        <div className="container">
          <div className="paradise-content">
            <div className="paradise-text">
              <h2>Welcome to Paradise</h2>
              <p className="highlight-text">
                Your Perfect Beachfront Getaway
              </p>
              <p className="description-text">
                Experience the perfect blend of luxury and natural beauty at our 
                beachfront resort. With pristine beaches, world-class amenities, 
                and unforgettable views, every stay becomes a treasured memory.
              </p>
              <div className="paradise-highlights">
                <div className="highlight-item">
                  <FaUmbrellaBeach className="highlight-icon" />
                  <span>Private Beach</span>
                </div>
                <div className="highlight-item">
                  <FaSwimmingPool className="highlight-icon" />
                  <span>Infinity Pools</span>
                </div>
                <div className="highlight-item">
                  <MdSpa className="highlight-icon" />
                  <span>Luxury Spa</span>
                </div>
              </div>
            </div>
            <div className="paradise-image">
              <img 
                src="https://images.unsplash.com/photo-1540541338287-41700207dee6" 
                alt="Resort View" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Resort Experiences Section */}
      <section className="experiences">
        <div className="container">
          <div className="section-header">
            <h2>Resort Experiences</h2>
            <p>Discover extraordinary moments at LuxStay</p>
          </div>
          <div className="experience-grid">
            <div className="experience-card">
              <div className="experience-image">
                <img src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874" alt="Spa" />
                <div className="experience-overlay"></div>
              </div>
              <div className="experience-content">
                <div className="experience-icon">
                  <MdSpa />
                </div>
                <h3>Luxury Spa</h3>
                <p>Indulge in rejuvenating treatments and massages in our beachfront spa pavilions</p>
                <ul className="experience-features">
                  <li>Traditional Massages</li>
                  <li>Couples Treatments</li>
                  <li>Ocean View Pavilions</li>
                </ul>
                <Link to="/spa" className="experience-link">
                  Explore More <FaArrowRight />
                </Link>
              </div>
            </div>

            <div className="experience-card">
              <div className="experience-image">
                <img src="https://images.unsplash.com/photo-1533777857889-4be7c70b33f7" alt="Dining" />
                <div className="experience-overlay"></div>
              </div>
              <div className="experience-content">
                <div className="experience-icon">
                  <MdRestaurant />
                </div>
                <h3>Fine Dining</h3>
                <p>Savor exquisite cuisine with panoramic ocean views at our signature restaurants</p>
                <ul className="experience-features">
                  <li>5 Unique Restaurants</li>
                  <li>Beachfront Dining</li>
                  <li>Private Chef Service</li>
                </ul>
                <Link to="/menu" className="experience-link">
                  View Dining <FaArrowRight />
                </Link>
              </div>
            </div>

            <div className="experience-card">
              <div className="experience-image">
                <img src="https://images.unsplash.com/photo-1615880484746-a134be9a6ecf" alt="Activities" />
                <div className="experience-overlay"></div>
              </div>
              <div className="experience-content">
                <div className="experience-icon">
                  <BiWater />
                </div>
                <h3>Water Activities</h3>
                <p>Experience thrilling water sports and adventures in crystal-clear waters</p>
                <ul className="experience-features">
                  <li>Scuba Diving</li>
                  <li>Sunset Cruises</li>
                  <li>Snorkeling Tours</li>
                </ul>
                <Link to="/activities" className="experience-link">
                  Discover More <FaArrowRight />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter">
        <div className="container">
          <div className="newsletter-content">
            <h2>Stay Updated</h2>
            <p>Subscribe to our newsletter for exclusive offers and updates</p>
            <form className="newsletter-form">
              <input type="email" placeholder="Enter your email" required />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 