
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-moran-light-gray overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-moran-gray/90 to-moran-gray/60 z-10"></div>
          <div 
            className="absolute inset-0 bg-cover bg-center z-0" 
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80')" }}
          ></div>
          
          <div className="container-custom mx-auto py-20 lg:py-32 relative z-20 text-white">
            <div className="max-w-2xl">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                About <span className="text-moran-red">Moran</span> Car Hire
              </h1>
              <p className="text-lg md:text-xl opacity-90 mb-6">
                Your trusted partner for premium car rental services in Kenya since 2010.
              </p>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-16 bg-white">
          <div className="container-custom mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div className="order-2 lg:order-1 animate-fade-in">
                <h2 className="text-3xl font-bold text-moran-gray mb-6">
                  Our <span className="text-moran-red">Story</span>
                </h2>
                <p className="text-moran-gray/80 mb-4">
                  Founded in 2010, Moran Car Hire began with a small fleet of just 5 vehicles and a vision to transform the car rental experience in Kenya. Our founder, John Moran, recognized the need for a reliable, transparent, and customer-focused car rental service.
                </p>
                <p className="text-moran-gray/80 mb-4">
                  Today, we've grown to become one of the leading car rental companies in the region, with a diverse fleet of over 200 vehicles ranging from economy cars to luxury SUVs. Despite our growth, we remain committed to our founding principles of exceptional service, transparency, and reliability.
                </p>
                <p className="text-moran-gray/80">
                  Our team of dedicated professionals works tirelessly to ensure that every customer enjoys a seamless rental experience, whether you're a tourist exploring Kenya's beautiful landscapes, a business traveler needing reliable transportation, or a local resident requiring a temporary vehicle.
                </p>
              </div>
              <div className="order-1 lg:order-2 animate-fade-in">
                <img 
                  src="https://images.unsplash.com/photo-1486053674179-c1986a241424?ixlib=rb-1.2.1&auto=format&fit=crop&w=1024&q=80" 
                  alt="Moran Car Hire history" 
                  className="rounded-lg shadow-xl w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Our Mission Section */}
        <section className="py-16 bg-moran-light-gray">
          <div className="container-custom mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-moran-gray mb-4">
                Our <span className="text-moran-red">Mission</span>
              </h2>
              <p className="text-moran-gray/70 max-w-3xl mx-auto">
                To provide exceptional car rental services that exceed our customers' expectations 
                through reliability, transparency, and a customer-first approach.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-moran-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-moran-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-bold text-xl mb-3 text-moran-gray">Quality</h3>
                <p className="text-moran-gray/70">
                  We maintain our vehicles to the highest standards, ensuring safety, comfort, and reliability for every journey.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-moran-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-moran-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                  </svg>
                </div>
                <h3 className="font-bold text-xl mb-3 text-moran-gray">Customer Service</h3>
                <p className="text-moran-gray/70">
                  We put our customers first, providing exceptional service and support throughout the rental experience.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-moran-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-moran-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <h3 className="font-bold text-xl mb-3 text-moran-gray">Transparency</h3>
                <p className="text-moran-gray/70">
                  We believe in clear, upfront pricing with no hidden fees, ensuring you know exactly what you're paying for.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 bg-white">
          <div className="container-custom mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-moran-gray mb-4">
                Our <span className="text-moran-red">Team</span>
              </h2>
              <p className="text-moran-gray/70 max-w-3xl mx-auto">
                Meet the dedicated professionals who make Moran Car Hire the trusted choice for car rentals.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {name: "John Moran", position: "Founder & CEO", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"},
                {name: "Sarah Kimani", position: "Operations Manager", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"},
                {name: "David Njoroge", position: "Fleet Manager", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"},
                {name: "Emily Wambui", position: "Customer Relations", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"}
              ].map((member, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="h-64 overflow-hidden">
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover object-center" />
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-lg text-moran-gray">{member.name}</h3>
                    <p className="text-moran-red">{member.position}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-16 bg-moran-red">
          <div className="container-custom mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to Experience Our Service?</h2>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied customers who trust Moran for their car rental needs. 
              Contact us today to discuss your requirements or browse our fleet.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-moran-red">
                <Link to="/cars">Browse Our Fleet</Link>
              </Button>
              <Button asChild size="lg" className="bg-white text-moran-red hover:bg-moran-light-gray">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
