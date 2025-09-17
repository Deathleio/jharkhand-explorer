import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import authBackgroundImage from '../assets/auth-background.jpg'; // Import your new background image

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true); // Toggles between Login and Register forms
  const [name, setName] = useState(''); // For registration
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState(''); // For registration

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const navigate = useNavigate();

  // Redirect if already logged in (optional, but good UX)
  useEffect(() => {
    const userInfo = localStorage.getItem('userInfo');
    if (userInfo) {
      navigate('/'); // Redirect to home if user is already logged in
    }
  }, [navigate]);

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    try {
      if (isLogin) { // Handle Login
        const { data } = await axios.post('/api/users/login', { email, password }, config);
        localStorage.setItem('userInfo', JSON.stringify(data));
        navigate('/');
      } else { // Handle Registration
        if (password !== confirmPassword) {
          setError('Passwords do not match');
          setLoading(false);
          return;
        }
        const { data } = await axios.post('/api/users/register', { name, email, password }, config);
        localStorage.setItem('userInfo', JSON.stringify(data)); // Log user in immediately after registration
        navigate('/');
      }
    } catch (err) {
      setError(err.response && err.response.data.message ? err.response.data.message : err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="relative flex items-center justify-center min-h-[calc(100vh-80px)] bg-cover bg-center"
      style={{ backgroundImage: `url(${authBackgroundImage})` }}
    >
      <div className="absolute inset-0 bg-black opacity-60"></div> {/* Dark overlay */}
      
      <div className="relative z-10 w-full max-w-lg mx-auto p-8 rounded-xl shadow-2xl bg-white/90 backdrop-blur-sm">
        <h1 className="text-4xl font-extrabold mb-8 text-center text-forest-green">
          {isLogin ? 'Welcome Back!' : 'Join Jharkhand Explorer'}
        </h1>
        
        {error && <div className="bg-red-100 text-red-700 p-3 rounded mb-4 text-center">{error}</div>}
        {loading && <div className="text-center mb-4 text-forest-green">Loading...</div>}

        <form onSubmit={submitHandler}>
          {!isLogin && ( // Name field only for registration
            <div className="mb-4">
              <label className="block text-stone-gray text-sm font-bold mb-2" htmlFor="name">
                Full Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-stone-gray leading-tight focus:outline-none focus:ring-2 focus:ring-leaf-green"
                id="name"
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required={!isLogin}
              />
            </div>
          )}

          <div className="mb-4">
            <label className="block text-stone-gray text-sm font-bold mb-2" htmlFor="email">
              Email Address
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-stone-gray leading-tight focus:outline-none focus:ring-2 focus:ring-leaf-green"
              id="email"
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-stone-gray text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-stone-gray mb-3 leading-tight focus:outline-none focus:ring-2 focus:ring-leaf-green"
              id="password"
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {!isLogin && ( // Confirm Password only for registration
            <div className="mb-6">
              <label className="block text-stone-gray text-sm font-bold mb-2" htmlFor="confirmPassword">
                Confirm Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-stone-gray mb-3 leading-tight focus:outline-none focus:ring-2 focus:ring-leaf-green"
                id="confirmPassword"
                type="password"
                placeholder="Confirm password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required={!isLogin}
              />
            </div>
          )}

          <button
            className="bg-leaf-green hover:bg-forest-green text-white font-bold py-3 px-6 rounded-full focus:outline-none focus:shadow-outline w-full transition duration-300 transform hover:scale-105 disabled:bg-gray-400"
            type="submit"
            disabled={loading}
          >
            {loading ? (isLogin ? 'Signing In...' : 'Registering...') : (isLogin ? 'Sign In' : 'Register')}
          </button>
        </form>

        <div className="text-center mt-6">
          <p className="text-stone-gray text-base">
            {isLogin ? "New Customer? " : "Already have an account? "}
            <button 
              onClick={() => {
                setIsLogin(!isLogin);
                setError(''); // Clear errors when switching form
                setName('');
                setEmail('');
                setPassword('');
                setConfirmPassword('');
              }} 
              className="font-bold text-leaf-green hover:text-forest-green focus:outline-none"
            >
              {isLogin ? "Register" : "Sign In"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;