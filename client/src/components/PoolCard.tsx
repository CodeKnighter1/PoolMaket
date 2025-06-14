import { Pool } from '@/types/pool';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MapPin, Ruler, Droplets, Star } from 'lucide-react';

interface PoolCardProps {
  pool: Pool;
  onViewDetails: (pool: Pool) => void;
}

export function PoolCard({ pool, onViewDetails }: PoolCardProps) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0
    }).format(price);
  };

  const getConditionColor = (condition: string) => {
    switch (condition) {
      case 'new':
        return 'bg-green-100 text-green-800';
      case 'excellent':
        return 'bg-blue-100 text-blue-800';
      case 'good':
        return 'bg-yellow-100 text-yellow-800';
      case 'fair':
        return 'bg-orange-100 text-orange-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getCategoryName = (category: string) => {
    switch (category) {
      case 'above-ground':
        return 'Above Ground';
      case 'in-ground':
        return 'In-Ground';
      case 'infinity':
        return 'Infinity';
      case 'kiddie':
        return 'Kiddie Pool';
      case 'hot-tub':
        return 'Hot Tub';
      default:
        return category;
    }
  };

  return (
    <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden border-0 shadow-lg">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={pool.images[0]}
          alt={pool.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4">
          <Badge className={getConditionColor(pool.condition)}>
            {pool.condition}
          </Badge>
        </div>
        {pool.isFeatured && (
          <div className="absolute top-4 right-4">
            <Badge className="bg-orange-100 text-orange-800">
              <Star className="w-3 h-3 mr-1" />
              Featured
            </Badge>
          </div>
        )}
        <div className="absolute bottom-4 left-4">
          <Badge variant="secondary" className="bg-white/90 text-gray-800">
            {getCategoryName(pool.category)}
          </Badge>
        </div>
      </div>
      
      <CardContent className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-sky-600 transition-colors">
          {pool.title}
        </h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {pool.description}
        </p>
        
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-sm text-gray-600">
            <MapPin className="w-4 h-4 mr-2 text-gray-400" />
            {pool.location}
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <Ruler className="w-4 h-4 mr-2 text-gray-400" />
            {pool.size}
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <Droplets className="w-4 h-4 mr-2 text-gray-400" />
            {pool.depth} deep
          </div>
        </div>

        <div className="flex flex-wrap gap-1 mb-4">
          {pool.features.slice(0, 3).map((feature, index) => (
            <Badge key={index} variant="outline" className="text-xs">
              {feature}
            </Badge>
          ))}
          {pool.features.length > 3 && (
            <Badge variant="outline" className="text-xs">
              +{pool.features.length - 3} more
            </Badge>
          )}
        </div>
      </CardContent>
      
      <CardFooter className="p-6 pt-0 flex items-center justify-between">
        <div className="text-2xl font-bold text-sky-600">
          {formatPrice(pool.price)}
        </div>
        <Button variant={"link"}
          onClick={() => onViewDetails(pool)}
        >
          View Details
        </Button>
      </CardFooter>
    </Card>
  );
}