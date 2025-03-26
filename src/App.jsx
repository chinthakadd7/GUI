import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, About, Rooms, FoodMenu, UserList } from './pages';
import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/menu" element={<FoodMenu />} />
        <Route path="/userlist" element={<UserList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App; 