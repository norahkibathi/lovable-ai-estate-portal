
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-secondary-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">E</span>
              </div>
              <span className="font-heading font-bold text-xl">EMM Consult</span>
            </div>
            <p className="text-secondary-300 mb-4">
              Professional real estate services in Kenya. From property valuation to management, 
              we provide comprehensive solutions for all your real estate needs.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2 text-primary-400" />
                <span>Nairobi, Kenya</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2 text-primary-400" />
                <span>+254 733-448331</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2 text-primary-400" />
                <span>info@emmconsult.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-secondary-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-secondary-300 hover:text-white transition-colors">Our Services</Link></li>
              <li><Link to="/properties" className="text-secondary-300 hover:text-white transition-colors">Properties</Link></li>
              <li><Link to="/contact" className="text-secondary-300 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link to="/services/valuation" className="text-secondary-300 hover:text-white transition-colors">Property Valuation</Link></li>
              <li><Link to="/services/management" className="text-secondary-300 hover:text-white transition-colors">Property Management</Link></li>
              <li><Link to="/services/sales" className="text-secondary-300 hover:text-white transition-colors">Sales & Marketing</Link></li>
              <li><Link to="/services/construction" className="text-secondary-300 hover:text-white transition-colors">Construction</Link></li>
              <li><Link to="/services/consultancy" className="text-secondary-300 hover:text-white transition-colors">Consultancy</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Stay Updated</h3>
            <p className="text-secondary-300 mb-4">
              Subscribe to our newsletter for the latest property insights and market updates.
            </p>
            <div className="space-y-2">
              <Input 
                type="email" 
                placeholder="Your email address"
                className="bg-secondary-700 border-secondary-600 text-white placeholder:text-secondary-400"
              />
              <Button className="w-full bg-primary-600 hover:bg-primary-700">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-secondary-700 mt-8 pt-8 text-center">
          <p className="text-secondary-400">
            © 2024 EMM Consult Ltd. All rights reserved. Managed by Eric Madete.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
