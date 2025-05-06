
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Car, Users, Fuel, Gauge } from 'lucide-react';

interface CarCardProps {
  id: number;
  name: string;
  type: string;
  image: string;
  pricePerDay: number;
  seats: number;
  transmission: 'Automatic' | 'Manual';
  fuelType: string;
}

const CarCard: React.FC<CarCardProps> = ({
  id,
  name,
  type,
  image,
  pricePerDay,
  seats,
  transmission,
  fuelType,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-shadow hover:shadow-lg">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={`${name}`} 
          className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute top-0 right-0 bg-moran-red text-white py-1 px-3 text-sm font-medium">
          {type}
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-bold text-moran-gray mb-1">{name}</h3>
        
        <div className="grid grid-cols-2 gap-2 mb-4">
          <div className="flex items-center text-sm text-moran-gray">
            <Users size={16} className="mr-2 text-moran-red" />
            <span>{seats} Seats</span>
          </div>
          <div className="flex items-center text-sm text-moran-gray">
            <Car size={16} className="mr-2 text-moran-red" />
            <span>{transmission}</span>
          </div>
          <div className="flex items-center text-sm text-moran-gray">
            <Fuel size={16} className="mr-2 text-moran-red" />
            <span>{fuelType}</span>
          </div>
          <div className="flex items-center text-sm text-moran-gray">
            <Gauge size={16} className="mr-2 text-moran-red" />
            <span>Unlimited KM</span>
          </div>
        </div>
        
        <div className="flex items-center justify-between pt-2 border-t">
          <div>
            <span className="text-moran-red font-bold text-lg">KSH {pricePerDay.toLocaleString()}</span>
            <span className="text-sm text-moran-gray"> / day</span>
          </div>
          <Button asChild size="sm" className="bg-moran-red hover:bg-moran-dark-red">
            <Link to={`/car/${id}`}>Rent Now</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
