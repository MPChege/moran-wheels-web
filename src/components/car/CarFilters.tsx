
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Search, Filter, X } from 'lucide-react';

interface CarFiltersProps {
  onFilterChange: (filters: any) => void;
}

const CarFilters: React.FC<CarFiltersProps> = ({ onFilterChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [filters, setFilters] = useState({
    type: '',
    minPrice: '',
    maxPrice: '',
    seats: '',
    transmission: '',
    fuelType: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const applyFilters = () => {
    onFilterChange(filters);
  };

  const resetFilters = () => {
    setFilters({
      type: '',
      minPrice: '',
      maxPrice: '',
      seats: '',
      transmission: '',
      fuelType: '',
    });
    onFilterChange({});
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-8">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-bold text-lg text-moran-gray">Search & Filters</h3>
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-moran-gray"
        >
          {isOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Filter className="h-5 w-5" />
          )}
        </Button>
      </div>

      {/* Search Box - Always Visible */}
      <div className="relative mb-4">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-moran-gray/50 h-5 w-5" />
        <input
          type="text"
          placeholder="Search by car name or model..."
          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-moran-red"
        />
      </div>

      {/* Filter Options - Toggleable on Mobile */}
      <div className={`space-y-4 ${isOpen ? 'block' : 'hidden md:block'}`}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-moran-gray mb-1">
              Car Type
            </label>
            <select
              name="type"
              value={filters.type}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-moran-red"
            >
              <option value="">All Types</option>
              <option value="SUV">SUV</option>
              <option value="Sedan">Sedan</option>
              <option value="Hatchback">Hatchback</option>
              <option value="Luxury">Luxury</option>
              <option value="Convertible">Convertible</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-moran-gray mb-1">
              Min Price ($/day)
            </label>
            <input
              type="number"
              name="minPrice"
              value={filters.minPrice}
              onChange={handleInputChange}
              placeholder="0"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-moran-red"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-moran-gray mb-1">
              Max Price ($/day)
            </label>
            <input
              type="number"
              name="maxPrice"
              value={filters.maxPrice}
              onChange={handleInputChange}
              placeholder="1000"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-moran-red"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-moran-gray mb-1">
              Number of Seats
            </label>
            <select
              name="seats"
              value={filters.seats}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-moran-red"
            >
              <option value="">Any</option>
              <option value="2">2 Seats</option>
              <option value="4">4 Seats</option>
              <option value="5">5 Seats</option>
              <option value="7">7+ Seats</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-moran-gray mb-1">
              Transmission
            </label>
            <select
              name="transmission"
              value={filters.transmission}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-moran-red"
            >
              <option value="">Any</option>
              <option value="automatic">Automatic</option>
              <option value="manual">Manual</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-moran-gray mb-1">
              Fuel Type
            </label>
            <select
              name="fuelType"
              value={filters.fuelType}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-moran-red"
            >
              <option value="">Any</option>
              <option value="petrol">Petrol</option>
              <option value="diesel">Diesel</option>
              <option value="hybrid">Hybrid</option>
              <option value="electric">Electric</option>
            </select>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-end space-y-2 sm:space-y-0 sm:space-x-2 pt-2 border-t">
          <Button 
            variant="outline" 
            size="sm"
            onClick={resetFilters}
            className="border-moran-gray/50 text-moran-gray hover:bg-moran-gray/10"
          >
            Reset Filters
          </Button>
          <Button 
            size="sm"
            onClick={applyFilters}
            className="bg-moran-red hover:bg-moran-dark-red"
          >
            Apply Filters
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CarFilters;
