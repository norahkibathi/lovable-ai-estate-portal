
import ValuationCalculator from '@/components/ValuationCalculator';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Calculator, FileText, TrendingUp, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServicesValuation = () => {
  const valuationTypes = [
    {
      title: "Residential Valuation",
      description: "Comprehensive valuation for houses, apartments, and residential developments",
      features: ["Market analysis", "Comparative assessments", "Detailed reporting"],
      price: "Starting from KSH 15,000"
    },
    {
      title: "Commercial Valuation",
      description: "Professional valuation for office buildings, retail spaces, and industrial properties",
      features: ["Income approach analysis", "Cost approach evaluation", "Market comparison"],
      price: "Starting from KSH 30,000"
    },
    {
      title: "Land Valuation",
      description: "Accurate land valuation for development, investment, or transaction purposes",
      features: ["Zoning analysis", "Development potential", "Market positioning"],
      price: "Starting from KSH 20,000"
    },
    {
      title: "Investment Valuation",
      description: "Specialized valuation for investment properties and portfolios",
      features: ["ROI analysis", "Cash flow projections", "Risk assessment"],
      price: "Starting from KSH 25,000"
    }
  ];

  const process = [
    {
      step: 1,
      title: "Initial Consultation",
      description: "Discuss your valuation requirements and property details"
    },
    {
      step: 2,
      title: "Property Inspection",
      description: "Comprehensive on-site inspection and data collection"
    },
    {
      step: 3,
      title: "Market Analysis",
      description: "Detailed market research and comparable property analysis"
    },
    {
      step: 4,
      title: "Valuation Report",
      description: "Professional report with detailed findings and recommendations"
    }
  ];

  const benefits = [
    "Certified professional valuers",
    "Comprehensive market analysis",
    "Quick turnaround time",
    "Detailed written reports",
    "Bank and court acceptable",
    "Insurance and mortgage approved",
    "Investment decision support",
    "Legal compliance assurance"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                Professional Property Valuation Services
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                Accurate, reliable property valuations for residential, commercial, 
                and investment properties across Kenya.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <ValuationCalculator 
                  triggerText="Get Instant Estimate"
                  triggerVariant="outline"
                  triggerSize="lg"
                />
                <Link to="/contact">
                  <Button size="lg" className="bg-white text-primary-600 hover:bg-gray-100 w-full sm:w-auto">
                    Request Formal Valuation
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Property valuation"
                className="rounded-2xl shadow-2xl w-full h-[400px] object-cover"
              />
              <Card className="absolute -bottom-6 -left-6 bg-white p-6 shadow-xl">
                <CardContent className="p-0">
                  <div className="flex items-center space-x-3">
                    <Shield className="h-8 w-8 text-green-500" />
                    <div>
                      <div className="font-semibold text-secondary-800">Certified Valuers</div>
                      <div className="text-sm text-secondary-600">Licensed by ISK</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Calculator Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <Calculator className="h-16 w-16 text-primary-600 mx-auto mb-6" />
            <h2 className="text-3xl font-heading font-bold text-secondary-800 mb-4">
              Get an Instant Property Estimate
            </h2>
            <p className="text-secondary-600 mb-8 max-w-2xl mx-auto">
              Use our advanced calculator to get an immediate estimate of your property value. 
              Based on current market data and property characteristics.
            </p>
            <ValuationCalculator 
              triggerText="Calculate Property Value Now"
              triggerSize="lg"
            />
          </div>
        </div>
      </section>

      {/* Valuation Types */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary-800 mb-4">
              Our Valuation Services
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Comprehensive valuation services tailored to different property types and purposes
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {valuationTypes.map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl font-heading text-secondary-800">
                    {service.title}
                  </CardTitle>
                  <Badge className="w-fit bg-primary-100 text-primary-800">
                    {service.price}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-secondary-600 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary-800 mb-4">
              Our Valuation Process
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              A systematic approach ensuring accurate and reliable property valuations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-heading font-semibold text-secondary-800 mb-3">
                  {item.title}
                </h3>
                <p className="text-secondary-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary-800 mb-6">
                Why Choose Our Valuation Services?
              </h2>
              <p className="text-secondary-600 text-lg mb-8 leading-relaxed">
                Our certified valuers combine extensive market knowledge with modern valuation 
                techniques to provide accurate, reliable property assessments.
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
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Professional valuation"
                className="rounded-2xl shadow-xl w-full h-[500px] object-cover"
              />
              <Card className="absolute -bottom-6 -right-6 bg-white p-6 shadow-xl">
                <CardContent className="p-0">
                  <div className="flex items-center space-x-3">
                    <TrendingUp className="h-8 w-8 text-primary-600" />
                    <div>
                      <div className="font-semibold text-secondary-800">500+</div>
                      <div className="text-sm text-secondary-600">Properties Valued</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Report Sample Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary-800 mb-4">
              Sample Valuation Report
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Our comprehensive reports provide detailed analysis and professional recommendations
            </p>
          </div>
          
          <Card className="max-w-4xl mx-auto p-8">
            <CardContent className="p-0">
              <div className="flex items-center space-x-4 mb-6">
                <FileText className="h-12 w-12 text-primary-600" />
                <div>
                  <h3 className="text-xl font-heading font-semibold text-secondary-800">
                    Professional Valuation Report
                  </h3>
                  <p className="text-secondary-600">Comprehensive property assessment document</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-secondary-800 mb-3">Report Includes:</h4>
                  <ul className="space-y-2 text-sm text-secondary-600">
                    <li>• Executive summary</li>
                    <li>• Property description</li>
                    <li>• Market analysis</li>
                    <li>• Valuation methodology</li>
                    <li>• Comparable sales</li>
                    <li>• Final valuation figure</li>
                    <li>• Supporting photographs</li>
                    <li>• Professional recommendations</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-secondary-800 mb-3">Report Features:</h4>
                  <ul className="space-y-2 text-sm text-secondary-600">
                    <li>• Bank and court acceptable</li>
                    <li>• Insurance approved format</li>
                    <li>• Mortgage lender recognized</li>
                    <li>• Legal compliance assured</li>
                    <li>• Digital and hard copy</li>
                    <li>• Quick turnaround (3-5 days)</li>
                    <li>• Professional certification</li>
                    <li>• Post-report consultation</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Ready for a Professional Valuation?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Get started with our instant calculator or contact us for a formal valuation. 
            Our certified valuers are ready to assist you.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ValuationCalculator 
              triggerText="Try Calculator First"
              triggerVariant="outline"
              triggerSize="lg"
            />
            <Link to="/contact">
              <Button size="lg" className="bg-white text-primary-600 hover:bg-gray-100 w-full sm:w-auto">
                Request Formal Valuation
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesValuation;
