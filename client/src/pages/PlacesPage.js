import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const PlacesPage = () => {
  const [places, setPlaces] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchPlaces = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get('/api/places');
        setPlaces(data);
        setLoading(false);
      } catch (err) {
        setError('Could not fetch places. Please try again later.');
        setLoading(false);
      }
    };
    fetchPlaces();
  }, []);

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center text-stone-gray">Explore Jharkhand</h1>
      {loading ? (
        <div className="text-center">Loading...</div>
      ) : error ? (
        <div className="text-center text-red-500">{error}</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {places.map((place) => (
            <Link to={`/place/${place._id}`} key={place._id} className="block bg-white rounded-lg shadow-lg overflow-hidden transform hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <img src={place.images[0]} alt={place.name} className="w-full h-56 object-cover"/>
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-2 text-forest-green">{place.name}</h2>
                <p className="text-gray-600 mb-4">{place.description.substring(0, 120)}...</p>
                <span className="font-semibold text-leaf-green">Read More &rarr;</span>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default PlacesPage;