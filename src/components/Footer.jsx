import React from 'react';
import { Link } from 'react-router-dom';

import { FacebookIcon, TwitterIcon, LinkedinIcon, InstagramIcon} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#0d0d2b] text-[#f0f0f0] py-10 px-5 shadow-lg">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-around gap-8">
        {/* About Section */}
        <div className="flex-1 min-w-[200px] mb-8 lg:mb-0">
          <h3 className="text-2xl font-semibold mb-4 text-[#9b59b6] border-b-2 border-[#6c3483] pb-2 inline-block">Zeetheta</h3>
          <p className="text-sm leading-relaxed mb-2">Gain Real-World Experience Without the Risk.</p>
          <p className="text-sm leading-relaxed">Build your skills through industry-crelinkted job simulations.</p>
        </div>

        {/* Quick Links Section */}
        <div className="flex-1 min-w-[150px] mb-8 lg:mb-0">
          <h3 className="text-lg font-semibold mb-4 text-[#9b59b6] border-b-2 border-[#6c3483] pb-2 inline-block">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link to="/simulation " className="text-[#c7c7c7] hover:text-purple-500 transition-colors duration-300">Simulations</Link></li>
            <li><Link to="/industries" className="text-[#c7c7c7] hover:text-purple-500 transition-colors duration-300">Industries</Link></li>
            <li><Link to="/about " className="text-[#c7c7c7] hover:text-purple-500 transition-colors duration-300">About</Link></li>
            <li><Link to="/" className="text-[#c7c7c7] hover:text-purple-500 transition-colors duration-300">For Students</Link></li>
            <li><Link to="/signup" className="text-[#c7c7c7] hover:text-purple-500 transition-colors duration-300">Sign In</Link></li>
            <li><Link to="/login" className="text-[#c7c7c7] hover:text-purple-500 transition-colors duration-300">Start Free Trial</Link></li>
          </ul>
        </div>

        {/* Contact Us Section */}
        <div className="flex-1 min-w-[200px] mb-8 lg:mb-0">
          <h3 className="text-lg font-semibold mb-4 text-[#9b59b6] border-b-2 border-[#6c3483] pb-2 inline-block">Contact Us</h3>
          <p className="text-sm mb-2">Email: info@zeetheta.com</p>
          <p className="text-sm mb-4">Phone: +123 456 7890</p>
          <div className="flex space-x-4">
            <Link to="#" className="text-white text-xl hover:text-[#9b59b6] transition-colors duration-300">
          
              <span><FacebookIcon/></span> {/* Fallback if Font Awesome React not used */}
            </Link>
            <Link to="#" className="text-white text-xl hover:text-[#9b59b6] transition-colors duration-300">
          
              <span><TwitterIcon/></span>
            </Link>
            <Link to="#" className="text-white text-xl hover:text-[#9b59b6] transition-colors duration-300">
          
           <span><LinkedinIcon/></span>
            </Link>
            <Link to="#" className="text-white text-xl hover:text-[#9b59b6] transition-colors duration-300">
            
              <span><InstagramIcon/></span>
            </Link>
          </div>
        </div>

        {/* Legal Section */}
        <div className="flex-1 min-w-[150px] mb-8 lg:mb-0">
          <h3 className="text-lg font-semibold mb-4 text-[#9b59b6] border-b-2 border-[#6c3483] pb-2 inline-block">Legal</h3>
          <ul className="space-y-2">
            <li><Link to="#" className="text-[#c7c7c7] hover:text-purple-500 transition-colors duration-300">Privacy Policy</Link></li>
            <li><Link to="#" className="text-[#c7c7c7] hover:text-purple-500 transition-colors duration-300">Terms of Service</Link></li>
             <li><Link to="/Blog" className="text-[#c7c7c7]  hover:text-purple-500 transition-colors duration-300 hover:cursor-pointer">Blog</Link></li>
            <li><Link to="/faq" className="text-[#c7c7c7]  hover:text-purple-500 transition-colors duration-300 hover:cursor-pointer">FAQ / Help</Link></li>
          </ul>
        </div>
      </div>

      <div className="text-center mt-8 pt-5 border-t border-gray-700 text-sm text-[#9c9c9c]">
        &copy; 2025 Zeetheta. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;