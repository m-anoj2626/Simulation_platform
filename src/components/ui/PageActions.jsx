import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const PageActions = () => {
  const [showButtons, setShowButtons] = useState(true);
  let lastScroll = window.scrollY;
  const navigate =useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      if (currentScroll > lastScroll) {
        setShowButtons(false); // scrolling down
      } else {
        setShowButtons(true);  // scrolling up
      }
      lastScroll = currentScroll;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-26 left-6 z-50 flex gap-4 transition-opacity duration-200 ${
        showButtons ? 'opacity-100' : 'opacity-0'
      }`}
    >
    
        <button   onClick={() => navigate(-1)}
         className="flex items-center gap-2 bg-white/90 backdrop-blur-sm text-gray-800 font-semibold py-3 px-6 rounded-full shadow-md hover:scale-105 transition">
          <ArrowLeft size={20} />
          Back
        </button>
      <Link to="/">
        <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-3 px-6 rounded-full shadow-md hover:scale-105 transition">
          Home
        </button>
      </Link>
    </div>
  );
};

export default PageActions;
