
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const KeyPersonnel = () => {
  const keyPersonnel = [
    {
      name: "ERIC MADETE",
      position: "Director",
      qualifications: "Graduate in land Economics with over 23 years experience in property consultancy, construction and development.",
      location: "Nairobi, Kenya"
    },
    {
      name: "COSMAS WAFULA",
      position: "Consultant Architect",
      qualifications: "Graduate in Bachelor of Architecture with 20 years experience",
      location: "Nairobi/ Kampala"
    },
    {
      name: "MIKE GUMBI",
      position: "Consultant Civil Engineer",
      qualifications: "Graduate in BSC Civil Engineering with 19 years experience",
      location: "Nairobi, Kenya"
    },
    {
      name: "NANCY MWANGI",
      position: "Surveyor",
      qualifications: "BSC Survey with 17 years experience",
      location: "Nairobi, Kenya"
    },
    {
      name: "ALFAYO KIHIMA",
      position: "Consultant",
      qualifications: "Diploma in Water Engineering with over 20 years experience",
      location: "Nairobi, Kenya"
    },
    {
      name: "SOLOMON ISIAHO",
      position: "Technical Director",
      qualifications: "Diploma in Building Construction with 33 years experience in construction of commercial and residential properties as well as Project Management.",
      location: "Nairobi, Kenya"
    },
    {
      name: "BERTRAND NGAIYWA",
      position: "Consultant",
      qualifications: "Graduate in Building Economics with over 10 years experience in Quantity Survey and project management",
      location: "Nairobi, Kenya"
    },
    {
      name: "KENNEDY MASAI",
      position: "Foreman",
      qualifications: "Diploma in Building Construction. Has 6 years experience in the supervision of construction of both residential and commercial properties.",
      location: "Hamisi, Kenya"
    },
    {
      name: "HILLES ATONYA KISIAH",
      position: "Finance Manager",
      qualifications: "7 years experience in Financial and Project Management. Proficiency in ICT and Certificate in Strategic Planning.",
      location: "Nairobi, Kenya"
    },
    {
      name: "SAMWEL MALANGA",
      position: "Pipe Fitter",
      qualifications: "Certificate in Plumbing with over 35 years experience with government",
      location: "Busia, Kenya"
    },
    {
      name: "JOHN WAMBUGU",
      position: "Electrician",
      qualifications: "24 years experience",
      location: "Nairobi, Kenya"
    },
    {
      name: "DOUGLAS OGADA",
      position: "Property Officer",
      qualifications: "5 years experience in trade test grade 2 in masonry and certificate in ICT",
      location: "Kisumu, Kenya"
    },
    {
      name: "LOICE NYAMULLAH",
      position: "Secretary",
      qualifications: "Diploma in Business Management with 12 years experience",
      location: "Nairobi, Kenya"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80)'
          }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            Key Personnel
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
            Meet our experienced team of professionals driving project excellence
          </p>
        </div>
      </section>

      {/* Key Personnel Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary-800 mb-4">
              Our Expert Team
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Experienced professionals with combined expertise spanning decades in real estate and construction
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {keyPersonnel.map((person, index) => (
              <Card key={index} className="p-6 hover:shadow-xl transition-shadow h-full">
                <CardContent className="p-0">
                  <div className="mb-4">
                    <h3 className="text-lg font-heading font-bold text-secondary-800 mb-2">
                      {person.name}
                    </h3>
                    <Badge className="mb-3 bg-primary-100 text-primary-800">
                      {person.position}
                    </Badge>
                  </div>
                  <p className="text-secondary-600 text-sm mb-3 leading-relaxed">
                    {person.qualifications}
                  </p>
                  <div className="text-xs text-secondary-500 bg-gray-100 px-3 py-2 rounded-lg">
                    📍 {person.location}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default KeyPersonnel;
