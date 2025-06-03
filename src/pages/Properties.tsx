
import { useState, useMemo } from 'react';
import PropertyCard from '@/components/PropertyCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Search, Filter, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Properties = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('all');
  const [selectedType, setSelectedType] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [priceRange, setPriceRange] = useState('all');

  // Mock property data - in real app this would come from API
  const properties = [
    {
      id: "1",
      title: "Modern Villa in Karen",
      location: "Karen, Nairobi",
      price: "KSH 45,000,000",
      type: "Villa",
      bedrooms: 5,
      bathrooms: 4,
      size: "350 sqm",
      image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      status: "For Sale" as const,
      description: "Luxurious 5-bedroom villa with modern amenities, swimming pool, and beautiful garden.",
      priceValue: 45000000
    },
    {
      id: "2",
      title: "Executive Apartment",
      location: "Westlands, Nairobi",
      price: "KSH 180,000/month",
      type: "Apartment",
      bedrooms: 3,
      bathrooms: 2,
      size: "140 sqm",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      status: "For Rent" as const,
      description: "Contemporary 3-bedroom apartment in the heart of Westlands with excellent amenities.",
      priceValue: 180000
    },
    {
      id: "3",
      title: "Commercial Building",
      location: "CBD, Nairobi",
      price: "KSH 120,000,000",
      type: "Commercial",
      size: "800 sqm",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      status: "For Sale" as const,
      description: "Prime commercial building in Nairobi CBD perfect for office spaces.",
      priceValue: 120000000
    },
    {
      id: "4",
      title: "Family Townhouse",
      location: "Lavington, Nairobi",
      price: "KSH 35,000,000",
      type: "Townhouse",
      bedrooms: 4,
      bathrooms: 3,
      size: "250 sqm",
      image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      status: "For Sale" as const,
      description: "Spacious 4-bedroom townhouse in the serene Lavington area.",
      priceValue: 35000000
    },
    {
      id: "5",
      title: "Luxury Apartment",
      location: "Kilimani, Nairobi",
      price: "KSH 150,000/month",
      type: "Apartment",
      bedrooms: 2,
      bathrooms: 2,
      size: "120 sqm",
      image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      status: "For Rent" as const,
      description: "Modern 2-bedroom apartment with stunning city views.",
      priceValue: 150000
    },
    {
      id: "6",
      title: "Managed Office Complex",
      location: "Westlands, Nairobi",
      price: "KSH 95,000,000",
      type: "Commercial",
      size: "600 sqm",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      status: "Managed" as const,
      description: "Well-maintained office complex with full management services.",
      priceValue: 95000000
    }
  ];

  const locations = ['all', 'Karen', 'Westlands', 'CBD', 'Lavington', 'Kilimani', 'Parklands', 'Runda'];
  const propertyTypes = ['all', 'Villa', 'Apartment', 'Townhouse', 'Commercial', 'Land'];
  const statusOptions = ['all', 'For Sale', 'For Rent', 'Sold', 'Managed'];
  const priceRanges = [
    { value: 'all', label: 'All Prices' },
    { value: '0-10000000', label: 'Under 10M' },
    { value: '10000000-30000000', label: '10M - 30M' },
    { value: '30000000-50000000', label: '30M - 50M' },
    { value: '50000000-100000000', label: '50M - 100M' },
    { value: '100000000+', label: 'Above 100M' }
  ];

  const filteredProperties = useMemo(() => {
    return properties.filter(property => {
      // Search term filter
      const matchesSearch = searchTerm === '' || 
        property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        property.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
        property.description.toLowerCase().includes(searchTerm.toLowerCase());

      // Location filter
      const matchesLocation = selectedLocation === 'all' || 
        property.location.toLowerCase().includes(selectedLocation.toLowerCase());

      // Type filter
      const matchesType = selectedType === 'all' || property.type === selectedType;

      // Status filter
      const matchesStatus = selectedStatus === 'all' || property.status === selectedStatus;

      // Price range filter
      let matchesPrice = true;
      if (priceRange !== 'all') {
        const price = property.priceValue;
        switch (priceRange) {
          case '0-10000000':
            matchesPrice = price < 10000000;
            break;
          case '10000000-30000000':
            matchesPrice = price >= 10000000 && price <= 30000000;
            break;
          case '30000000-50000000':
            matchesPrice = price >= 30000000 && price <= 50000000;
            break;
          case '50000000-100000000':
            matchesPrice = price >= 50000000 && price <= 100000000;
            break;
          case '100000000+':
            matchesPrice = price > 100000000;
            break;
        }
      }

      return matchesSearch && matchesLocation && matchesType && matchesStatus && matchesPrice;
    });
  }, [searchTerm, selectedLocation, selectedType, selectedStatus, priceRange, properties]);

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedLocation('all');
    setSelectedType('all');
    setSelectedStatus('all');
    setPriceRange('all');
  };

  const activeFiltersCount = [selectedLocation, selectedType, selectedStatus, priceRange].filter(f => f !== 'all').length + (searchTerm ? 1 : 0);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Find Your Perfect Property
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-8">
              Discover premium properties across Nairobi's most sought-after locations
            </p>
            
            {/* Quick Navigation */}
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <Link to="/properties/showcase">
                <Button variant="outline" className="text-white border-white hover:bg-white hover:text-primary-600">
                  Showcase Properties
                </Button>
              </Link>
              <Link to="/properties/current">
                <Button variant="outline" className="text-white border-white hover:bg-white hover:text-primary-600">
                  Current Listings
                </Button>
              </Link>
              <Link to="/properties/managed">
                <Button variant="outline" className="text-white border-white hover:bg-white hover:text-primary-600">
                  Managed Properties
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-white border-b border-gray-200 sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="p-6">
            <CardContent className="p-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
                {/* Search */}
                <div className="lg:col-span-2">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                    <Input
                      placeholder="Search properties..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>

                {/* Location Filter */}
                <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                  <SelectTrigger>
                    <MapPin className="h-4 w-4 mr-2" />
                    <SelectValue placeholder="Location" />
                  </SelectTrigger>
                  <SelectContent>
                    {locations.map(location => (
                      <SelectItem key={location} value={location}>
                        {location === 'all' ? 'All Locations' : location}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                {/* Type Filter */}
                <Select value={selectedType} onValueChange={setSelectedType}>
                  <SelectTrigger>
                    <SelectValue placeholder="Property Type" />
                  </SelectTrigger>
                  <SelectContent>
                    {propertyTypes.map(type => (
                      <SelectItem key={type} value={type}>
                        {type === 'all' ? 'All Types' : type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                {/* Status Filter */}
                <Select value={selectedStatus} onValueChange={setSelectedStatus}>
                  <SelectTrigger>
                    <SelectValue placeholder="Status" />
                  </SelectTrigger>
                  <SelectContent>
                    {statusOptions.map(status => (
                      <SelectItem key={status} value={status}>
                        {status === 'all' ? 'All Status' : status}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                {/* Price Range Filter */}
                <Select value={priceRange} onValueChange={setPriceRange}>
                  <SelectTrigger>
                    <SelectValue placeholder="Price Range" />
                  </SelectTrigger>
                  <SelectContent>
                    {priceRanges.map(range => (
                      <SelectItem key={range.value} value={range.value}>
                        {range.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Active Filters and Clear Button */}
              {activeFiltersCount > 0 && (
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-200">
                  <div className="flex items-center space-x-2">
                    <Filter className="h-4 w-4 text-gray-500" />
                    <span className="text-sm text-gray-600">
                      {activeFiltersCount} filter{activeFiltersCount > 1 ? 's' : ''} active
                    </span>
                  </div>
                  <Button variant="outline" size="sm" onClick={clearFilters}>
                    Clear All Filters
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-heading font-bold text-secondary-800">
                Available Properties
              </h2>
              <p className="text-secondary-600 mt-1">
                {filteredProperties.length} propert{filteredProperties.length !== 1 ? 'ies' : 'y'} found
              </p>
            </div>
            
            {/* Status Filter Pills */}
            <div className="flex space-x-2">
              {['For Sale', 'For Rent', 'Managed'].map(status => {
                const count = filteredProperties.filter(p => p.status === status).length;
                return (
                  <Badge 
                    key={status}
                    variant={selectedStatus === status ? "default" : "outline"}
                    className="cursor-pointer"
                    onClick={() => setSelectedStatus(selectedStatus === status ? 'all' : status)}
                  >
                    {status} ({count})
                  </Badge>
                );
              })}
            </div>
          </div>

          {filteredProperties.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProperties.map((property, index) => (
                <div key={property.id} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <PropertyCard {...property} />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="h-8 w-8 text-gray-400" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-secondary-800 mb-2">
                No Properties Found
              </h3>
              <p className="text-secondary-600 mb-6">
                Try adjusting your search criteria or clearing some filters.
              </p>
              <Button onClick={clearFilters} variant="outline">
                Clear All Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary-800 mb-4">
            Can't Find What You're Looking For?
          </h2>
          <p className="text-xl text-secondary-600 mb-8 max-w-2xl mx-auto">
            Our property experts can help you find the perfect property that matches your specific requirements.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-primary-600 hover:bg-primary-700 w-full sm:w-auto">
                Contact Our Experts
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="w-full sm:w-auto">
              Set Up Property Alerts
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Properties;
