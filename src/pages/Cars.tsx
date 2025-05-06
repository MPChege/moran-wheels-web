
import React, { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CarFilters from '@/components/car/CarFilters';
import CarCard from '@/components/car/CarCard';
import { Button } from '@/components/ui/button';
import { Grid, List } from 'lucide-react';

// Mock data for cars
const allCars = [
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
  {
    id: 4,
    name: 'Volkswagen Golf',
    type: 'Hatchback',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    pricePerDay: 40,
    seats: 5,
    transmission: 'Manual' as const,
    fuelType: 'Petrol',
  },
  {
    id: 5,
    name: 'Ford Mustang',
    type: 'Convertible',
    image: 'https://images.unsplash.com/photo-1584345604476-8ec5f452d1ad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    pricePerDay: 80,
    seats: 4,
    transmission: 'Automatic' as const,
    fuelType: 'Petrol',
  },
  {
    id: 6,
    name: 'Toyota Prius',
    type: 'Sedan',
    image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    pricePerDay: 45,
    seats: 5,
    transmission: 'Automatic' as const,
    fuelType: 'Hybrid',
  },
];

const Cars = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [cars, setCars] = useState(allCars);
  const [filters, setFilters] = useState({});

  const handleFilterChange = (newFilters: any) => {
    setFilters(newFilters);
    // In a real app, you would filter the cars based on the filters
    // For now, we'll just return all cars
    setCars(allCars);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow bg-gray-50">
        <section className="bg-moran-gray py-10">
          <div className="container-custom mx-auto">
            <h1 className="text-3xl font-bold text-white">Browse Our Fleet</h1>
            <p className="text-white/80 mt-2">
              Find your perfect ride from our extensive collection of vehicles
            </p>
          </div>
        </section>
        
        <section className="py-8">
          <div className="container-custom mx-auto">
            <CarFilters onFilterChange={handleFilterChange} />
            
            <div className="flex items-center justify-between mb-6">
              <p className="text-moran-gray">
                Showing <span className="font-semibold">{cars.length}</span> cars
              </p>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-moran-gray mr-2">View:</span>
                <Button
                  variant={viewMode === 'grid' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setViewMode('grid')}
                  className={viewMode === 'grid' ? 'bg-moran-red hover:bg-moran-dark-red' : ''}
                >
                  <Grid className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === 'list' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setViewMode('list')}
                  className={viewMode === 'list' ? 'bg-moran-red hover:bg-moran-dark-red' : ''}
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </div>
            
            <div className={`grid ${viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'} gap-6`}>
              {cars.map((car) => (
                <CarCard key={car.id} {...car} />
              ))}
            </div>
            
            {/* Pagination */}
            <div className="mt-10 flex justify-center">
              <nav className="flex items-center space-x-2">
                <Button variant="outline" size="sm" disabled>Previous</Button>
                <Button size="sm" className="bg-moran-red hover:bg-moran-dark-red">1</Button>
                <Button variant="outline" size="sm">2</Button>
                <Button variant="outline" size="sm">3</Button>
                <Button variant="outline" size="sm">Next</Button>
              </nav>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Cars;
