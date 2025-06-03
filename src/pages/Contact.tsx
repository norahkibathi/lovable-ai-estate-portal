
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();

  const services = [
    'Property Valuation',
    'Property Management',
    'Sales & Marketing',
    'Construction Management',
    'Real Estate Consultancy',
    'General Inquiry'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    
    toast({
      title: "Message Sent Successfully!",
      description: "We'll get back to you within 24 hours."
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      subject: '',
      message: ''
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Get In Touch
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Ready to discuss your real estate needs? Contact our expert team today 
              for professional advice and personalized solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-16 -mt-8 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="text-center p-6 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="font-heading font-semibold text-lg text-secondary-800 mb-2">
                  Call Us
                </h3>
                <p className="text-secondary-600 mb-2">
                  Speak directly with our experts
                </p>
                <p className="text-primary-600 font-semibold">
                  +254 733-448331
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="font-heading font-semibold text-lg text-secondary-800 mb-2">
                  Email Us
                </h3>
                <p className="text-secondary-600 mb-2">
                  Send us your inquiries
                </p>
                <p className="text-primary-600 font-semibold">
                  info@emmconsult.com
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="font-heading font-semibold text-lg text-secondary-800 mb-2">
                  Visit Us
                </h3>
                <p className="text-secondary-600 mb-2">
                  Come to our office
                </p>
                <p className="text-primary-600 font-semibold">
                  Nairobi, Kenya
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-heading font-bold text-secondary-800 mb-6">
                Send Us a Message
              </h2>
              <p className="text-secondary-600 mb-8">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      placeholder="+254 xxx-xxxxxx"
                    />
                  </div>
                  <div>
                    <Label htmlFor="service">Service Required</Label>
                    <Select value={formData.service} onValueChange={(value) => handleInputChange('service', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        {services.map(service => (
                          <SelectItem key={service} value={service}>
                            {service}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => handleInputChange('subject', e.target.value)}
                    placeholder="Brief description of your inquiry"
                  />
                </div>

                <div>
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    placeholder="Please provide details about your requirements..."
                    rows={6}
                    required
                  />
                </div>

                <Button type="submit" size="lg" className="w-full bg-primary-600 hover:bg-primary-700">
                  <Send className="mr-2 h-5 w-5" />
                  Send Message
                </Button>
              </form>
            </div>

            {/* Additional Information */}
            <div className="space-y-8">
              {/* Office Hours */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Clock className="mr-2 h-5 w-5 text-primary-600" />
                    Office Hours
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-secondary-600">
                    <div className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span className="font-semibold">8:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday</span>
                      <span className="font-semibold">9:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday</span>
                      <span className="font-semibold">Closed</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Why Choose Us */}
              <Card>
                <CardHeader>
                  <CardTitle>Why Choose EMM Consult?</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-secondary-600">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Fast response time - within 24 hours
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Certified and licensed professionals
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Comprehensive service offerings
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Transparent and competitive pricing
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Ongoing support and consultation
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Emergency Contact */}
              <Card className="bg-primary-50 border-primary-200">
                <CardHeader>
                  <CardTitle className="text-primary-800">Emergency Contact</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-primary-700 mb-3">
                    For urgent property management issues or emergencies:
                  </p>
                  <p className="text-primary-800 font-semibold text-lg">
                    +254 733-448331
                  </p>
                  <p className="text-primary-600 text-sm mt-1">
                    Available 24/7 for managed properties
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-secondary-800 mb-4">
              Find Us
            </h2>
            <p className="text-secondary-600">
              Located in the heart of Nairobi, easily accessible by all major routes
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="aspect-video bg-gray-200 flex items-center justify-center">
              <div className="text-center text-secondary-500">
                <MapPin className="h-12 w-12 mx-auto mb-4" />
                <p className="text-lg font-semibold">Interactive Map</p>
                <p className="text-sm">Nairobi, Kenya Office Location</p>
                <p className="text-xs mt-2">Map integration available with Google Maps API</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
