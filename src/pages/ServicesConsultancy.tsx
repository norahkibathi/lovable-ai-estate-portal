
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Lightbulb, TrendingUp, FileSearch, Target } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServicesConsultancy = () => {
  const services = [
    {
      icon: Lightbulb,
      title: "Investment Advisory",
      description: "Strategic investment advice and portfolio optimization"
    },
    {
      icon: TrendingUp,
      title: "Market Analysis",
      description: "Comprehensive market research and trend analysis"
    },
    {
      icon: FileSearch,
      title: "Feasibility Studies",
      description: "Detailed feasibility studies for development projects"
    },
    {
      icon: Target,
      title: "Strategic Planning",
      description: "Long-term real estate strategy development"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Real Estate Consultancy
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-8">
              Strategic real estate consultancy for informed investment decisions.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-white text-primary-600 hover:bg-gray-100">
                Get Expert Advice
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <CardHeader className="pb-4">
                  <service.icon className="h-12 w-12 text-primary-600 mb-4" />
                  <CardTitle className="text-xl text-secondary-800">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-secondary-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesConsultancy;
