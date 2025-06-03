
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface InfoCardProps {
  title: string;
  description: string;
  image: string;
  content: string;
  features: string[];
  onClick: () => void;
}

const InfoCard = ({ title, description, image, onClick }: InfoCardProps) => {
  return (
    <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full cursor-pointer" onClick={onClick}>
      <div className="relative overflow-hidden rounded-t-lg">
        <img 
          src={image} 
          alt={title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <CardHeader className="pb-4">
        <CardTitle className="text-xl font-heading text-secondary-800 group-hover:text-primary-600 transition-colors">
          {title}
        </CardTitle>
        <CardDescription className="text-secondary-600">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-0">
        <Button variant="outline" className="w-full group-hover:bg-primary-600 group-hover:text-white group-hover:border-primary-600 transition-all">
          Learn More
          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </Button>
      </CardContent>
    </Card>
  );
};

export default InfoCard;
