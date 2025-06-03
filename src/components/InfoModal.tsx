
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';

interface InfoModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  image: string;
  content: string;
  features: string[];
}

const InfoModal = ({ isOpen, onClose, title, description, image, content, features }: InfoModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-heading text-secondary-800">{title}</DialogTitle>
          <DialogDescription className="text-secondary-600">
            {description}
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-6">
          <div className="rounded-lg overflow-hidden">
            <img 
              src={image} 
              alt={title}
              className="w-full h-64 object-cover"
            />
          </div>
          
          <div className="prose prose-secondary max-w-none">
            <p className="text-secondary-700 leading-relaxed">{content}</p>
          </div>
          
          <div>
            <h4 className="font-semibold text-secondary-800 mb-3">Key Features:</h4>
            <ul className="space-y-2">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-secondary-600">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="flex space-x-3 pt-4">
            <Button className="flex-1 bg-primary-600 hover:bg-primary-700">
              Get Started
            </Button>
            <Button variant="outline" className="flex-1">
              Contact Us
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default InfoModal;
