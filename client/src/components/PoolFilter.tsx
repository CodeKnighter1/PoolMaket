import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { X } from 'lucide-react';
import type { FilterOptions, PoolFilterProps } from '@/types/pool';

export function PoolFilter({ filters, onFilterChange, onClearFilters, resultsCount }: PoolFilterProps) {
  const updateFilter = (key: keyof FilterOptions, value: string) => {
    const normalizedValue = value === 'all' || value === 'any' ? '' : value;
    onFilterChange({ ...filters, [key]: normalizedValue });
  };

  const hasActiveFilters = Object.values(filters).some(value => value !== '');

  const getActiveFiltersCount = () => {
    return Object.values(filters).filter(value => value !== '').length;
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-900">Filters</h3>
        {hasActiveFilters && (
          <Button
            variant="ghost"
            size="sm"
            onClick={onClearFilters}
            className="text-gray-500 hover:text-gray-700"
          >
            <X className="w-4 h-4 mr-1" />
            Clear All
          </Button>
        )}
      </div>


      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 md:gap-10">
        <div className="text-xs sm:text-sm text-gray-600">
          {resultsCount} {resultsCount === 1 ? 'pool' : 'pools'} found
          {hasActiveFilters && (
            <Badge variant="secondary" className="ml-2">
              {getActiveFiltersCount()} filter{getActiveFiltersCount() > 1 ? 's' : ''} active
            </Badge>
          )}
        </div>

        <div className="space-y-1 bg-white sm:space-y-2">
          <Label className="text-xs sm:text-sm">Category</Label>
          <Select
            value={filters.category || 'all'}
            onValueChange={(value) => updateFilter('category', value)} 
          >
            <SelectTrigger>
              <SelectValue placeholder="All Categories" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              <SelectItem value="in-ground">In-Ground</SelectItem>
              <SelectItem value="above-ground">Above Ground</SelectItem>
              <SelectItem value="infinity">Infinity</SelectItem>
              <SelectItem value="hot-tub">Hot Tub</SelectItem>
              <SelectItem value="kiddie">Kiddie Pool</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-1 sm:space-y-2">
          <Label className="text-xs sm:text-sm">Price Range</Label>
          <div className="grid grid-cols-2 gap-2 sm:gap-3">
            <Input
              type="number"
              placeholder="Min"
              value={filters.priceMin}
              onChange={(e) => updateFilter('priceMin', e.target.value)}
              className="text-sm"
            />
            <Input
              type="number"
              placeholder="Max"
              value={filters.priceMax}
              onChange={(e) => updateFilter('priceMax', e.target.value)}
              className="text-sm"
            />
          </div>
        </div>

        <div className="space-y-1 sm:space-y-2">
          <Label className="text-xs sm:text-sm">Condition</Label>
          <Select
            value={filters.condition || 'any'}
            onValueChange={(value) => updateFilter('condition', value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Any Condition" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="any">Any Condition</SelectItem>
              <SelectItem value="new">New</SelectItem>
              <SelectItem value="excellent">Excellent</SelectItem>
              <SelectItem value="good">Good</SelectItem>
              <SelectItem value="fair">Fair</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-1 sm:space-y-2">
          <Label className="text-xs sm:text-sm">Location</Label>
          <Input
            type="text"
            placeholder="Enter city or state"
            value={filters.location}
            onChange={(e) => updateFilter('location', e.target.value)}
            className="text-sm"
          />
        </div>
      </div>

    </div>
  );
}