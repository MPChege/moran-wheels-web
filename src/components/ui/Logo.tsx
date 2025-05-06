
import React from 'react';
import { Link } from 'react-router-dom';
import { Car } from 'lucide-react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  withText?: boolean;
}

const Logo: React.FC<LogoProps> = ({ size = 'md', withText = true }) => {
  const sizeClass = {
    sm: 'h-6 w-6',
    md: 'h-8 w-8',
    lg: 'h-10 w-10',
  }[size];

  const textSize = {
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-3xl',
  }[size];

  return (
    <Link to="/" className="flex items-center space-x-2">
      <div className="bg-moran-red rounded-full p-1.5 text-white">
        <Car className={sizeClass} />
      </div>
      {withText && (
        <span className={`font-bold ${textSize} text-moran-red`}>Moran</span>
      )}
    </Link>
  );
};

export default Logo;
