
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  link: string;
  image?: string;
}

const ServiceCard = ({ title, description, icon, link, image }: ServiceCardProps) => {
  return (
    <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full relative overflow-hidden">
      {/* Background Image */}
      {image && (
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20 group-hover:opacity-30 transition-opacity"
          style={{ backgroundImage: `url(${image})` }}
        />
      )}
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/90 group-hover:bg-white/85 transition-colors" />
      
      {/* Content */}
      <div className="relative z-10">
        <CardHeader className="pb-4">
          <div className="flex items-center space-x-3 mb-3">
            <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center group-hover:bg-primary-600 transition-colors">
              <span className="text-2xl group-hover:text-white transition-colors">{icon}</span>
            </div>
          </div>
          <CardTitle className="text-xl font-heading text-secondary-800 group-hover:text-primary-600 transition-colors">
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col h-full">
          <CardDescription className="text-secondary-600 mb-6 flex-grow">
            {description}
          </CardDescription>
          <Link to={link}>
            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white transition-all">
              Learn More
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </CardContent>
      </div>
    </Card>
  );
};

export default ServiceCard;
