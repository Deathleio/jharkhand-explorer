import React from 'react';
import aboutUsBackground from '../assets/about-us-background.jpg';

const AboutUsPage = () => {
  return (
    <div>
      {/* --- Hero Section with Background --- */}
      <div
        className="relative h-96 flex items-center justify-center text-white text-center bg-cover bg-center"
        style={{ backgroundImage: `url(${aboutUsBackground})` }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative z-10 p-4">
          <h1 className="text-5xl md:text-6xl font-extrabold">
            Our Story
          </h1>
          <p className="text-lg md:text-xl mt-4">
            Connecting you to the heart of Jharkhand.
          </p>
        </div>
      </div>

      {/* --- Main Content Container --- */}
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        
        {/* --- Our Mission Module --- */}
        <div className="bg-white p-8 rounded-xl shadow-lg mb-12 text-center">
          <h2 className="text-3xl font-bold text-forest-green mb-4">Our Mission</h2>
          <p className="text-lg text-stone-gray leading-relaxed">
            Our primary aim is to provide seamless and easy access to the rich tapestry of Jharkhand's culture, history, and natural beauty. We strive to unveil the hidden gems and popular destinations alike, creating a single, reliable platform for tourists and locals to explore, connect, and engage with this incredible land.
          </p>
        </div>

        {/* --- Features Module --- */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-forest-green mb-6 text-center">What We Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature Card 1 */}
            <div className="text-center">
              <div className="flex justify-center items-center h-16 w-16 bg-leaf-green text-white rounded-full mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">In-Depth Exploration</h3>
              <p className="text-stone-gray">Discover detailed histories, images, and Google Maps locations for countless tourist spots.</p>
            </div>
            {/* Feature Card 2 */}
            <div className="text-center">
               <div className="flex justify-center items-center h-16 w-16 bg-leaf-green text-white rounded-full mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Local Marketplace</h3>
              <p className="text-stone-gray">A community-driven space for locals to buy and sell goods, fostering the local economy.</p>
            </div>
            {/* --- UPDATED FEATURE CARD --- */}
            <div className="text-center">
               <div className="flex justify-center items-center h-16 w-16 bg-leaf-green text-white rounded-full mx-auto mb-4">
               <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">User Authentication</h3>
              <p className="text-stone-gray">Securely register and log in to list items in the marketplace and manage your activity.</p>
            </div>
          </div>
        </div>
        
        {/* --- Future Vision Module --- */}
        <div className="bg-white p-8 rounded-xl shadow-lg mb-12 text-center">
          <h2 className="text-3xl font-bold text-forest-green mb-4">Our Future Vision</h2>
          <p className="text-lg text-stone-gray leading-relaxed">
            We are constantly working to enhance your experience. In the future, we plan to introduce features like local event calendars, guided tour bookings, and a platform to showcase local artisans. Our journey to make Jharkhand more accessible has just begun!
          </p>
        </div>

        {/* --- Credits Module --- */}
        <div className="text-center text-stone-gray mb-12">
          <h2 className="text-2xl font-bold text-forest-green mb-2">Our Team & Credits</h2>
          <p className="text-lg">Created with ❤️ by **Team Foton**</p>
          <p className="text-md mt-1">With the invaluable support and guidance of our mentors at the</p>
          <p className="font-bold text-lg">RCC Institute of Information Technology, Kolkata</p>
        </div>

        {/* --- Contact Us Module --- */}
        <div className="bg-leaf-green text-white p-8 rounded-xl shadow-lg text-center">
            <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
            <p className="mb-6">Have a question or a suggestion? We'd love to hear from you!</p>
            <div className="flex flex-col md:flex-row justify-center items-center gap-8">
                <div className="flex items-center gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                    <a href="mailto:[Your Email Address]" className="font-semibold hover:underline">mayank.shah865@gmail.com</a>
                </div>
                <div className="flex items-center gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                    <span className="font-semibold">7439775027</span>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;