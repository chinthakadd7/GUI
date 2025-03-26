import React, { useState } from 'react';
import './Rooms.css';
import { FaWifi, FaSwimmingPool, FaCoffee, FaWineGlassAlt } from 'react-icons/fa';
import { MdKingBed, MdBalcony, MdRoomService, MdAc } from 'react-icons/md';
import axios from 'axios';

const Rooms = () => {
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [bookingData, setBookingData] = useState({
    guest_name: '',
    check_in_date: '',
    check_out_date: '',
    adults: 1,
    children: 0,
    room_type: ''
  });
  const [message, setMessage] = useState('');

  const rooms = [
    {
      type: 'Ocean View Suite',
      price: 299,
      size: '45m²',
      capacity: '2 Adults + 1 Child',
      bed: '1 King Bed',
      description: 'Wake up to breathtaking ocean views from your private balcony. Enjoy modern amenities and coastal-inspired décor.',
      image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd',
      amenities: ['Private Balcony', 'Ocean View', 'Beach Access', 'Room Service', 'Rain Shower', 'Mini Bar']
    },
    {
      type: 'Beachfront Villa',
      price: 599,
      size: '85m²',
      capacity: '3 Adults + 2 Children',
      bed: '1 King + 2 Singles',
      description: 'Steps away from the beach, this villa offers direct beach access, a private plunge pool, and stunning sunset views.',
      image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d',
      amenities: ['Private Pool', 'Direct Beach Access', 'Butler Service', 'Outdoor Shower', 'Sundeck', 'BBQ Area']
    },
    {
      type: 'Royal Beach Palace',
      price: 999,
      size: '150m²',
      capacity: '4 Adults + 2 Children',
      bed: '2 King Beds',
      description: 'Our most luxurious accommodation featuring panoramic ocean views, private infinity pool, and exclusive beach area.',
      image: 'https://images.unsplash.com/photo-1602002418082-a4443e081dd1',
      amenities: ['Infinity Pool', 'Private Beach', 'Personal Butler', 'Spa Bath', 'Ocean Terrace', 'Chef Service']
    },
    {
      type: 'Tropical Garden Suite',
      price: 399,
      size: '65m²',
      capacity: '2 Adults + 2 Children',
      bed: '1 King + 1 Sofa Bed',
      description: 'Immerse yourself in tropical paradise with a private garden, outdoor dining area, and just steps from the beach.',
      image: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461',
      amenities: ['Private Garden', 'Beach Access', 'Outdoor Dining', 'Plunge Pool', 'Garden Shower', 'Kitchenette']
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBookingData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/bookings', bookingData);
      setMessage('Booking confirmed successfully!');
      // Clear form
      setBookingData({
        guest_name: '',
        check_in_date: '',
        check_out_date: '',
        adults: 1,
        children: 0,
        room_type: ''
      });
    } catch (error) {
      setMessage('Error creating booking. Please try again.');
      console.error('Error:', error);
    }
  };

  return (
    <div className="rooms-page">
      {/* Hero Section */}
      <div className="rooms-hero">
        <h1>Beachfront Paradise</h1>
        <p>Experience Luxury by the Ocean</p>
      </div>

      {/* Room Types Section */}
      <section className="room-types">
        <div className="container">
          <div className="section-header">
            <h2>Our Coastal Retreats</h2>
            <p>Choose your perfect beachside sanctuary</p>
          </div>
          <div className="rooms-grid">
            {rooms.map((room, index) => (
              <div className="room-card" key={index}>
                <div className="room-image">
                  <img src={room.image} alt={room.type} />
                  <div className="price-tag">
                    <span className="amount">${room.price}</span>
                    <span className="per-night">/night</span>
                  </div>
                </div>
                <div className="room-details">
                  <h2>{room.type}</h2>
                  <p className="description">{room.description}</p>
                  <div className="room-specs">
                    <div className="spec">
                      <MdKingBed className="spec-icon" />
                      <span>{room.bed}</span>
                    </div>
                    <div className="spec">
                      <span>{room.size}</span>
                    </div>
                    <div className="spec">
                      <span>{room.capacity}</span>
                    </div>
                  </div>
                  <div className="amenities">
                    {room.amenities.map((amenity, i) => (
                      <span key={i} className="amenity">{amenity}</span>
                    ))}
                  </div>
                  <button 
                    className="book-btn"
                    onClick={() => {
                      setSelectedRoom(room);
                      setBookingData({...bookingData, room_type: room.type});
                      document.getElementById('booking-section').scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section className="booking-section" id="booking-section">
        <div className="container">
          <div className="booking-header">
            <h2>Reserve Your Paradise</h2>
            <p>Begin your beachfront getaway</p>
          </div>
          {message && <div className="message">{message}</div>}
          <form className="booking-form" onSubmit={handleSubmit}>
            <div className="form-grid">
              <div className="form-group full-width">
                <label>Guest Name</label>
                <input 
                  type="text" 
                  name="guest_name"
                  value={bookingData.guest_name}
                  onChange={handleInputChange}
                  placeholder="Enter your full name"
                  required
                />
              </div>
              <div className="form-group">
                <label>Check-in Date</label>
                <input 
                  type="date" 
                  name="check_in_date"
                  value={bookingData.check_in_date}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Check-out Date</label>
                <input 
                  type="date" 
                  name="check_out_date"
                  value={bookingData.check_out_date}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Adults</label>
                <select 
                  name="adults"
                  value={bookingData.adults}
                  onChange={handleInputChange}
                  required
                >
                  {[1,2,3,4].map(num => (
                    <option key={num} value={num}>{num}</option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label>Children</label>
                <select 
                  name="children"
                  value={bookingData.children}
                  onChange={handleInputChange}
                  required
                >
                  {[0,1,2,3].map(num => (
                    <option key={num} value={num}>{num}</option>
                  ))}
                </select>
              </div>
              <div className="form-group full-width">
                <label>Room Type</label>
                <select 
                  name="room_type"
                  value={bookingData.room_type}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select a room type</option>
                  {rooms.map((room, index) => (
                    <option key={index} value={room.type}>{room.type}</option>
                  ))}
                </select>
              </div>
            </div>
            <button type="submit" className="submit-btn">
              Confirm Booking
            </button>
          </form>
        </div>
        <div className="wave-decoration"></div>
      </section>
    </div>
  );
};

export default Rooms;
