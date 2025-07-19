import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { MapPin, BedDouble, Bath, Square, Phone, Mail, MessageCircle } from 'lucide-react';
import { PropertyCardProps } from './PropertyCard';
import { useState } from 'react';

interface InquireModalProps {
  property: PropertyCardProps | null;
  isOpen: boolean;
  onClose: () => void;
}

const InquireModal = ({ property, isOpen, onClose }: InquireModalProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create email with all the details
    const subject = `Property Inquiry: ${property.title}`;
    const body = `
Property Details:
- Title: ${property.title}
- Location: ${property.location}
- Price: ${property.price}
- Type: ${property.type}
- Bedrooms: ${property.bedrooms || 'N/A'}
- Bathrooms: ${property.bathrooms || 'N/A'}
- Size: ${property.size || 'N/A'}
- Status: ${property.status}
${property.availableFrom ? `- Available From: ${new Date(property.availableFrom).toLocaleDateString()}` : ''}

Client Information:
- Name: ${formData.name}
- Email: ${formData.email}
- Phone: ${formData.phone}

Message:
${formData.message}

Property Description:
${property.description}
    `;
    
    window.open(`mailto:info@example.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`, '_self');
    
    // Reset form
    setFormData({ name: '', email: '', phone: '', message: '' });
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-heading font-bold text-secondary-800">
            Inquire About Property
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Property Summary */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="flex justify-between items-start mb-3">
              <h3 className="text-lg font-semibold text-secondary-800">{property.title}</h3>
              <Badge className={getStatusColor(property.status)}>
                {property.status}
              </Badge>
            </div>
            
            <div className="flex items-center text-secondary-600 mb-2">
              <MapPin className="h-4 w-4 mr-2" />
              <span>{property.location}</span>
            </div>
            
            <div className="flex items-center space-x-4 text-sm text-secondary-600 mb-3">
              {property.bedrooms && (
                <div className="flex items-center">
                  <BedDouble className="h-4 w-4 mr-1" />
                  {property.bedrooms} beds
                </div>
              )}
              {property.bathrooms && (
                <div className="flex items-center">
                  <Bath className="h-4 w-4 mr-1" />
                  {property.bathrooms} baths
                </div>
              )}
              {property.size && (
                <div className="flex items-center">
                  <Square className="h-4 w-4 mr-1" />
                  {property.size}
                </div>
              )}
            </div>
            
            <div className="text-lg font-semibold text-blue-600">{property.price}</div>
            
            {property.availableFrom && (
              <div className="text-sm text-secondary-600 mt-2">
                Available from: {new Date(property.availableFrom).toLocaleDateString()}
              </div>
            )}
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="name">Full Name *</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  placeholder="Enter your full name"
                  required
                />
              </div>
              <div>
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>
            
            <div>
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                placeholder="Enter your phone number"
              />
            </div>
            
            <div>
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                placeholder="Tell us about your requirements, preferred viewing time, or any questions you have..."
                rows={4}
              />
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <Button 
                type="submit"
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white"
              >
                <Mail className="h-4 w-4 mr-2" />
                Send Inquiry
              </Button>
              <Button 
                type="button"
                variant="outline" 
                className="flex-1 border-green-600 text-green-600 hover:bg-green-600 hover:text-white"
                onClick={() => {
                  window.open(`https://wa.me/254123456789?text=Hi, I'm interested in the property: ${property.title} located in ${property.location}. Price: ${property.price}`, '_blank');
                }}
              >
                <MessageCircle className="h-4 w-4 mr-2" />
                WhatsApp
              </Button>
              <Button 
                type="button"
                variant="outline" 
                className="flex-1 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
                onClick={() => {
                  window.open(`tel:+254123456789`, '_self');
                }}
              >
                <Phone className="h-4 w-4 mr-2" />
                Call Now
              </Button>
            </div>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default InquireModal;