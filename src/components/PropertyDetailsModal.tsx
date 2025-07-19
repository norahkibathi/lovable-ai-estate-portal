import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MapPin, BedDouble, Bath, Square, Calendar, Phone, Mail } from 'lucide-react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { PropertyCardProps } from './PropertyCard';

interface PropertyDetailsModalProps {
  property: PropertyCardProps | null;
  isOpen: boolean;
  onClose: () => void;
}

const PropertyDetailsModal = ({ property, isOpen, onClose }: PropertyDetailsModalProps) => {
  if (!property) return null;

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'For Sale':
        return 'bg-green-100 text-green-800';
      case 'For Rent':
        return 'bg-blue-100 text-blue-800';
      case 'Sold':
        return 'bg-gray-100 text-gray-800';
      case 'Managed':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const carouselContent: JSX.Element[] = [
    ...property.images
      ?.filter((img) => img && typeof img === 'string')
      .map((img, index) => (
        <div key={`image-${index}`} className="h-64">
          <img
            src={img}
            alt={`${property.title} - Image ${index + 1}`}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.src = 'https://via.placeholder.com/800x600?text=Image+Not+Available';
            }}
          />
        </div>
      )) || [],
    ...(property.image && (!property.images || property.images.length === 0) && typeof property.image === 'string'
      ? [
          <div key="single-image" className="h-64">
            <img
              src={property.image}
              alt={property.title}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.src = 'https://via.placeholder.com/800x600?text=Image+Not+Available';
              }}
            />
          </div>,
        ]
      : []),
    ...(property.video && typeof property.video === 'string'
      ? [
          <div key="video" className="h-64">
            <video
              src={property.video}
              controls
              className="w-full h-full object-cover"
              onError={(e) => {
                console.error(`Failed to load video: ${property.video}`);
                e.currentTarget.style.display = 'none';
              }}
            >
              Your browser does not support the video tag.
            </video>
          </div>,
        ]
      : []),
  ];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-heading font-bold text-secondary-800">
            {property.title}
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Image/Video Carousel */}
          <div className="relative">
            {carouselContent.length > 0 ? (
              <Carousel
                showThumbs={false}
                showStatus={false}
                infiniteLoop
                autoPlay
                interval={5000}
                showArrows={true}
                showIndicators={true}
              >
                {carouselContent}
              </Carousel>
            ) : (
              <img
                src="https://via.placeholder.com/800x400?text=No+Media+Available"
                alt={property.title}
                className="w-full h-64 object-cover rounded-lg"
              />
            )}
            <Badge className={`absolute top-3 left-3 ${getStatusColor(property.status)}`}>
              {property.status}
            </Badge>
            <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-2 rounded text-lg font-semibold text-secondary-800">
              {property.price}
            </div>
          </div>

          {/* Property Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left Column */}
            <div className="space-y-4">
              <div className="flex items-center text-secondary-600">
                <MapPin className="h-5 w-5 mr-2" />
                <span className="text-lg">{property.location}</span>
              </div>
              
              <div className="flex items-center space-x-6 text-secondary-600">
                {property.bedrooms && (
                  <div className="flex items-center">
                    <BedDouble className="h-5 w-5 mr-2" />
                    <span>{property.bedrooms} beds</span>
                  </div>
                )}
                {property.bathrooms && (
                  <div className="flex items-center">
                    <Bath className="h-5 w-5 mr-2" />
                    <span>{property.bathrooms} baths</span>
                  </div>
                )}
                {property.size && (
                  <div className="flex items-center">
                    <Square className="h-5 w-5 mr-2" />
                    <span>{property.size}</span>
                  </div>
                )}
              </div>

              {property.availableFrom && (
                <div className="flex items-center text-secondary-600">
                  <Calendar className="h-5 w-5 mr-2" />
                  <span>Available from: {new Date(property.availableFrom).toLocaleDateString()}</span>
                </div>
              )}

              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-secondary-800 mb-2">Property Type</h4>
                <p className="text-secondary-600">{property.type}</p>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-secondary-800 mb-2">Description</h4>
                <p className="text-secondary-600 whitespace-pre-line">{property.description}</p>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg">
            <h4 className="font-semibold text-secondary-800 mb-4 text-lg">Interested in this property?</h4>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white"
                onClick={() => {
                  window.open(`tel:+254123456789`, '_self');
                }}
              >
                <Phone className="h-4 w-4 mr-2" />
                Call Now
              </Button>
              <Button 
                variant="outline" 
                className="flex-1 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
                onClick={() => {
                  window.open(`mailto:info@example.com?subject=Inquiry about ${property.title}&body=I am interested in learning more about this property: ${property.title} located in ${property.location}.`, '_self');
                }}
              >
                <Mail className="h-4 w-4 mr-2" />
                Email Inquiry
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PropertyDetailsModal;