import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import { Home, Rooms, FoodMenu, About, UserList, } from './pages';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
 


function App() {
    return (
        <Router>
            <div className="app">
                <Navbar />
                <main className="main-content">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/rooms" element={<Rooms />} />
                        <Route path="/food-menu" element={<FoodMenu />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/users" element={<UserList />} />
                        
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
