
import PropertyCard from '@/components/PropertyCard';

const PropertiesCurrent = () => {
  const currentProperties = [
    {
      id: "1",
      title: "Family Townhouse",
      location: "Lavington, Nairobi",
      price: "KSH 35,000,000",
      type: "Townhouse",
      bedrooms: 4,
      bathrooms: 3,
      size: "250 sqm",
      image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      status: "For Sale" as const,
      description: "Beautiful 4-bedroom townhouse in serene Lavington neighborhood."
    },
    {
      id: "2",
      title: "Modern Apartment",
      location: "Kilimani, Nairobi",
      price: "KSH 150,000/month",
      type: "Apartment",
      bedrooms: 2,
      bathrooms: 2,
      size: "120 sqm",
      image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      status: "For Rent" as const,
      description: "Contemporary 2-bedroom apartment with city views."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80)'
          }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            Current Listings
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
            Available properties for sale and rent across Nairobi
          </p>
        </div>
      </section>

      {/* Properties Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentProperties.map((property, index) => (
              <div key={property.id} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <PropertyCard {...property} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PropertiesCurrent;
