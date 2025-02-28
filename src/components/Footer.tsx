import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Twitter, Linkedin, Instagram, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">wAt Enterprises</h3>
            <p className="mb-4 text-gray-400">Your Digital Partner for Success</p>
            <div className="flex space-x-4">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
                <Twitter size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
                <Linkedin size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
                <Instagram size={20} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white transition-colors duration-300">Home</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors duration-300">Services</Link></li>
              <li><Link to="/portfolio" className="text-gray-400 hover:text-white transition-colors duration-300">Portfolio</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors duration-300">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors duration-300">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors duration-300">Website Design</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors duration-300">Digital Marketing</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors duration-300">App Development</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors duration-300">UI/UX Design</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors duration-300">SEO Optimization</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={20} className="mr-2 mt-1 flex-shrink-0 text-blue-500" />
                <span className="text-gray-400">No 187, 8th Main 2nd Cross, Prakruthi Layout Srikantapura, Bangalore North, Bengaluru,
                Karnataka, 560073</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-2 flex-shrink-0 text-blue-500" />
                <a href="tel:+1234567890" className="text-gray-400 hover:text-white transition-colors duration-300">+1 (234) 567-890</a>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-2 flex-shrink-0 text-blue-500" />
                <a href="mailto:info@watenterprises.com" className="text-gray-400 hover:text-white transition-colors duration-300">info@watenterprises.com</a>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-gray-800 my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">© {currentYear} wAt Enterprises. All rights reserved.</p>
          <div className="mt-4 md:mt-0">
            <a href="#" className="text-gray-500 text-sm hover:text-white transition-colors duration-300 mr-4">Privacy Policy</a>
            <a href="#" className="text-gray-500 text-sm hover:text-white transition-colors duration-300">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;