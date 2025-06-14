import { useState } from 'react';
import Header from './pages/Header';
import Hero from './pages/Hero';
import { PoolFilter } from './components/PoolFilter';
import { PoolCard } from './components/PoolCard';
import { AddPoolModal } from './components/AddPoolModal'; // Import AddPoolModal
import { pools as initialPools } from './data/pools'; // Import initial pools
import { Pool, FilterOptions } from './types/pool';

function App() {
  const [filters, setFilters] = useState<FilterOptions>({
    category: '',
    priceMin: '',
    priceMax: '',
    condition: '',
    location: '',
  });
  const [searchTerm, setSearchTerm] = useState('');
  const [pools, setPools] = useState<Pool[]>(initialPools); // State for pools
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal

  const handleOpenUpload = () => {
    setIsModalOpen(true); // Open modal
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); // Close modal
  };

  const handleAddPool = (poolData: Omit<Pool, 'id' | 'createdAt'>) => {
    const newPool: Pool = {
      ...poolData,
      id: crypto.randomUUID(), // Generate unique ID
      createdAt: new Date().toISOString(), // Add timestamp
      isFeatured: false, // Default value
    };
    setPools((prev) => [...prev, newPool]); // Add new pool to state
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
  };

  const filteredPools = pools.filter((pool) => {
    const matchesSearch =
      pool.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pool.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = !filters.category || pool.category === filters.category;
    const matchesCondition = !filters.condition || pool.condition === filters.condition;
    const matchesLocation = !filters.location || pool.location.toLowerCase().includes(filters.location.toLowerCase());
    const matchesPriceMin = !filters.priceMin || pool.price >= parseFloat(filters.priceMin);
    const matchesPriceMax = !filters.priceMax || pool.price <= parseFloat(filters.priceMax);
    return matchesSearch && matchesCategory && matchesCondition && matchesLocation && matchesPriceMin && matchesPriceMax;
  });

  return (
    <div>
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
        resultsCount={filteredPools.length}
      />
      <AddPoolModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onAddPool={handleAddPool}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {filteredPools.length > 0 ? (
          filteredPools.map((pool) => (
            <PoolCard key={pool.id} pool={pool} onViewDetails={handleViewDetails} />
          ))
        ) : (
          <p>No pools match your filters.</p>
        )}
      </div>
    </div>
  );
}

export default App;