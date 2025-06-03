
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Properties', href: '/properties' },
    { name: 'Contact', href: '/contact' }
  ];

  const services = [
    { name: 'Property Valuation', href: '/services/valuation' },
    { name: 'Property Management', href: '/services/management' },
    { name: 'Sales & Marketing', href: '/services/sales' },
    { name: 'Construction', href: '/services/construction' }
  ];

  return (
    <footer className="bg-secondary-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">E</span>
              </div>
              <span className="font-heading font-bold text-xl">EMM Consult</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Your trusted partner in real estate solutions across Kenya, providing professional 
              property valuation, management, and consultancy services with over 23 years of experience.
            </p>
            <div className="flex items-center space-x-2 text-sm text-gray-300">
              <Clock className="h-4 w-4 text-primary-500" />
              <span>Mon-Fri: 8:00 AM - 6:00 PM</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4 text-primary-400">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    to={link.href} 
                    className="text-gray-300 hover:text-primary-400 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4 text-primary-400">Our Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.href}>
                  <Link 
                    to={service.href} 
                    className="text-gray-300 hover:text-primary-400 transition-colors text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4 text-primary-400">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-primary-500 mt-1 flex-shrink-0" />
                <div className="text-sm text-gray-300">
                  <p>Studio House, 1st Floor</p>
                  <p>Plums Lane, Off Ojijo Road</p>
                  <p>Westlands, Nairobi, Kenya</p>
                  <p>P.O. Box 8949-00200</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-primary-500" />
                <span className="text-sm text-gray-300">+254 733-448331</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-primary-500" />
                <span className="text-sm text-gray-300">info@emmconsult.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-700 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <div className="text-sm text-gray-400">
              © {currentYear} EMM Consult Ltd. All rights reserved.
            </div>
            <div className="flex space-x-6 mt-4 sm:mt-0">
              <Link to="/contact" className="text-sm text-gray-400 hover:text-primary-400 transition-colors">
                Privacy Policy
              </Link>
              <Link to="/contact" className="text-sm text-gray-400 hover:text-primary-400 transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
