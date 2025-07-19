import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Award, Users, Target, Eye, Heart } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Autoplay from "embla-carousel-autoplay";

const About = () => {
  const teamMembers = [
    {
      name: "Eric Madete",
      role: "Managing Director",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      description: "B.A Land Economics and Diploma Land Management. Managing Director with 23+ years experience in property consultancy, construction and development.",
      qualifications: ["B.A Land Economics", "Diploma Land Management", "Associate Member ISK", "Licensed Estate Agent"]
    },
    {
      name: "Lydia O Mukaye",
      role: "Director",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      description: "B.A Social Work, MBA Strategic Management. Director with 22+ years experience in NGO management and strategic development.",
      qualifications: ["B.A Social Work", "MBA Strategic Management", "World Urban Forum Expert", "Development Specialist"]
    },
    {
      name: "Elizabeth N Mbithi",
      role: "Chief Valuer",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b890?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      description: "B.A Land Economics. Chief Valuer with extensive experience in property valuation and estate agency.",
      qualifications: ["B.A Land Economics", "Full Member ISK", "Licensed Valuer", "Licensed Estate Agent"]
    }
  ];

  const values = [
    {
      icon: Target,
      title: "Excellence",
      description: "We strive for excellence in every service we provide, ensuring the highest standards of professionalism and delivering results that exceed client expectations."
    },
    {
      icon: Heart,
      title: "Integrity",
      description: "Honesty and transparency form the foundation of all our client relationships and business practices, building trust through ethical conduct."
    },
    {
      icon: Users,
      title: "Client-Focused",
      description: "Our clients' needs come first. We tailor our services to meet specific requirements and maintain long-term relationships built on trust."
    },
    {
      icon: Award,
      title: "Innovation",
      description: "We embrace modern technology and innovative approaches to deliver superior real estate solutions and stay ahead of market trends."
    }
  ];

  const achievements = [
    "500+ Properties Successfully Valued",
    "300+ Satisfied Clients",
    "23+ Years Combined Experience",
    "95% Client Retention Rate",
    "Certified by Institute of Surveyors of Kenya",
    "Licensed Real Estate Agents"
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
            About EMM Consult Ltd
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
            Your trusted partner in real estate solutions across Kenya, 
            providing professional services with integrity and excellence.
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary-800 mb-6">
                Our Story & Heritage
              </h2>
              <div className="space-y-4 text-secondary-600 leading-relaxed">
                <p>
                  Founded with a vision to revolutionize the real estate industry in Kenya, 
                  EMM Consult Ltd has grown from a small consultancy firm to become one of the most 
                  trusted names in property valuation, management, and development across East Africa.
                </p>
                <p>
                  Our journey began over two decades ago when our founder, Eric Madete, identified 
                  a critical gap in professional real estate services in Kenya. With his extensive 
                  background in land economics and a passion for property development, he established 
                  EMM Consult with the mission to provide accurate, reliable, and professional 
                  real estate solutions.
                </p>
                <p>
                  Today, we pride ourselves on our commitment to accuracy, professionalism, and 
                  client satisfaction. Our team combines extensive local market knowledge with 
                  international best practices, making us the preferred choice for individuals, 
                  corporations, and financial institutions across Kenya and beyond.
                </p>
                <p>
                  From humble beginnings in Nairobi, we have expanded our operations to cover 
                  major urban centers across Kenya, handling everything from residential property 
                  management to large-scale commercial developments and infrastructure projects.
                </p>
              </div>
              
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-primary-50 rounded-lg">
                  <div className="text-2xl font-bold text-primary-600">23+</div>
                  <div className="text-sm text-secondary-600">Years Experience</div>
                </div>
                <div className="text-center p-4 bg-primary-50 rounded-lg">
                  <div className="text-2xl font-bold text-primary-600">500+</div>
                  <div className="text-sm text-secondary-600">Properties Valued</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Modern office building"
                className="rounded-2xl shadow-xl w-full h-[500px] object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl">
                <div className="flex items-center space-x-2">
                  <Award className="h-8 w-8 text-primary-600" />
                  <div>
                    <div className="font-semibold text-secondary-800">Certified</div>
                    <div className="text-sm text-secondary-600">Professional Valuers</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary-800 mb-4">
              Our Mission & Vision
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Guiding principles that drive our commitment to excellence in real estate services
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="text-center p-8 border-2 border-primary-200 hover:border-primary-400 transition-colors h-full relative overflow-hidden">
              <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
                style={{
                  backgroundImage: 'url(https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80)'
                }}
              ></div>
              <div className="relative z-10">
                <CardHeader>
                  <Eye className="h-12 w-12 text-primary-600 mx-auto mb-4" />
                  <CardTitle className="text-2xl font-heading text-secondary-800">Our Vision</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-secondary-600 leading-relaxed">
                    To be the leading real estate consultancy firm in East Africa, 
                    known for our professionalism, accuracy, and client-centric approach 
                    in delivering comprehensive property solutions that drive economic growth 
                    and sustainable development across the region.
                  </p>
                </CardContent>
              </div>
            </Card>

            <Card className="text-center p-8 border-2 border-primary-200 hover:border-primary-400 transition-colors h-full relative overflow-hidden">
              <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
                style={{
                  backgroundImage: 'url(https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80)'
                }}
              ></div>
              <div className="relative z-10">
                <CardHeader>
                  <Target className="h-12 w-12 text-primary-600 mx-auto mb-4" />
                  <CardTitle className="text-2xl font-heading text-secondary-800">Our Mission</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-secondary-600 leading-relaxed">
                    To provide exceptional real estate services through innovative solutions, 
                    professional expertise, and unwavering commitment to our clients' success 
                    while maintaining the highest standards of integrity, transparency, and 
                    ethical business practices in all our operations.
                  </p>
                </CardContent>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Values Carousel */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary-800 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              The fundamental principles that guide everything we do and define who we are
            </p>
          </div>
          
          <Carousel className="w-full max-w-5xl mx-auto">
            <CarouselContent>
              {values.map((value, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
                  <div className="p-2">
                    <Card className="text-center p-8 hover:shadow-lg transition-shadow h-full">
                      <CardContent className="p-0">
                        <value.icon className="h-16 w-16 text-primary-600 mx-auto mb-6" />
                        <h3 className="text-2xl font-heading font-semibold text-secondary-800 mb-4">
                          {value.title}
                        </h3>
                        <p className="text-secondary-600 leading-relaxed">
                          {value.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      {/* Leadership Team Carousel with Auto-slide */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary-800 mb-4">
              Leadership Team
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Experienced professionals dedicated to driving our vision forward
            </p>
          </div>
          
          <Carousel 
            className="w-full max-w-4xl mx-auto"
            plugins={[
              Autoplay({
                delay: 4000,
              }) as any,
            ]}
          >
            <CarouselContent>
              {teamMembers.map((member, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
                  <div className="p-2">
                    <Card className="text-center overflow-hidden hover:shadow-xl transition-shadow h-full">
                      <div className="p-6">
                        <img 
                          src={member.image} 
                          alt={member.name}
                          className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                        />
                        <h3 className="text-xl font-heading font-semibold text-secondary-800 mb-2">
                          {member.name}
                        </h3>
                        <Badge className="mb-4 bg-primary-100 text-primary-800">
                          {member.role}
                        </Badge>
                        <p className="text-secondary-600 text-sm mb-4 leading-relaxed">
                          {member.description}
                        </p>
                        <div className="space-y-1">
                          {member.qualifications.map((qual, idx) => (
                            <div key={idx} className="text-xs text-secondary-500 bg-gray-100 px-2 py-1 rounded">
                              {qual}
                            </div>
                          ))}
                        </div>
                      </div>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary-800 mb-4">
              Our Achievements
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Milestones that reflect our commitment to excellence and client satisfaction
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="flex items-center space-x-3 p-4 bg-white rounded-lg hover:shadow-md transition-shadow">
                <CheckCircle className="h-6 w-6 text-primary-600 flex-shrink-0" />
                <span className="text-secondary-700 font-medium">{achievement}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
