import { useState, useEffect } from 'react';
import Header from './pages/Header';
import Hero from './pages/Hero';
import { PoolFilter } from './components/PoolFilter';
import { PoolCard } from './components/PoolCard';
import { Footer } from './components/Footer';
import { Pool, FilterOptions } from './types/pool';
import $api from './http/api';
import CreateCard from './components/create-card';
import { Button } from './components/ui/button';

function App() {
  const [filters, setFilters] = useState<FilterOptions>({
    category: '',
    priceMin: '',
    priceMax: '',
    condition: '',
    location: '',
  });
  const [searchTerm, setSearchTerm] = useState('');
  const [pools, setPools] = useState<Pool[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchPools = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await $api.get('/card');
      setPools(res.data);
    } catch (error) {
      setError('Failed to load pools. Please check your network connection or try again later.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPools();
  }, []);

  const handleClearFilters = () => {
    setFilters({ category: '', priceMin: '', priceMax: '', condition: '', location: '' });
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
      <Header searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <Hero />
      <PoolFilter
        filters={filters}
        onFilterChange={setFilters}
        onClearFilters={handleClearFilters}
        resultsCount={filteredPools.length}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {loading ? (
          <p>Loading pools...</p>
        ) : error ? (
          <div className="text-center">
            <p className="text-red-500">{error}</p>
            <Button onClick={fetchPools} className="mt-4">
              Retry
            </Button>
          </div>
        ) : filteredPools.length ? (
          filteredPools.map((pool, index) => (
            <PoolCard key={pool.id || index} pool={pool} onViewDetails={handleViewDetails} />
          ))
        ) : (
          <p>No pools match your filters.</p>
        )}
      </div>
      <CreateCard />
      <Footer />
    </div>
  );
}

export default App;