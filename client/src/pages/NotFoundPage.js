import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="container mx-auto text-center py-20">
      <h1 className="text-6xl font-bold text-stone-gray">404</h1>
      <p className="text-2xl text-gray-600 mt-4">Page Not Found</p>
      <p className="text-gray-500 mt-2">The page you are looking for does not exist.</p>
      <Link 
        to="/" 
        className="mt-6 inline-block bg-leaf-green text-white font-bold py-3 px-6 rounded-lg hover:bg-forest-green transition duration-300"
      >
        Go Back to Home
      </Link>
    </div>
  );
};

export default NotFoundPage;