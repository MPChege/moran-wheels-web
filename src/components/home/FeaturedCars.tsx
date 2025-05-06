
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import CarCard from '../car/CarCard';

// Mock data for featured cars
const featuredCars = [
  {
    id: 1,
    name: 'Toyota RAV4',
    type: 'SUV',
    image: 'https://images.unsplash.com/photo-1551830820-330a71b99659?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    pricePerDay: 50,
    seats: 5,
    transmission: 'Automatic' as const,
    fuelType: 'Petrol',
  },
  {
    id: 2,
    name: 'Honda Civic',
    type: 'Sedan',
    image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    pricePerDay: 35,
    seats: 5,
    transmission: 'Automatic' as const,
    fuelType: 'Hybrid',
  },
  {
    id: 3,
    name: 'Mercedes E-Class',
    type: 'Luxury',
    image: 'https://images.unsplash.com/photo-1549925862-990df5be76c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    pricePerDay: 120,
    seats: 5,
    transmission: 'Automatic' as const,
    fuelType: 'Diesel',
  },
];

const FeaturedCars: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container-custom mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-moran-gray mb-4">
            Featured <span className="text-moran-red">Cars</span>
          </h2>
          <p className="text-moran-gray/70 max-w-2xl mx-auto">
            Explore our selection of premium vehicles available for immediate booking. 
            We offer a diverse range of cars to cater to all your transportation needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredCars.map((car) => (
            <CarCard key={car.id} {...car} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button asChild size="lg" variant="outline" className="border-moran-red text-moran-red hover:bg-moran-red hover:text-white">
            <Link to="/cars">View All Cars</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCars;
