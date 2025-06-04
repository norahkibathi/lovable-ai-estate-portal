
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Linkedin, Instagram, ArrowRight } from 'lucide-react';
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
    { name: 'Construction', href: '/services/construction' }
  ];

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: '#' },
    { name: 'Twitter', icon: Twitter, href: '#' },
    { name: 'LinkedIn', icon: Linkedin, href: '#' },
    { name: 'Instagram', icon: Instagram, href: '#' }
  ];

  const backgroundPatternStyle = {
    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
  };

  return (
    <footer className="relative bg-gradient-to-br from-secondary-900 via-secondary-800 to-black text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full" style={backgroundPatternStyle}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Newsletter Section */}
        <div className="py-12 border-b border-gray-700/50">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="font-heading font-bold text-2xl md:text-3xl mb-4 text-white">
              Stay Updated with Market Insights
            </h3>
            <p className="text-gray-300 mb-6 text-lg">
              Get the latest property market trends, investment opportunities, and expert insights delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent backdrop-blur-sm"
              />
              <Button className="bg-blue-600 hover:bg-black text-white transition-colors duration-300 px-6 py-3">
                Subscribe
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6 lg:col-span-2">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-primary-600 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-2xl">E</span>
              </div>
              <div>
                <span className="font-heading font-bold text-2xl text-white">EMM Consult</span>
                <p className="text-primary-400 text-sm">Real Estate Excellence</p>
              </div>
            </div>
            <p className="text-gray-300 text-base leading-relaxed max-w-md">
              Your trusted partner in real estate solutions across Kenya. We provide professional 
              property valuation, management, and consultancy services with over 23 years of proven excellence.
            </p>
            
            {/* Contact Info Cards */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3 bg-white/5 p-4 rounded-lg backdrop-blur-sm border border-white/10">
                <Clock className="h-5 w-5 text-blue-400 flex-shrink-0" />
                <div>
                  <p className="text-white font-medium">Business Hours</p>
                  <p className="text-gray-300 text-sm">Mon-Fri: 8:00 AM - 6:00 PM</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 bg-white/5 p-4 rounded-lg backdrop-blur-sm border border-white/10">
                <Phone className="h-5 w-5 text-blue-400 flex-shrink-0" />
                <div>
                  <p className="text-white font-medium">Call Us</p>
                  <p className="text-gray-300 text-sm">+254 733-448331</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <p className="font-medium mb-4 text-white">Follow Us</p>
              <div className="flex space-x-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-all duration-300 transform hover:scale-110 backdrop-blur-sm border border-white/20"
                    aria-label={social.name}
                  >
                    <social.icon className="h-5 w-5 text-white" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-xl mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    to={link.href} 
                    className="text-gray-300 hover:text-blue-400 transition-colors flex items-center group"
                  >
                    <ArrowRight className="h-4 w-4 mr-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                    <span className="group-hover:translate-x-1 transition-transform duration-200">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading font-semibold text-xl mb-6 text-white">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.href}>
                  <Link 
                    to={service.href} 
                    className="text-gray-300 hover:text-blue-400 transition-colors flex items-center group"
                  >
                    <ArrowRight className="h-4 w-4 mr-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                    <span className="group-hover:translate-x-1 transition-transform duration-200">{service.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Section */}
        <div className="py-12 border-t border-gray-700/50">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-heading font-semibold text-xl mb-4 text-white">Visit Our Office</h3>
              <div className="flex items-start space-x-4 bg-white/5 p-6 rounded-xl backdrop-blur-sm border border-white/10">
                <MapPin className="h-6 w-6 text-blue-400 mt-1 flex-shrink-0" />
                <div className="text-gray-300">
                  <p className="font-medium text-white mb-1">Studio House, 1st Floor</p>
                  <p>Plums Lane, Off Ojijo Road</p>
                  <p>Westlands, Nairobi, Kenya</p>
                  <p className="mt-2 text-sm text-gray-400">P.O. Box 8949-00200</p>
                </div>
              </div>
            </div>
            <div className="text-center lg:text-right">
              <div className="flex items-center space-x-3 mb-4 justify-center lg:justify-end">
                <Mail className="h-5 w-5 text-blue-400" />
                <span className="text-gray-300">info@emmconsult.com</span>
              </div>
              <Link to="/contact">
                <Button className="bg-blue-600 hover:bg-black text-white transition-colors duration-300 px-8 py-3">
                  Get In Touch
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-700/50 py-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className="text-gray-400 text-center lg:text-left">
              <p>© {currentYear} EMM Consult Ltd. All rights reserved.</p>
              <p className="text-sm mt-1">Licensed Real Estate Company in Kenya</p>
            </div>
            <div className="flex flex-wrap justify-center lg:justify-end space-x-6">
              <Link to="/contact" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                Privacy Policy
              </Link>
              <Link to="/contact" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                Terms of Service
              </Link>
              <Link to="/contact" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
