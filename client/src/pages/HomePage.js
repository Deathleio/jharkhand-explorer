import React from 'react';
import { Link } from 'react-router-dom';

// --- UPDATES ---
// 1. Imported a local image for the main background.
// 2. Renamed variables for consistency (camelCase).
import heroBackgroundImage from '../assets/jharkhand-homepage-background.jpg';
import dassamFallsImage from '../assets/dassam-falls.jpeg';
import netarhatImage from '../assets/netarhat.jpeg';
import baidyanathImage from '../assets/baidyanath.jpeg';

const featuredSpots = [
  {
    name: 'Dassam Falls, Ranchi',
    image: dassamFallsImage,
    link: '/explore', // Standardized link path
  },
  {
    name: 'Netarhat, Latehar',
    image: netarhatImage, // Using consistent variable name
    link: '/explore',
  },
  {
    name: 'Baidyanath Dham, Deoghar',
    image: baidyanathImage, // Using consistent variable name
    link: '/explore',
  }
];

const HomePage = () => {
  return (
    <>
      {/* --- UPDATE: Using local background image --- */}
      <div
        className="relative h-[calc(100vh-80px)] -mt-20 flex items-center justify-center text-white text-center bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBackgroundImage})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 p-4">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 leading-tight">
            Discover the Land of Forests
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8">
            Explore Jharkhand's breathtaking waterfalls, serene hills, and rich cultural heritage.
          </p>
          <Link to="/explore" className="bg-leaf-green text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-forest-green transition duration-300 transform hover:scale-105">
            Start Your Journey
          </Link>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center text-stone-gray mb-10">Featured Destinations</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredSpots.map((spot) => (
            // --- UPDATE: The entire card is now a clickable link ---
            <Link key={spot.name} to={spot.link} className="block bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
              <img src={spot.image} alt={spot.name} className="w-full h-56 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-forest-green">{spot.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default HomePage;