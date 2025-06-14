import { useState } from 'react';
import Header from './pages/Header';
import Hero from './pages/Hero';
import { PoolFilter } from './components/PoolFilter';
import { PoolCard } from './components/PoolCard';
import { pools } from './data/pools'; // Import your pool data
import { Pool } from './types/pool';
import type { FilterOptions } from '@/types/pool'; // Import FilterOptions from pool.ts

function App() {
  const [filters, setFilters] = useState<FilterOptions>({
    category: '',
    priceMin: '',
    priceMax: '',
    condition: '',
    location: '',
  });
  const [searchTerm, setSearchTerm] = useState('');
  const handleOpenUpload = () => {
    console.log('Open upload');
  };

  const handleClearFilters = () => {
    setFilters({
      category: '',
      priceMin: '',
      priceMax: '',
      condition: '',
      location: '',
    });
  };

  const handleViewDetails = (pool: Pool) => {
    console.log('View details for:', pool.title);
    // Add logic for viewing details (e.g., navigate to a details page)
  };

  return (
    <div className='overflow-x-hidden'>
      <Header
        onOpenUpload={handleOpenUpload}
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
      />
      <Hero />
      <PoolFilter
        filters={filters}
        onFilterChange={setFilters}
        onClearFilters={handleClearFilters}
        resultsCount={0} // Replace with actual count from your data
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {pools.map((pool) => (
          <PoolCard key={pool.id} pool={pool} onViewDetails={handleViewDetails} />
        ))}
      </div>
    </div>
  );
}

export default App;