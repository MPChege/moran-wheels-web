
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/home/Hero';
import FeaturedCars from '@/components/home/FeaturedCars';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <FeaturedCars />

        {/* How It Works Section */}
        <section className="py-16 bg-moran-light-gray">
          <div className="container-custom mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-moran-gray mb-4">
                How It <span className="text-moran-red">Works</span>
              </h2>
              <p className="text-moran-gray/70 max-w-2xl mx-auto">
                Renting a car with Moran is simple and straightforward. 
                Follow these easy steps and get on the road in no time.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-moran-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-moran-red">1</span>
                </div>
                <h3 className="font-bold text-xl mb-3 text-moran-gray">Choose Your Car</h3>
                <p className="text-moran-gray/70">
                  Browse our extensive fleet and select the perfect vehicle for your needs.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-moran-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-moran-red">2</span>
                </div>
                <h3 className="font-bold text-xl mb-3 text-moran-gray">Book & Pay Online</h3>
                <p className="text-moran-gray/70">
                  Complete your reservation online with our secure payment system.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-moran-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-moran-red">3</span>
                </div>
                <h3 className="font-bold text-xl mb-3 text-moran-gray">Enjoy Your Journey</h3>
                <p className="text-moran-gray/70">
                  Pick up your car and enjoy the freedom of the open road.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 bg-white">
          <div className="container-custom mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-moran-gray mb-4">
                Why Choose <span className="text-moran-red">Moran</span>
              </h2>
              <p className="text-moran-gray/70 max-w-2xl mx-auto">
                We pride ourselves on providing exceptional service and premium vehicles 
                to ensure your journey is comfortable and stress-free.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-5 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                <div className="h-12 w-12 rounded-full bg-moran-red/10 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-moran-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-bold text-lg mb-2 text-moran-gray">24/7 Support</h3>
                <p className="text-moran-gray/70 text-sm">
                  Our customer support team is available round the clock to assist you.
                </p>
              </div>

              <div className="p-5 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                <div className="h-12 w-12 rounded-full bg-moran-red/10 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-moran-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-bold text-lg mb-2 text-moran-gray">Quality Guaranteed</h3>
                <p className="text-moran-gray/70 text-sm">
                  All our vehicles undergo rigorous maintenance and quality checks.
                </p>
              </div>

              <div className="p-5 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                <div className="h-12 w-12 rounded-full bg-moran-red/10 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-moran-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-bold text-lg mb-2 text-moran-gray">Best Rates</h3>
                <p className="text-moran-gray/70 text-sm">
                  Competitive pricing with no hidden fees or charges.
                </p>
              </div>

              <div className="p-5 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                <div className="h-12 w-12 rounded-full bg-moran-red/10 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-moran-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="font-bold text-lg mb-2 text-moran-gray">Fast & Easy</h3>
                <p className="text-moran-gray/70 text-sm">
                  Streamlined booking process with quick car pickup and return.
                </p>
              </div>
            </div>
            
            <div className="mt-12 text-center">
              <Button asChild size="lg" className="bg-moran-red hover:bg-moran-dark-red">
                <Link to="/about">Learn More About Us</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-16 bg-moran-red">
          <div className="container-custom mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to Experience Moran Car Hire?</h2>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied customers who trust Moran for their car rental needs. 
              Book your vehicle today and experience the difference.
            </p>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-moran-red">
              <Link to="/cars">Browse Our Fleet</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
