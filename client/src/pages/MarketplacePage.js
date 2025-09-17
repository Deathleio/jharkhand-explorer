import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const MarketplacePage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await axios.get('/api/products');
        setProducts(data);
      } catch (error) {
        console.error('Could not fetch products');
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold text-stone-gray">Local Marketplace</h1>
        <Link to="/marketplace/new" className="bg-leaf-green text-white font-bold py-2 px-4 rounded-lg hover:bg-forest-green">
          + List an Item
        </Link>
      </div>
      {loading ? (
        <div className="text-center">Loading...</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product._id} className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
              <Link to={`/product/${product._id}`} className="block">
                <img src={product.image} alt={product.name} className="w-full h-48 object-cover"/>
              </Link>
              <div className="p-4 flex flex-col flex-grow">
                <h2 className="text-xl font-bold text-forest-green">{product.name}</h2>
                <p className="text-gray-600">${product.price}</p>
                <p className="text-gray-500 text-sm mb-4">Sold by {product.seller.name}</p>
                <div className="mt-auto">
                  <button onClick={() => addToCart(product)} className="w-full bg-stone-gray text-white py-2 rounded-lg hover:bg-black">
                    Add to Cart
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

export default MarketplacePage;