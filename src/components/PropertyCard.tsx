import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MapPin, BedDouble, Bath, Square } from 'lucide-react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export interface PropertyCardProps {
  id: string;
  title: string;
  location: string;
  price: string;
  type: string;
  bedrooms?: number;
  bathrooms?: number;
  size?: string;
  image?: string;
  images?: string[];
  video?: string;
  status: 'For Sale' | 'For Rent' | 'Sold' | 'Managed';
  description: string;
  priceValue?: number;
  availableFrom?: string;
}

const PropertyCard = ({
  title,
  location,
  price,
  type,
  bedrooms,
  bathrooms,
  size,
  image,
  images = [],
  video,
  status,
  description,
  availableFrom,
}: PropertyCardProps) => {
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
    ...images
      .filter((img) => img && typeof img === 'string') // Ensure valid image URLs
      .map((img, index) => (
        <div key={`image-${index}`} className="h-48">
          <img
            src={img}
            alt={`${title} - Image ${index + 1}`}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            onError={(e) => {
              console.error(`Failed to load image: ${img}`);
              e.currentTarget.src = 'https://via.placeholder.com/800x600?text=Image+Not+Available';
            }}
          />
        </div>
      )),
    ...(image && images.length === 0 && typeof image === 'string'
      ? [
          <div key="single-image" className="h-48">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              onError={(e) => {
                console.error(`Failed to load image: ${image}`);
                e.currentTarget.src = 'https://via.placeholder.com/800x600?text=Image+Not+Available';
              }}
            />
          </div>,
        ]
      : []),
    ...(video && typeof video === 'string'
      ? [
          <div key="video" className="h-48">
            <video
              src={video}
              controls
              className="w-full h-full object-cover"
              onError={(e) => {
                console.error(`Failed to load video: ${video}`);
                e.currentTarget.style.display = 'none';
                e.currentTarget.insertAdjacentHTML(
                  'afterend',
                  '<img src="https://via.placeholder.com/800x600?text=Video+Not+Available" alt="Video Not Available" class="w-full h-full object-cover" />'
                );
              }}
            >
              Your browser does not support the video tag.
            </video>
          </div>,
        ]
      : []),
  ];

  return (
    <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
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
            className="h-48"
          >
            {carouselContent}
          </Carousel>
        ) : (
          <img
            src="https://via.placeholder.com/800x600?text=No+Media+Available"
            alt={title}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
        )}
        <Badge className={`absolute top-3 left-3 ${getStatusColor(status)}`}>
          {status}
        </Badge>
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-sm font-semibold text-secondary-800">
          {price}
        </div>
      </div>

      <CardHeader className="pb-2">
        <h3 className="font-heading font-semibold text-lg text-secondary-800 group-hover:text-primary-600 transition-colors">
          {title}
        </h3>
        <div className="flex items-center text-secondary-500 text-sm">
          <MapPin className="h-4 w-4 mr-1" />
          {location}
        </div>
      </CardHeader>

      <CardContent className="pt-0">
        <p className="text-secondary-600 text-sm mb-4 line-clamp-2">{description}</p>

        <div className="flex items-center space-x-4 text-sm text-secondary-500 mb-4">
          {bedrooms && (
            <div className="flex items-center">
              <BedDouble className="h-4 w-4 mr-1" />
              {bedrooms} beds
            </div>
          )}
          {bathrooms && (
            <div className="flex items-center">
              <Bath className="h-4 w-4 mr-1" />
              {bathrooms} baths
            </div>
          )}
          {size && (
            <div className="flex items-center">
              <Square className="h-4 w-4 mr-1" />
              {size}
            </div>
          )}
        </div>
        {availableFrom && (
          <p className="text-sm text-secondary-600 mb-2">
            Available from: {new Date(availableFrom).toLocaleDateString()}
          </p>
        )}
        <div className="flex space-x-2">
          <Button 
            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white"
            onClick={() => {
              alert(`View Details for: ${title}`);
            }}
          >
            View Details
          </Button>
          <Button 
            variant="outline" 
            className="flex-1 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
            onClick={() => {
              alert(`Inquiry for: ${title}\nContact us at info@example.com`);
            }}
          >
            Inquire
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default PropertyCard;