import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const PlaceDetailPage = () => {
  const { id } = useParams();
  const [place, setPlace] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchPlace = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get(`/api/places/${id}`);
        setPlace(data);
        setLoading(false);
      } catch (err) {
        setError('Could not fetch place details.');
        setLoading(false);
      }
    };
    fetchPlace();
  }, [id]);

  if (loading) return <div className="text-center py-20">Loading...</div>;
  if (error) return <div className="text-center text-red-500 py-20">{error}</div>;
  if (!place) return null;

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="bg-white p-6 md:p-10 rounded-lg shadow-xl max-w-4xl mx-auto">
        <img src={place.images[0]} alt={place.name} className="w-full h-auto md:h-[500px] object-cover rounded-lg mb-6"/>
        <h1 className="text-4xl md:text-5xl font-extrabold mb-2 text-forest-green">{place.name}</h1>
        <p className="text-lg text-gray-500 mb-6">{place.location.address}</p>

        <div className="prose max-w-none text-stone-gray">
          <h3 className="text-2xl font-bold mt-8 mb-2 text-stone-gray">Description</h3>
          <p>{place.description}</p>
          <h3 className="text-2xl font-bold mt-8 mb-2 text-stone-gray">History</h3>
          <p>{place.history}</p>
        </div>
      </div>
    </div>
  );
};

export default PlaceDetailPage;