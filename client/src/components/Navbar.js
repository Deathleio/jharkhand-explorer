import React, { useState, useContext } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  // 1. Get user info from localStorage
  const userInfo = JSON.parse(localStorage.getItem('userInfo'));

  const activeLinkStyle = {
    color: '#6a994e',
    fontWeight: '600',
  };

  // 2. Create a logout handler
  const logoutHandler = () => {
    localStorage.removeItem('userInfo');
    navigate('/login');
  };

  return (
    <nav className="bg-white/80 backdrop-blur-md shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          
          {/* Brand with Icon */}
          <Link to="/" className="flex items-center gap-3 text-2xl font-bold text-forest-green">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 100-18 9 9 0 000 18z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2m0 14v2m9-9h-2M5 12H3m14.243-7.243L15 6.5m-3 11l-1.243 1.243M5.757 5.757L7.5 7.5m9 9l-1.743-1.743" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
            </svg>
            Jharkhand Explorer
          </Link>
          
          {/* Desktop Menu Links */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink to="/explore" style={({ isActive }) => isActive ? activeLinkStyle : undefined} className="text-stone-gray hover:text-leaf-green font-medium">
              Explore
            </NavLink>
            <NavLink to="/marketplace" style={({ isActive }) => isActive ? activeLinkStyle : undefined} className="text-stone-gray hover:text-leaf-green font-medium">
              Marketplace
            </NavLink>
            <NavLink to="/cart" style={({ isActive }) => isActive ? activeLinkStyle : undefined} className="text-stone-gray hover:text-leaf-green font-medium relative">
               Cart
               {cartItems.length > 0 && (
                <span className="absolute -top-2 -right-4 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItems.reduce((acc, item) => acc + item.qty, 0)}
                </span>
              )}
            </NavLink>

            {/* 3. Conditionally render Login or Logout/Username */}
            {userInfo ? (
              <div className="flex items-center gap-4">
                <span className="font-semibold text-stone-gray">Hi, {userInfo.name}</span>
                <button onClick={logoutHandler} className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-700 font-semibold transition duration-300">
                  Logout
                </button>
              </div>
            ) : (
              <Link to="/login" className="bg-leaf-green text-white px-4 py-2 rounded-md hover:bg-forest-green font-semibold transition duration-300">
                Login
              </Link>
            )}
          </div>

          {/* Mobile Menu logic would also need to be updated similarly */}
          <div className="md:hidden">
              {/* Hamburger button logic remains the same */}
          </div>
        </div>
      </div>
       {/* Mobile Menu would need the same conditional logic for login/logout */}
    </nav>
  );
};

export default Navbar;