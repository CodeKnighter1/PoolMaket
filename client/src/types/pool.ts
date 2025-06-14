export interface FilterOptions {
  category: string;
  priceMin: string;
  priceMax: string;
  condition: string;
  location: string;
}

export interface PoolFilterProps {
  filters: FilterOptions;
  onFilterChange: (filters: FilterOptions) => void;
  onClearFilters: () => void;
  resultsCount: number;
}

export interface Pool {
  id: string;
  title: string;
  description: string;
  price: number;
  size: string;
  depth: string;
  material: string;
  condition: 'new' | 'excellent' | 'good' | 'fair';
  location: string;
  images: string[];
  seller: {
    name: string;
    email: string;
    phone: string;
  };
  category: 'above-ground' | 'in-ground' | 'infinity' | 'kiddie' | 'hot-tub';
  features: string[];
  createdAt: string;
  isFeatured?: boolean;
}