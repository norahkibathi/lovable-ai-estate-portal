
import PropertyCard from '@/components/PropertyCard';

const PropertiesManaged = () => {
  const managedProperties = [
    {
      id: "1",
      title: "Managed Office Complex",
      location: "Westlands, Nairobi",
      price: "Full Service Management",
      type: "Commercial",
      size: "600 sqm",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      status: "Managed" as const,
      description: "Professional office complex under comprehensive management."
    },
    {
      id: "2",
      title: "Residential Apartments",
      location: "Parklands, Nairobi",
      price: "Management Services",
      type: "Apartment",
      bedrooms: 3,
      bathrooms: 2,
      size: "Various",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      status: "Managed" as const,
      description: "Multiple residential units under professional management."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Managed Properties
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Properties under our professional management services
            </p>
          </div>
        </div>
      </section>

      {/* Properties Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {managedProperties.map((property, index) => (
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

export default PropertiesManaged;
