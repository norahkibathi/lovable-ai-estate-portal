import PropertyCard, { PropertyCardProps } from '@/components/PropertyCard';

const PropertiesShowcase = () => {
  const showcaseProperties: PropertyCardProps[] = [
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
      video: "/media/WhatsApp_Video_2025-07-02_at_11.19.26.mp4",
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
      title: "Luxury Villa in Karen",
      location: "Karen, Nairobi",
      price: "KSH 85,000,000",
      type: "Villa",
      bedrooms: 6,
      bathrooms: 5,
      size: "450 sqm",
      image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      status: "For Sale",
      description: "Stunning 6-bedroom luxury villa with premium finishes and world-class amenities.",
      priceValue: 85000000,
    },
    {
      id: "3",
      title: "Premium Office Complex",
      location: "Westlands, Nairobi",
      price: "KSH 200,000,000",
      type: "Commercial",
      size: "1200 sqm",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      status: "For Sale",
      description: "State-of-the-art office complex in prime Westlands location.",
      priceValue: 200000000,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80)',
          }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            Showcase Properties
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
            Premium properties featuring exceptional design and prime locations
          </p>
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

          {/* Video Section */}
          <div className="max-w-4xl mx-auto mt-16">
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-heading font-bold text-secondary-800 mb-4">
                Property Video Tour
              </h3>
              <p className="text-lg text-secondary-600">
                Take a virtual tour of our featured Westlands apartment
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <div style={{ padding: "56.25% 0 0 0", position: "relative" }}>
                <iframe 
                  src="https://player.vimeo.com/video/1102687296?badge=0&autopause=0&player_id=0&app_id=58479" 
                  frameBorder="0" 
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" 
                  referrerPolicy="strict-origin-when-cross-origin" 
                  style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }} 
                  title="WhatsApp Video 2025-07-02 at 11.19.26"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PropertiesShowcase;