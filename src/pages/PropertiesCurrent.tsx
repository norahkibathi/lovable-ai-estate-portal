import PropertyCard, { PropertyCardProps } from '@/components/PropertyCard';

const PropertiesCurrent = () => {
  const currentProperties: PropertyCardProps[] = [
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
        "/media/WhatsApp_Image_2025-07-02_at_11.19.25_1.jpeg",
        "/media/WhatsApp_Image_2025-07-02_at_11.19.24.jpeg",
        "/media/WhatsApp_Image_2025-07-02_at_11.19.24_2.jpeg",
        "/media/WhatsApp_Image_2025-07-02_at_11.19.24_1.jpeg",
        "/media/WhatsApp_Image_2025-07-02_at_11.19.23.jpeg",
        "/media/WhatsApp_Image_2025-07-02_at_11.19.22.jpeg",
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
      title: "Family Townhouse",
      location: "Lavington, Nairobi",
      price: "KSH 35,000,000",
      type: "Townhouse",
      bedrooms: 4,
      bathrooms: 3,
      size: "250 sqm",
      image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      status: "For Sale",
      description: "Beautiful 4-bedroom townhouse in serene Lavington neighborhood.",
      priceValue: 35000000,
    },
    {
      id: "3",
      title: "Modern Apartment",
      location: "Kilimani, Nairobi",
      price: "KSH 150,000/month",
      type: "Apartment",
      bedrooms: 2,
      bathrooms: 2,
      size: "120 sqm",
      images: [
        "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1513694232788-9f93ed7f5c0e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      ],
      status: "Managed",
      description: `Contemporary 2-bedroom apartment in the heart of Kilimani, offering:
      - 2 spacious bedrooms (1 en-suite)
      - Modern open-plan kitchen
      - Bright living area with balcony
      - Access to shared amenities (pool, gym)
      - Secure parking for 1 car
      - Close to Yaya Centre and other Kilimani amenities
      - Ideal for professionals or small families
      Professionally managed with 24/7 maintenance support.`,
      priceValue: 150000,
      availableFrom: "2025-07-15",
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
            Current Listings
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
            Available properties for sale, rent, and managed across Nairobi
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