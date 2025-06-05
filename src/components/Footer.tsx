
import { Link } from 'react-router-dom';
import { MapPin, Phone, Printer, Smartphone, Mail, Clock, Facebook, Twitter, Linkedin, Instagram, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

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
    { name: 'Construction', href: '/services/construction' },
    { name: 'Real Estate Consultancy', href: '/services/consultancy' }
  ];

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: '#' },
    { name: 'Twitter', icon: Twitter, href: '#' },
    { name: 'LinkedIn', icon: Linkedin, href: '#' },
    { name: 'Instagram', icon: Instagram, href: '#' }
  ];

  return (
    <footer className="bg-secondary-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">E</span>
              </div>
              <span className="font-heading font-bold text-xl">EMM Consult</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Your trusted partner in real estate solutions across Kenya. We provide professional 
              property valuation, management, and consultancy services.
            </p>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Get In Touch</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Phone className="h-4 w-4 text-primary-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-300">Office Line</p>
                  <p className="text-sm text-white">+254 (20) 2358577</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Printer className="h-4 w-4 text-primary-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-300">Tel/Fax</p>
                  <p className="text-sm text-white">+254 (20) 3748850</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Smartphone className="h-4 w-4 text-primary-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-300">Mobile</p>
                  <p className="text-sm text-white">+254 (0) 733-448331</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="h-4 w-4 text-primary-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-300">Email</p>
                  <p className="text-sm text-white">info@emmconsult.com</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-primary-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-300">Address</p>
                  <p className="text-sm text-white">Studio House, 1st Floor, Plums Lane, Off Ojijo Road, Westlands, Nairobi</p>
                  <p className="text-xs text-gray-400 mt-1">P.O. Box 8949-00200, Nairobi, Kenya</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="h-4 w-4 text-primary-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-300">Hours</p>
                  <p className="text-sm text-white">Mon-Fri: 8:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-gray-300 hover:text-primary-400 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Our Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.href}>
                  <Link to={service.href} className="text-gray-300 hover:text-primary-400 transition-colors">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <div className="text-gray-400 text-center lg:text-left mb-4 lg:mb-0">
              <p>© {currentYear} EMM Consult Ltd. All rights reserved.</p>
            </div>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="text-gray-400 hover:text-primary-400 transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
