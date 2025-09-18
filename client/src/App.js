import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Component Imports
import Navbar from './components/Navbar';
import ProtectedRoute from './components/ProtectedRoute'; 

// Page Imports
import HomePage from './pages/HomePage';
import PlacesPage from './pages/PlacesPage';
import PlaceDetailPage from './pages/PlaceDetailPage';
import AuthPage from './pages/AuthPage';
import MarketplacePage from './pages/MarketplacePage';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';
import ProductCreatePage from './pages/ProductCreatePage';
import MyListingsPage from './pages/MyListingsPage';
import AboutUsPage from './pages/AboutUsPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          {/* --- Public Routes --- */}
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<AuthPage />} /> 
          <Route path="/register" element={<AuthPage />} /> 
          <Route path="/explore" element={<PlacesPage />} />
          <Route path="/place/:id" element={<PlaceDetailPage />} />
          <Route path="/marketplace" element={<MarketplacePage />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/about" element={<AboutUsPage />} />
          
          {/* --- Protected Routes (Only for logged-in users) --- */}
          <Route element={<ProtectedRoute />}>
            <Route path="/marketplace/new" element={<ProductCreatePage />} />
            <Route path="/my-listings" element={<MyListingsPage />} />
          </Route>

          {/* --- Not Found Route (Catches all other URLs) --- */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;