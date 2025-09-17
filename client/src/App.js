import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Component Imports
import Navbar from './components/Navbar';

// Page Imports
import HomePage from './pages/HomePage';
import PlacesPage from './pages/PlacesPage';
import PlaceDetailPage from './pages/PlaceDetailPage';
import AuthPage from './pages/AuthPage';
import MarketplacePage from './pages/MarketplacePage';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';
import ProductCreatePage from './pages/ProductCreatePage';


function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          {/* Core & Auth Routes */}
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<AuthPage />} /> 
          <Route path="/register" element={<AuthPage />} /> 
          
          {/* Tourist & Place Routes */}
          <Route path="/explore" element={<PlacesPage />} />
          <Route path="/place/:id" element={<PlaceDetailPage />} />
          
          {/* Marketplace & Product Routes */}
          <Route path="/marketplace" element={<MarketplacePage />} />
          <Route path="/marketplace/new" element={<ProductCreatePage />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;