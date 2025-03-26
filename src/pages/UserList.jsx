import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './UserList.css';

const UserList = () => {
    const [bookings, setBookings] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchBookings();
    }, []);

    const fetchBookings = async () => {
        try {
            console.log('Fetching bookings...');
            const response = await axios.get('http://localhost:5000/api/bookings');
            console.log('Received data:', response.data);
            setBookings(response.data);
            setLoading(false);
        } catch (err) {
            console.error('Detailed error:', err);
            setError('Failed to fetch bookings: ' + err.message);
            setLoading(false);
        }
    };

    if (loading) {
        console.log('Loading state...');
        return <div className="loading">Loading...</div>;
    }
    
    if (error) {
        console.log('Error state:', error);
        return <div className="error">{error}</div>;
    }

    console.log('Current bookings:', bookings);

    return (
        <div className="userlist-container">
            <h2>Booking Records</h2>
            {bookings.length === 0 ? (
                <div className="no-bookings">No bookings found</div>
            ) : (
                <div className="table-container">
                    <table className="bookings-table">
                        <thead>
                            <tr>
                                <th>Booking ID</th>
                                <th>Guest Name</th>
                                <th>Check-in Date</th>
                                <th>Check-out Date</th>
                                <th>Adults</th>
                                <th>Children</th>
                                <th>Room Type</th>
                                <th>Booking Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {bookings.map((booking) => (
                                <tr key={booking.id}>
                                    <td>{booking.id}</td>
                                    <td>{booking.guest_name}</td>
                                    <td>{booking.check_in_date}</td>
                                    <td>{booking.check_out_date}</td>
                                    <td>{booking.adults}</td>
                                    <td>{booking.children}</td>
                                    <td>{booking.room_type}</td>
                                    <td>{booking.created_at}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default UserList;