import { Button } from '@/components/ui/button';
import { useCreateCard } from '@/hooks/use-create-card';
import { Waves, Plus, Search } from 'lucide-react';

interface HeaderProps {
  onOpenUpload: () => void;
  searchTerm: string;
  onSearchChange: (term: string) => void;
}

function Header({ onOpenUpload, searchTerm, onSearchChange }: HeaderProps) {

  const {onOpen} = useCreateCard();
  
  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-4 sm:h-16 space-y-4 sm:space-y-0">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Waves className="h-8 w-8 text-sky-500" />
            <span className="text-2xl font-bold text-gray-900">PoolMarket</span>
          </div>

          {/* Search Bar and Upload Button */}
          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 w-full sm:w-auto">
            <div className="relative w-full sm:w-[300px] md:w-[380px]">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => onSearchChange(e.target.value)}
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent text-sm"
                placeholder="Search pools..."
              />
            </div>

            <Button variant={"veiwWork"}
              onClick={onOpen}
              className="flex items-center space-x-2 w-full sm:w-auto justify-center"
            >
              <Plus className="h-5 w-5" />
              <span className="sm:inline">Sell Your Pool</span>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;