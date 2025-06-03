
import PropertyCard from '@/components/PropertyCard';

const PropertiesShowcase = () => {
  const showcaseProperties = [
    {
      id: "1",
      title: "Luxury Villa in Karen",
      location: "Karen, Nairobi",
      price: "KSH 85,000,000",
      type: "Villa",
      bedrooms: 6,
      bathrooms: 5,
      size: "450 sqm",
      image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      status: "For Sale" as const,
      description: "Stunning 6-bedroom luxury villa with premium finishes and world-class amenities."
    },
    {
      id: "2",
      title: "Premium Office Complex",
      location: "Westlands, Nairobi",
      price: "KSH 200,000,000",
      type: "Commercial",
      size: "1200 sqm",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      status: "For Sale" as const,
      description: "State-of-the-art office complex in prime Westlands location."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Showcase Properties
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Premium properties featuring exceptional design and prime locations
            </p>
          </div>
        </div>
      </section>

      {/* Properties Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {showcaseProperties.map((property, index) => (
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

export default PropertiesShowcase;
