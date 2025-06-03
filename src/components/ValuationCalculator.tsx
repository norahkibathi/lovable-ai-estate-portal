
import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Calculator } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface ValuationCalculatorProps {
  triggerText?: string;
  triggerVariant?: 'default' | 'outline' | 'ghost';
  triggerSize?: 'sm' | 'default' | 'lg';
}

const ValuationCalculator = ({ 
  triggerText = "Calculate Property Value", 
  triggerVariant = "default",
  triggerSize = "default"
}: ValuationCalculatorProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [wantsValuation, setWantsValuation] = useState<boolean | null>(null);
  const [formData, setFormData] = useState({
    propertyType: '',
    location: '',
    size: '',
    bedrooms: '',
    bathrooms: '',
    features: [] as string[],
    email: ''
  });
  const [result, setResult] = useState<{ min: number; max: number } | null>(null);
  const { toast } = useToast();

  const propertyTypes = [
    'Apartment/Flat',
    'House/Bungalow',
    'Townhouse',
    'Villa',
    'Commercial Building',
    'Land/Plot',
    'Warehouse',
    'Office Space'
  ];

  const locations = [
    'Nairobi CBD',
    'Westlands',
    'Karen',
    'Runda',
    'Muthaiga',
    'Lavington',
    'Kilimani',
    'Parklands',
    'South C',
    'South B',
    'Kileleshwa',
    'Riverside'
  ];

  const features = [
    'Swimming Pool',
    'Garden',
    'Parking',
    'Security',
    'Generator',
    'Borehole',
    'Modern Kitchen',
    'Balcony/Terrace',
    'Gym/Fitness Center',
    'CCTV'
  ];

  const calculateValue = () => {
    if (!formData.propertyType || !formData.location || !formData.size) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields to calculate property value.",
        variant: "destructive"
      });
      return;
    }

    // Basic calculation logic (can be enhanced with real market data)
    let baseValue = 0;
    const sizeNum = parseInt(formData.size);

    // Base value by property type
    switch (formData.propertyType) {
      case 'Apartment/Flat':
        baseValue = 8000000;
        break;
      case 'House/Bungalow':
        baseValue = 15000000;
        break;
      case 'Townhouse':
        baseValue = 12000000;
        break;
      case 'Villa':
        baseValue = 25000000;
        break;
      case 'Commercial Building':
        baseValue = 30000000;
        break;
      case 'Land/Plot':
        baseValue = 500000;
        break;
      default:
        baseValue = 10000000;
    }

    // Location multiplier
    let locationMultiplier = 1;
    switch (formData.location) {
      case 'Nairobi CBD':
      case 'Westlands':
        locationMultiplier = 1.5;
        break;
      case 'Karen':
      case 'Runda':
      case 'Muthaiga':
        locationMultiplier = 2;
        break;
      case 'Lavington':
      case 'Kilimani':
        locationMultiplier = 1.3;
        break;
      default:
        locationMultiplier = 1;
    }

    // Size adjustment
    const sizeAdjustment = sizeNum / 100;
    
    // Features bonus
    const featuresBonus = formData.features.length * 0.05;

    const calculatedValue = baseValue * locationMultiplier * sizeAdjustment * (1 + featuresBonus);
    
    setResult({
      min: Math.round(calculatedValue * 0.9),
      max: Math.round(calculatedValue * 1.1)
    });
  };

  const handleFeatureChange = (feature: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      features: checked 
        ? [...prev.features, feature]
        : prev.features.filter(f => f !== feature)
    }));
  };

  const sendToEmail = () => {
    if (!formData.email) {
      toast({
        title: "Email Required",
        description: "Please enter your email address to receive the valuation.",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Valuation Sent!",
      description: "The property valuation has been sent to your email address."
    });
    
    // Here you would typically send the data to your backend
    console.log('Sending valuation to:', formData.email, result);
  };

  const resetForm = () => {
    setWantsValuation(null);
    setFormData({
      propertyType: '',
      location: '',
      size: '',
      bedrooms: '',
      bathrooms: '',
      features: [],
      email: ''
    });
    setResult(null);
  };

  const handleOpenChange = (open: boolean) => {
    setIsOpen(open);
    if (!open) {
      resetForm();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <Button 
          variant={triggerVariant} 
          size={triggerSize}
          className="bg-primary-600 hover:bg-primary-700"
        >
          <Calculator className="mr-2 h-4 w-4" />
          {triggerText}
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-heading text-2xl text-center">
            Property Valuation Service
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          {wantsValuation === null && (
            <div className="text-center space-y-6">
              <div className="bg-primary-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-primary-800 mb-4">
                  Do you want your property to be valued?
                </h3>
                <p className="text-secondary-600 mb-6">
                  Get a professional property valuation from our certified experts or use our quick estimation tool.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    onClick={() => setWantsValuation(true)}
                    className="bg-primary-600 hover:bg-primary-700"
                  >
                    Yes, Get Professional Valuation
                  </Button>
                  <Button 
                    variant="outline"
                    onClick={() => setWantsValuation(false)}
                    className="hover:bg-primary-600 hover:text-white"
                  >
                    Quick Estimation Only
                  </Button>
                </div>
              </div>
            </div>
          )}

          {wantsValuation === true && (
            <div className="text-center space-y-4">
              <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                <h3 className="text-xl font-semibold text-green-800 mb-4">
                  Professional Valuation Service
                </h3>
                <p className="text-green-700 mb-4">
                  Our certified property valuers will conduct a comprehensive assessment of your property. 
                  This includes physical inspection, market analysis, and detailed valuation report.
                </p>
                <div className="space-y-2 text-sm text-green-600 mb-6">
                  <p>✓ Certified property valuation report</p>
                  <p>✓ Physical property inspection</p>
                  <p>✓ Comprehensive market analysis</p>
                  <p>✓ Legal compliance documentation</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button className="bg-green-600 hover:bg-green-700">
                    Schedule Professional Valuation
                  </Button>
                  <Button variant="outline" onClick={() => setWantsValuation(false)}>
                    Use Quick Estimator Instead
                  </Button>
                </div>
              </div>
            </div>
          )}

          {wantsValuation === false && (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="propertyType">Property Type *</Label>
                  <Select value={formData.propertyType} onValueChange={(value) => setFormData(prev => ({ ...prev, propertyType: value }))}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select property type" />
                    </SelectTrigger>
                    <SelectContent>
                      {propertyTypes.map(type => (
                        <SelectItem key={type} value={type}>{type}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <Label htmlFor="location">Location *</Label>
                  <Select value={formData.location} onValueChange={(value) => setFormData(prev => ({ ...prev, location: value }))}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select location" />
                    </SelectTrigger>
                    <SelectContent>
                      {locations.map(location => (
                        <SelectItem key={location} value={location}>{location}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <Label htmlFor="size">Size (sq ft) *</Label>
                  <Input
                    id="size"
                    type="number"
                    placeholder="e.g. 1200"
                    value={formData.size}
                    onChange={(e) => setFormData(prev => ({ ...prev, size: e.target.value }))}
                  />
                </div>
                
                <div>
                  <Label htmlFor="bedrooms">Bedrooms</Label>
                  <Input
                    id="bedrooms"
                    type="number"
                    placeholder="e.g. 3"
                    value={formData.bedrooms}
                    onChange={(e) => setFormData(prev => ({ ...prev, bedrooms: e.target.value }))}
                  />
                </div>
                
                <div>
                  <Label htmlFor="bathrooms">Bathrooms</Label>
                  <Input
                    id="bathrooms"
                    type="number"
                    placeholder="e.g. 2"
                    value={formData.bathrooms}
                    onChange={(e) => setFormData(prev => ({ ...prev, bathrooms: e.target.value }))}
                  />
                </div>
              </div>

              <div>
                <Label>Property Features</Label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-2">
                  {features.map(feature => (
                    <div key={feature} className="flex items-center space-x-2">
                      <Checkbox
                        id={feature}
                        checked={formData.features.includes(feature)}
                        onCheckedChange={(checked) => handleFeatureChange(feature, checked as boolean)}
                      />
                      <Label htmlFor={feature} className="text-sm">{feature}</Label>
                    </div>
                  ))}
                </div>
              </div>

              {result && (
                <div className="bg-primary-50 p-6 rounded-lg border border-primary-200">
                  <h3 className="font-heading font-semibold text-lg mb-3 text-primary-800">
                    Estimated Property Value
                  </h3>
                  <div className="text-center">
                    <p className="text-3xl font-bold text-primary-600 mb-2">
                      KSH {result.min.toLocaleString()} - KSH {result.max.toLocaleString()}
                    </p>
                    <p className="text-sm text-secondary-600 mb-4">
                      *This is an estimated range based on current market conditions
                    </p>
                    <p className="text-xs text-secondary-500 bg-yellow-50 p-2 rounded border border-yellow-200">
                      Note: This is a rough estimate. For accurate valuation, please opt for our professional valuation service.
                    </p>
                  </div>
                  
                  <div className="mt-4">
                    <Label htmlFor="email">Email Address (to receive detailed report)</Label>
                    <div className="flex space-x-2 mt-1">
                      <Input
                        id="email"
                        type="email"
                        placeholder="your.email@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                        className="flex-1"
                      />
                      <Button onClick={sendToEmail} variant="outline">
                        Send Report
                      </Button>
                    </div>
                  </div>
                  
                  <div className="flex space-x-2 mt-4">
                    <Button 
                      className="flex-1 bg-primary-600 hover:bg-primary-700"
                      onClick={() => setWantsValuation(true)}
                    >
                      Get Professional Valuation
                    </Button>
                    <Button variant="outline" onClick={resetForm} className="flex-1">
                      Calculate Another
                    </Button>
                  </div>
                </div>
              )}

              {!result && (
                <div className="flex justify-center">
                  <Button onClick={calculateValue} className="bg-primary-600 hover:bg-primary-700 px-8">
                    Calculate Estimate
                  </Button>
                </div>
              )}
            </>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ValuationCalculator;
