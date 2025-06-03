
import ServiceCard from '@/components/ServiceCard';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      title: "Property Valuation",
      description: "Professional property valuation services for residential, commercial, and industrial properties using modern techniques and comprehensive market analysis.",
      icon: "📊",
      link: "/services/valuation",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Property Management",
      description: "Comprehensive property management solutions including tenant management, maintenance coordination, rent collection, and property optimization.",
      icon: "🏢",
      link: "/services/management",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Sales & Marketing",
      description: "Expert real estate sales and marketing services to maximize your property value through strategic positioning and targeted marketing campaigns.",
      icon: "💼",
      link: "/services/sales",
      image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Construction Management",
      description: "End-to-end construction project management from planning and design to execution and delivery, ensuring quality and timely completion.",
      icon: "🏗️",
      link: "/services/construction",
      image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Real Estate Consultancy",
      description: "Strategic real estate consultancy services including investment advice, market analysis, feasibility studies, and portfolio optimization.",
      icon: "💡",
      link: "/services/consultancy",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  const benefits = [
    "Certified and Licensed Professionals",
    "Comprehensive Market Knowledge",
    "Technology-Driven Solutions",
    "Transparent Pricing",
    "24/7 Client Support",
    "Quick Turnaround Times",
    "Customized Service Packages",
    "Post-Service Support"
  ];

  const process = [
    {
      step: "1",
      title: "Initial Consultation",
      description: "We discuss your requirements and provide expert advice on the best approach."
    },
    {
      step: "2",
      title: "Proposal & Agreement",
      description: "Detailed proposal with scope, timeline, and transparent pricing structure."
    },
    {
      step: "3",
      title: "Service Delivery",
      description: "Professional execution of services with regular updates and quality assurance."
    },
    {
      step: "4",
      title: "Final Report & Support",
      description: "Comprehensive reporting and ongoing support for your real estate needs."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Professional Real Estate Services
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-8">
              Comprehensive real estate solutions tailored to meet your specific needs 
              with professionalism and expertise you can trust.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-white text-primary-600 hover:bg-gray-100">
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary-800 mb-4">
              Our Core Services
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              From property valuation to construction management, we offer a complete range 
              of professional real estate services.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <ServiceCard {...service} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary-800 mb-6">
                Why Choose EMM Consult?
              </h2>
              <p className="text-secondary-600 text-lg mb-8 leading-relaxed">
                With over 15 years of combined experience in the Kenyan real estate market, 
                we bring unmatched expertise and professionalism to every project.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary-600 flex-shrink-0" />
                    <span className="text-secondary-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Professional team"
                className="rounded-2xl shadow-xl w-full h-[500px] object-cover"
              />
              <Card className="absolute -bottom-6 -left-6 bg-white p-6 shadow-xl max-w-xs">
                <CardContent className="p-0">
                  <div className="text-2xl font-bold text-primary-600 mb-1">500+</div>
                  <div className="text-sm text-secondary-600">Properties Successfully Managed</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary-800 mb-4">
              Our Service Process
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              A streamlined approach that ensures quality delivery and client satisfaction
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {item.step}
                  </div>
                  <CardTitle className="text-lg font-heading text-secondary-800">
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-secondary-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Ready to Experience Professional Service?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and discover how we can help 
            you achieve your real estate goals.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-white text-primary-600 hover:bg-gray-100 w-full sm:w-auto">
                Get Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/properties">
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-primary-600 w-full sm:w-auto">
                View Our Work
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
