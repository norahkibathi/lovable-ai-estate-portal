import { useState, useMemo } from 'react';
import PropertyCard, { PropertyCardProps } from '@/components/PropertyCard';
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

  const properties: PropertyCardProps[] = [
    {
      id: "1",
      title: "4 Bedroom Apartment in Westlands",
      location: "Westlands, Nairobi",
      price: "KSH 160,000/month",
      type: "Apartment",
      bedrooms: 4,
      bathrooms: 3,
      size: "200 sqm",
      images: [
        "/lovable-uploads/8b6b0e4d-7e8b-4d60-a644-35e23be3fe02.png",
        "/lovable-uploads/faab29c6-643b-458c-b54f-ca1fdbc54e3b.png",
        "/lovable-uploads/6b092863-cda3-4f1e-8a4a-b1521bc67dd0.png",
        "/lovable-uploads/a7691ff1-7849-4632-8d8f-c0052ad15066.png",
        "/lovable-uploads/1866fa3b-4c49-405d-9605-da3523e12339.png",
        "/lovable-uploads/8c9516c6-0a60-4c4f-a487-6070f11ebc07.png",
        "/lovable-uploads/175e1dfa-e13b-482d-a68c-2b1da02109cc.png",
        "/lovable-uploads/ca32370d-b749-4271-a3c1-2b3c2f7a1565.png",
        "/lovable-uploads/d7b006ef-30ca-48ed-9cf2-bdf9c3f8a8dc.png",
        "/lovable-uploads/39b4bdf5-b971-48d2-b5ca-758520f8ed40.png"
      ],
      
      status: "For Rent",
      description: `Unfurnished 4-bedroom apartment available to let on Rhapta Road, Westlands. Located in a UN-approved compound, this spacious apartment offers:
      - 4 bedrooms (3 en-suite)
      - Spacious living room with balcony/terrace
      - Spacious kitchen with pantry
      - Total of 3 bathrooms
      - Gym
      - Parking for 2 cars
      - Highly secured, quiet compound
      - Lots of natural lighting and fresh air
      - Close to amenities like ABC Place, Sarit Centre, Westgate Shopping Centre
      - Close to supermarkets (Naivas, Chandarana, Carrefour)
      - Near schools (St Mary’s, Loreto Convent Msongari, Nairobi International School Kindergarten)
      - Close to churches and mosques
      - Easy access to expressway and Redhill Link road (10min to Gigiri)
      Available from July 1st, 2025.`,
      priceValue: 160000,
      availableFrom: "2025-07-01",
    },
    {
      id: "2",
      title: "Modern Villa in Karen",
      location: "Karen, Nairobi",
      price: "KSH 45,000,000",
      type: "Villa",
      bedrooms: 5,
      bathrooms: 4,
      size: "350 sqm",
      image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      status: "For Sale",
      description: "Luxurious 5-bedroom villa with modern amenities, swimming pool, and beautiful garden.",
      priceValue: 45000000,
    },
    {
      id: "3",
      title: "Executive Apartment",
      location: "Westlands, Nairobi",
      price: "KSH 180,000/month",
      type: "Apartment",
      bedrooms: 3,
      bathrooms: 2,
      size: "140 sqm",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      status: "For Rent",
      description: "Contemporary 3-bedroom apartment in the heart of Westlands with excellent amenities.",
      priceValue: 180000,
    },
    {
      id: "4",
      title: "Commercial Building",
      location: "CBD, Nairobi",
      price: "KSH 120,000,000",
      type: "Commercial",
      size: "800 sqm",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      status: "For Sale",
      description: "Prime commercial building in Nairobi CBD perfect for office spaces.",
      priceValue: 120000000,
    },
    {
      id: "5",
      title: "Family Townhouse",
      location: "Lavington, Nairobi",
      price: "KSH 35,000,000",
      type: "Townhouse",
      bedrooms: 4,
      bathrooms: 3,
      size: "250 sqm",
      image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      status: "For Sale",
      description: "Spacious 4-bedroom townhouse in the serene Lavington area.",
      priceValue: 35000000,
    },
    {
      id: "6",
      title: "Luxury Apartment",
      location: "Kilimani, Nairobi",
      price: "KSH 150,000/month",
      type: "Apartment",
      bedrooms: 2,
      bathrooms: 2,
      size: "120 sqm",
      image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      status: "For Rent",
      description: "Modern 2-bedroom apartment with stunning city views.",
      priceValue: 150000,
    },
    {
      id: "7",
      title: "Managed Office Complex",
      location: "Westlands, Nairobi",
      price: "KSH 95,000,000",
      type: "Commercial",
      size: "600 sqm",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      status: "Managed",
      description: "Well-maintained office complex with full management services.",
      priceValue: 95000000,
    },
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
    { value: '100000000+', label: 'Above 100M' },
  ];

  const filteredProperties = useMemo(() => {
    return properties.filter(property => {
      const matchesSearch =
        searchTerm === '' ||
        property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        property.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
        property.description.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesLocation =
        selectedLocation === 'all' ||
        property.location.toLowerCase().includes(selectedLocation.toLowerCase());

      const matchesType = selectedType === 'all' || property.type === selectedType;

      const matchesStatus = selectedStatus === 'all' || property.status === selectedStatus;

      let matchesPrice = true;
      if (priceRange !== 'all') {
        const price = property.priceValue || 0;
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
  }, [searchTerm, selectedLocation, selectedType, selectedStatus, priceRange]);

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
      <section className="relative py-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80)',
          }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            Find Your Perfect Property
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-8">
            Discover premium properties across Nairobi's most sought-after locations
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Link to="/properties/showcase">
              <Button className="bg-blue-600 hover:bg-black text-white transition-colors duration-300">
                Showcase Properties
              </Button>
            </Link>
            <Link to="/properties/current">
              <Button className="bg-blue-600 hover:bg-black text-white transition-colors duration-300">
                Current Listings
              </Button>
            </Link>
            <Link to="/properties/managed">
              <Button className="bg-blue-600 hover:bg-black text-white transition-colors duration-300">
                Managed Properties
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-white border-b border-gray-200 sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="p-6">
            <CardContent className="p-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
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
            <div className="flex space-x-2">
              {['For Sale', 'For Rent', 'Managed'].map(status => {
                const count = filteredProperties.filter(p => p.status === status).length;
                return (
                  <Badge
                    key={status}
                    variant={selectedStatus === status ? 'default' : 'outline'}
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