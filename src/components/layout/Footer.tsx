
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '@/components/ui/Logo';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-moran-gray text-white py-12">
      <div className="container-custom mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Logo withText={false} />
            <h3 className="text-lg font-bold">Moran Car Hire</h3>
            <p className="text-sm text-gray-300 max-w-xs">
              Providing reliable and premium car rental services for your 
              business and leisure travels.
            </p>
            <div className="flex space-x-4">
              <a href="https://twitter.com" className="text-white hover:text-moran-red transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" /></svg>
              </a>
              <a href="https://facebook.com" className="text-white hover:text-moran-red transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
              </a>
              <a href="https://instagram.com" className="text-white hover:text-moran-red transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-moran-red transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/cars" className="text-gray-300 hover:text-moran-red transition-colors">
                  Browse Cars
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-moran-red transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-moran-red transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-300 hover:text-moran-red transition-colors">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services/business" className="text-gray-300 hover:text-moran-red transition-colors">
                  Business Rentals
                </Link>
              </li>
              <li>
                <Link to="/services/leisure" className="text-gray-300 hover:text-moran-red transition-colors">
                  Leisure Travels
                </Link>
              </li>
              <li>
                <Link to="/services/airport" className="text-gray-300 hover:text-moran-red transition-colors">
                  Airport Pickups
                </Link>
              </li>
              <li>
                <Link to="/services/chauffeur" className="text-gray-300 hover:text-moran-red transition-colors">
                  Chauffeur Services
                </Link>
              </li>
              <li>
                <Link to="/services/events" className="text-gray-300 hover:text-moran-red transition-colors">
                  Event Transportation
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-moran-red mt-0.5" />
                <span className="text-gray-300">
                  123 Main Street, Nairobi, Kenya
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-moran-red" />
                <span className="text-gray-300">+254 123 456 789</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-moran-red" />
                <a href="mailto:info@morancar.com" className="text-gray-300 hover:text-moran-red transition-colors">
                  info@morancar.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-6 text-sm text-gray-400 flex flex-col md:flex-row justify-between items-center">
          <p>© {new Date().getFullYear()} Moran Car Hire. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="hover:text-moran-red transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-moran-red transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
