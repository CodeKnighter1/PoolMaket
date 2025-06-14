import { Waves, Heart, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-blue-500 p-2 rounded-lg">
                <Waves className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">PoolMarket</h3>
                <p className="text-sm text-gray-400">Your Pool Marketplace</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              The premier destination for buying and selling swimming pools. Connect with pool owners and buyers in your area with confidence and ease.
            </p>
            <div className="flex items-center gap-1 text-sm text-gray-400">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-red-500 fill-current" />
              <span>for pool enthusiasts</span>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li className="text-blue-600  hover:text-gray-50 transform transition-all duration-200">Browse Pools</li>
              <li className="text-blue-600  hover:text-gray-50 transform transition-all duration-200">Sell Your Pool</li>
              <li className="text-blue-600  hover:text-gray-50 transform transition-all duration-200">Pool Buying Guide</li>
              <li className="text-blue-600  hover:text-gray-50 transform transition-all duration-200">Safety Tips</li>
              <li className="text-blue-600  hover:text-gray-50 transform transition-all duration-200">About Us</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>poolmarket.com</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>(94) 544 44 04</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Uzbekistan</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2025 PoolMarket. All rights reserved. | Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </footer>
  );
}