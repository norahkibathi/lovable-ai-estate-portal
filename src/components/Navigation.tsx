
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, ChevronDown } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { 
      name: 'About', 
      href: '/about',
      submenu: [
        { name: 'Company Overview', href: '/about' },
        { name: 'Key Personnel', href: '/about#personnel' },
      ]
    },
    { 
      name: 'Services', 
      href: '/services',
      submenu: [
        { name: 'Property Valuation', href: '/services/valuation' },
        { name: 'Property Management', href: '/services/management' },
        { name: 'Sales & Marketing', href: '/services/sales' },
        { name: 'Construction', href: '/services/construction' },
        { name: 'Consultancy', href: '/services/consultancy' },
      ]
    },
    { 
      name: 'Properties', 
      href: '/properties',
      submenu: [
        { name: 'Current Listings', href: '/properties/current' },
        { name: 'Property Showcase', href: '/properties/showcase' },
        { name: 'Managed Properties', href: '/properties/managed' },
      ]
    },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">E</span>
              </div>
              <span className="font-heading font-bold text-xl text-secondary-800">
                EMM Consult
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              item.submenu ? (
                <DropdownMenu key={item.name}>
                  <DropdownMenuTrigger asChild>
                    <button
                      className={`px-3 py-2 text-sm font-medium transition-colors flex items-center space-x-1 ${
                        isActive(item.href)
                          ? 'text-primary-600 border-b-2 border-primary-600'
                          : 'text-secondary-600 hover:text-primary-600'
                      }`}
                    >
                      <span>{item.name}</span>
                      <ChevronDown className="h-4 w-4" />
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem asChild>
                      <Link to={item.href} className="w-full">
                        All {item.name}
                      </Link>
                    </DropdownMenuItem>
                    {item.submenu.map((subItem) => (
                      <DropdownMenuItem key={subItem.href} asChild>
                        <Link to={subItem.href} className="w-full">
                          {subItem.name}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`px-3 py-2 text-sm font-medium transition-colors ${
                    isActive(item.href)
                      ? 'text-primary-600 border-b-2 border-primary-600'
                      : 'text-secondary-600 hover:text-primary-600'
                  }`}
                >
                  {item.name}
                </Link>
              )
            ))}
            <Button className="bg-primary-600 hover:bg-primary-700">
              Get Quote
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
              {navigation.map((item) => (
                <div key={item.name}>
                  <Link
                    to={item.href}
                    className={`block px-3 py-2 text-base font-medium transition-colors ${
                      isActive(item.href)
                        ? 'text-primary-600 bg-primary-50'
                        : 'text-secondary-600 hover:text-primary-600 hover:bg-gray-50'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.submenu && (
                    <div className="ml-4 space-y-1">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.href}
                          to={subItem.href}
                          className="block px-3 py-1 text-sm text-secondary-500 hover:text-primary-600"
                          onClick={() => setIsOpen(false)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="px-3 py-2">
                <Button className="w-full bg-primary-600 hover:bg-primary-700">
                  Get Quote
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
