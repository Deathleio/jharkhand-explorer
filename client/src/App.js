import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import PlacesPage from './pages/PlacesPage';
import PlaceDetailPage from './pages/PlaceDetailPage';
import AuthPage from './pages/AuthPage'; // 1. Import the new AuthPage

function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/explore" element={<PlacesPage />} />
          <Route path="/place/:id" element={<PlaceDetailPage />} />
          
          {/* 2. Add routes for login and register */}
          <Route path="/login" element={<AuthPage />} /> 
          <Route path="/register" element={<AuthPage />} /> 
        </Routes>
      </main>
    </Router>
  );
}

export default App;