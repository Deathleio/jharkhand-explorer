import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import API from '../api';

const MyListingsPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const navigate = useNavigate();
  const userInfo = JSON.parse(localStorage.getItem('userInfo'));

  useEffect(() => {
    if (!userInfo) {
      navigate('/login');
      return;
    }

    const fetchMyProducts = async () => {
      try {
        setLoading(true);
        const config = {
          headers: {
            Authorization: `Bearer ${userInfo.token}`,
          },
        };
        const { data } = await API.get('/api/products/my-listings', config);
        setProducts(data);
      } catch (err) {
        setError(err.response?.data?.message || 'Failed to fetch your listings.');
      } finally {
        setLoading(false);
      }
    };

    fetchMyProducts();
  }, [userInfo, navigate]);

  const deleteProductHandler = async (id) => {
    if (window.confirm('Are you sure you want to delete this listing?')) {
      try {
        const config = {
          headers: {
            Authorization: `Bearer ${userInfo.token}`,
          },
        };
        await API.delete(`/api/products/${id}`, config);
        setProducts(products.filter((product) => product._id !== id));
        setSuccess('Product deleted successfully!');
        setTimeout(() => setSuccess(''), 3000);
      } catch (err) {
        setError(err.response?.data?.message || 'Failed to delete product.');
      }
    }
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold text-stone-gray">My Marketplace Listings</h1>
        <Link to="/marketplace/new" className="bg-leaf-green text-white font-bold py-2 px-4 rounded-lg hover:bg-forest-green">
          + List a New Item
        </Link>
      </div>

      {success && <div className="bg-green-100 text-green-700 p-3 rounded mb-4">{success}</div>}
      
      {loading ? (
        <div className="text-center">Loading...</div>
      ) : error ? (
        <div className="text-center text-red-500">{error}</div>
      ) : products.length === 0 ? (
        <div className="text-center text-gray-600 text-lg mt-8">You haven't listed any products yet.</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product._id} className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
              <Link to={`/product/${product._id}`}>
                <img src={product.image} alt={product.name} className="w-full h-56 object-cover"/>
              </Link>
              <div className="p-6 flex flex-col flex-grow">
                <h2 className="text-2xl font-bold mb-2 text-forest-green">{product.name}</h2>
                <p className="text-gray-600 mb-4 flex-grow">${product.price}</p>
                <div className="mt-auto flex justify-end">
                  <button 
                    onClick={() => deleteProductHandler(product._id)}
                    className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-700 transition duration-300"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyListingsPage;