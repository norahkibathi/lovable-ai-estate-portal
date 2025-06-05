
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
    <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full">
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
        {image && (
          <div className="mb-4 rounded-lg overflow-hidden">
            <img 
              src={image} 
              alt={title}
              className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        )}
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
    </Card>
  );
};

export default ServiceCard;
