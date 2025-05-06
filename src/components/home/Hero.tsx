
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  const backgroundImages = [
    "url('https://images.unsplash.com/photo-1485291571150-772bcfc10da5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80')",
    "url('https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80')",
    "url('https://images.unsplash.com/photo-1550355291-bbee04a92027?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80')",
    "url('https://images.unsplash.com/photo-1511919884226-fd3cad34687c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80')"
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 5000); // Change background every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative bg-moran-light-gray overflow-hidden h-[600px]">
      <div className="absolute inset-0 bg-gradient-to-r from-moran-gray/90 to-moran-gray/60 z-10"></div>
      
      {backgroundImages.map((image, index) => (
        <div 
          key={index}
          className={`absolute inset-0 bg-cover bg-center z-0 transition-opacity duration-1000 ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}`} 
          style={{ backgroundImage: image }}
        ></div>
      ))}
      
      <div className="container-custom mx-auto py-20 lg:py-32 relative z-20 text-white h-full flex items-center">
        <div className="max-w-2xl animate-fade-in">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Experience Premium <span className="text-moran-red">Car Rental</span> Services
          </h1>
          <p className="text-lg md:text-xl opacity-90 mb-8">
            Choose from our wide range of luxury and economy vehicles for your business trips or leisure travels.
            Safe, reliable, and affordable.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 sm:items-center">
            <Button asChild size="lg" className="bg-moran-red hover:bg-moran-dark-red text-white">
              <Link to="/cars">Browse Cars</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
