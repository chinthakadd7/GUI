import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import logo from '../Assets/menuicon11.png';

const Navbar = () => {
    const [menu, setMenu] = useState("home");
    const [isScrolled, setIsScrolled] = useState(false);

    // Add scroll event listener
    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
            <div className='nav-logo'>
                <img src={logo} alt="Logo" />
                <h1>LuxStay</h1>
            </div>

            {/* Navigation Menu */}
            <ul className="nav-menu">
                <li onClick={() => setMenu("home")} className={menu === "home" ? 'active' : ''}>
                    <Link to="/">Home</Link>
                </li>

                <li onClick={() => setMenu("rooms")} className={menu === "rooms" ? 'active' : ''}>
                    <Link to="/rooms">Rooms</Link>
                </li>

                <li onClick={() => setMenu("food-menu")} className={menu === "food-menu" ? 'active' : ''}>
                    <Link to="/food-menu">Food Menu</Link>
                </li>
                <li onClick={() => setMenu("about")} className={menu === "about" ? 'active' : ''}>
                    <Link to="/about">About Us</Link>
                </li>
                <li onClick={() => setMenu("userlist")} className={menu === "userlist" ? 'active' : ''}>
                    <Link to="/userlist">User List</Link>
                </li>
            </ul>

            <div className="nav-login-cart">
                <Link to="/login">
                    <button className="login-button">
                        <span>Login</span>
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Navbar;
