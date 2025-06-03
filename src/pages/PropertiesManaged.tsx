
import PropertyCard from '@/components/PropertyCard';

const PropertiesManaged = () => {
  const managedProperties = [
    {
      id: "1",
      title: "Nyayo Embakasi Commercial Building",
      location: "Embakasi, Nairobi",
      price: "KSH 1,900,000/month",
      type: "Commercial",
      size: "Large Complex",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      status: "Managed" as const,
      description: "Large commercial building generating substantial rental income under professional management."
    },
    {
      id: "2",
      title: "Stima View Apartments",
      location: "Various Locations, Nairobi",
      price: "KSH 1,800,000/month",
      type: "Apartment Complex",
      size: "Multi-unit",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      status: "Managed" as const,
      description: "Premium apartment complex with modern amenities and professional management services."
    },
    {
      id: "3",
      title: "Suan Apartments Eastleigh",
      location: "Eastleigh, Nairobi",
      price: "KSH 645,000/month",
      type: "Apartment",
      size: "76 units",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      status: "Managed" as const,
      description: "76-unit apartment complex in the vibrant Eastleigh area with consistent rental income."
    },
    {
      id: "4",
      title: "Mag212 Apartments",
      location: "Nairobi",
      price: "KSH 620,000/month",
      type: "Apartment",
      size: "Multi-unit",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      status: "Managed" as const,
      description: "Modern apartment complex with excellent amenities and prime location."
    },
    {
      id: "5",
      title: "Karen Court Apartments",
      location: "Karen, Nairobi",
      price: "KSH 600,000/month",
      type: "Apartment",
      size: "Premium units",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      status: "Managed" as const,
      description: "Luxury apartments in the prestigious Karen area with high-end amenities."
    },
    {
      id: "6",
      title: "Parklands Mixed Development",
      location: "Parklands, Nairobi",
      price: "KSH 530,000/month",
      type: "Mixed Use",
      size: "18 flats",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      status: "Managed" as const,
      description: "18-unit residential flats in the popular Parklands neighborhood."
    },
    {
      id: "7",
      title: "Joroi Court Apartments",
      location: "Nairobi",
      price: "KSH 530,000/month",
      type: "Apartment",
      size: "Multiple units",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      status: "Managed" as const,
      description: "Well-maintained apartment complex with modern facilities and amenities."
    },
    {
      id: "8",
      title: "Ngong Road Apartments",
      location: "Ngong Road, Nairobi",
      price: "KSH 500,000/month",
      type: "Apartment",
      size: "Multi-unit",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      status: "Managed" as const,
      description: "Strategic apartment complex along the busy Ngong Road corridor."
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
            Managed Properties
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
            Properties under our professional management services generating consistent returns
          </p>
        </div>
      </section>

      {/* Properties Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-secondary-800 mb-4">
              Our Property Portfolio
            </h2>
            <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
              We manage a diverse portfolio of residential and commercial properties across Nairobi, 
              delivering professional services and consistent returns for property owners.
            </p>
          </div>
          
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
