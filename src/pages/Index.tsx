
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import ServiceCard from '@/components/ServiceCard';
import PropertyCard from '@/components/PropertyCard';
import InfoCard from '@/components/InfoCard';
import InfoModal from '@/components/InfoModal';
import ValuationCalculator from '@/components/ValuationCalculator';
import AnimatedCounter from '@/components/AnimatedCounter';
import { ArrowRight, CheckCircle, Star, Users, Home, TrendingUp } from 'lucide-react';

const Index = () => {
  const [selectedInfo, setSelectedInfo] = useState<any>(null);

  const infoCards = [
    {
      title: "Property Investment Consulting",
      description: "Expert guidance for profitable real estate investments in Kenya's growing market.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      content: "Our property investment consulting service provides comprehensive analysis and strategic guidance for both local and international investors looking to capitalize on Kenya's dynamic real estate market. We conduct thorough market research, identify high-potential investment opportunities, and provide detailed financial projections to ensure maximum returns on your investment.",
      features: [
        "Market analysis and investment opportunity identification",
        "Financial modeling and ROI projections",
        "Risk assessment and mitigation strategies",
        "Legal compliance and due diligence support",
        "Portfolio diversification recommendations",
        "Exit strategy planning"
      ]
    },
    {
      title: "Commercial Property Solutions",
      description: "Comprehensive commercial real estate services for businesses and corporations.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      content: "We specialize in providing end-to-end commercial property solutions that cater to the unique needs of businesses across various industries. From office spaces in Nairobi's CBD to industrial warehouses and retail outlets, we help businesses find, acquire, and manage properties that align with their operational requirements and growth objectives.",
      features: [
        "Office space leasing and acquisition",
        "Industrial and warehouse solutions",
        "Retail space development and management",
        "Corporate real estate consulting",
        "Lease negotiation and management",
        "Space planning and optimization"
      ]
    },
    {
      title: "Residential Development Projects",
      description: "Creating modern, sustainable residential communities across Nairobi and beyond.",
      image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      content: "Our residential development projects focus on creating high-quality, sustainable living spaces that meet the evolving needs of modern families. We develop everything from luxury apartments in prime locations to affordable housing units, ensuring each project incorporates the latest in design, technology, and environmental sustainability.",
      features: [
        "Luxury apartment developments",
        "Affordable housing projects",
        "Gated community developments",
        "Sustainable building practices",
        "Modern amenities and facilities",
        "Strategic location selection"
      ]
    },
    {
      title: "Property Technology Solutions",
      description: "Innovative technology solutions for modern property management and operations.",
      image: "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      content: "We leverage cutting-edge property technology to streamline operations, enhance tenant experiences, and maximize property value. Our PropTech solutions include digital property management platforms, virtual touring systems, automated maintenance scheduling, and advanced security systems that bring your properties into the digital age.",
      features: [
        "Digital property management platforms",
        "Virtual property tours and showcasing",
        "Automated maintenance and service requests",
        "Smart building and IoT integration",
        "Online rental and sales platforms",
        "Advanced security and access control systems"
      ]
    }
  ];

  const services = [
    {
      title: "Property Valuation",
      description: "Professional property valuation services using modern techniques and market analysis.",
      icon: "📊",
      link: "/services/valuation",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Property Management",
      description: "Comprehensive property management solutions for residential and commercial properties.",
      icon: "🏢",
      link: "/services/management",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Sales & Marketing",
      description: "Expert real estate sales and marketing services to maximize your property value.",
      icon: "💼",
      link: "/services/sales",
      image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  const featuredProperties = [
    {
      id: "1",
      title: "Modern Villa in Karen",
      location: "Karen, Nairobi",
      price: "KSH 45,000,000",
      type: "Villa",
      bedrooms: 5,
      bathrooms: 4,
      size: "350 sqm",
      image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      status: "For Sale" as const,
      description: "Luxurious 5-bedroom villa with modern amenities, swimming pool, and beautiful garden in the prestigious Karen area."
    },
    {
      id: "2",
      title: "Executive Apartment",
      location: "Westlands, Nairobi",
      price: "KSH 180,000/month",
      type: "Apartment",
      bedrooms: 3,
      bathrooms: 2,
      size: "140 sqm",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      status: "For Rent" as const,
      description: "Contemporary 3-bedroom apartment in the heart of Westlands with excellent amenities and city views."
    }
  ];

  const managedProperties = [
    {
      id: "managed-1",
      title: "Nyayo Embakasi Commercial Building",
      location: "Embakasi, Nairobi",
      price: "KSH 1,900,000/month",
      type: "Commercial",
      size: "Large Complex",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      status: "Managed" as const,
      description: "Large commercial building with multiple units generating substantial rental income under professional management."
    },
    {
      id: "managed-2",
      title: "Stima View Apartments",
      location: "Various Locations, Nairobi",
      price: "KSH 1,800,000/month",
      type: "Apartment Complex",
      size: "Multi-unit",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      status: "Managed" as const,
      description: "Premium apartment complex with modern amenities and professional management services."
    }
  ];

  const stats = [
    { icon: Home, value: 500, label: "Properties Managed" },
    { icon: Users, value: 300, label: "Happy Clients" },
    { icon: TrendingUp, value: 95, label: "Success Rate", suffix: "%" },
    { icon: Star, value: 4.9, label: "Client Rating" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80)'
          }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in text-white">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight">
                Your Trusted
                <span className="block text-yellow-400">Real Estate</span>
                Partner in Kenya
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 leading-relaxed">
                Professional property valuation, management, and consultancy services 
                across Nairobi and beyond.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/properties">
                  <Button size="lg" className="bg-blue-600 hover:bg-black text-white transition-colors duration-300 w-full sm:w-auto">
                    Search Properties
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <ValuationCalculator 
                  triggerText="Get Property Valuation"
                  triggerVariant="outline"
                  triggerSize="lg"
                />
              </div>

              <div className="flex items-center space-x-8 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold">23+</div>
                  <div className="text-sm text-gray-200">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">500+</div>
                  <div className="text-sm text-gray-200">Properties</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">300+</div>
                  <div className="text-sm text-gray-200">Happy Clients</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 shadow-2xl">
                <div className="flex items-center space-x-2 mb-4">
                  <CheckCircle className="h-6 w-6 text-green-400" />
                  <span className="font-semibold text-white">Certified Professional Valuers</span>
                </div>
                <div className="flex items-center space-x-2 mb-4">
                  <CheckCircle className="h-6 w-6 text-green-400" />
                  <span className="font-semibold text-white">Licensed Real Estate Agents</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-6 w-6 text-green-400" />
                  <span className="font-semibold text-white">23+ Years Experience</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Information Cards Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary-800 mb-4">
              Our Expertise
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Comprehensive real estate solutions backed by years of experience and industry expertise
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {infoCards.map((card, index) => (
              <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <InfoCard 
                  {...card} 
                  onClick={() => setSelectedInfo(card)}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary-800 mb-4">
              Our Professional Services
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Comprehensive real estate solutions tailored to meet your specific needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <ServiceCard {...service} />
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/services">
              <Button size="lg" className="bg-blue-600 hover:bg-black text-white transition-colors duration-300">
                View All Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary-800 mb-4">
              Featured Properties
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Discover premium properties across Nairobi's most sought-after locations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {featuredProperties.map((property, index) => (
              <div key={property.id} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <PropertyCard {...property} />
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/properties">
              <Button size="lg" className="bg-blue-600 hover:bg-black text-white transition-colors duration-300">
                Browse All Properties
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Managed Properties Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary-800 mb-4">
              Our Managed Properties
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Professional property management services delivering consistent returns
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {managedProperties.map((property, index) => (
              <div key={property.id} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <PropertyCard {...property} />
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/properties/managed">
              <Button size="lg" className="bg-blue-600 hover:bg-black text-white transition-colors duration-300">
                View All Managed Properties
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="bg-white/10 border-white/20 text-center p-6 hover:bg-white/20 transition-colors">
                <CardContent className="p-0">
                  <stat.icon className="h-8 w-8 mx-auto mb-4 text-yellow-400" />
                  <div className="text-3xl font-bold mb-2">
                    <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-blue-100">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-secondary-300 mb-8 max-w-2xl mx-auto">
            Whether you need a property valuation, management services, or expert consultation, 
            we're here to help you make informed real estate decisions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-blue-600 hover:bg-black text-white transition-colors duration-300 w-full sm:w-auto">
                Get a Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-blue-600 hover:border-blue-600 hover:text-white transition-colors duration-300 w-full sm:w-auto">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Info Modal */}
      {selectedInfo && (
        <InfoModal
          isOpen={!!selectedInfo}
          onClose={() => setSelectedInfo(null)}
          {...selectedInfo}
        />
      )}
    </div>
  );
};

export default Index;
