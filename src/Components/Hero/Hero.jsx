import React from 'react'
import './Hero.css'
import hotelRoom from '../Assets/hotel-room.jpg'

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-left">
        <h1>Luxury Rooms</h1>
        <h2>For Your Perfect Stay</h2>
        <p>Experience comfort and elegance in our carefully designed rooms</p>
        <div className="hero-stats">
          <div className="stat">
            <h3>50+</h3>
            <p>Luxury Rooms</p>
          </div>
          <div className="stat">
            <h3>4.9</h3>
            <p>Guest Rating</p>
          </div>
          <div className="stat">
            <h3>24/7</h3>
            <p>Service</p>
          </div>
        </div>
        <button className="book-now-btn">Book Now</button>
      </div>
      <div className="hero-right">
        <div className="image-container">
          <img src={hotelRoom} alt="Luxury Hotel Room" />
        </div>
      </div>
    </div>
  )
}

export default Hero
