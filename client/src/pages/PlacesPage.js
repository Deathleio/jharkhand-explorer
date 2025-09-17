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
            <div key={place._id} className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col transform hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <Link to={`/place/${place._id}`} className="block">
                <img src={place.images[0]} alt={place.name} className="w-full h-56 object-cover"/>
              </Link>
              <div className="p-6 flex flex-col flex-grow">
                <h2 className="text-2xl font-bold mb-2 text-forest-green">{place.name}</h2>
                <p className="text-gray-600 mb-4 flex-grow">{place.description.substring(0, 120)}...</p>
                <div className="mt-4 flex justify-between items-center">
                  <Link to={`/place/${place._id}`} className="font-semibold text-leaf-green">
                    Read More &rarr;
                  </Link>
                  {/* --- NEW GOOGLE MAPS LINK --- */}
                  {place.location.googleMapsUrl && (
                    <a 
                      href={place.location.googleMapsUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-stone-gray text-white text-sm font-bold py-2 px-3 rounded-lg hover:bg-black"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      View on Map
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PlacesPage;