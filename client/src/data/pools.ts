import { Pool } from '@/types/pool';

export const pools: Pool[] = [
  {
    id: '1',
    title: 'Luxury Infinity Pool - 20x40ft',
    description: 'Stunning infinity pool perfect for modern homes. Features premium finishes and energy-efficient equipment.',
    price: 85000,
    size: '20x40 ft',
    depth: '3-8 ft',
    material: 'Gunite',
    condition: 'new',
    location: 'Miami, FL',
    images: [
      'https://images.pexels.com/photos/261101/pexels-photo-261101.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    seller: {
      name: 'Pool Masters Inc.',
      email: 'info@poolmasters.com',
      phone: '(555) 123-4567'
    },
    category: 'infinity',
    features: ['LED Lighting', 'Heating System', 'Saltwater', 'Automatic Cover'],
    createdAt: '2024-01-15',
    isFeatured: true
  },
  {
    id: '2',
    title: 'Classic In-Ground Pool - 16x32ft',
    description: 'Beautiful rectangular in-ground pool with traditional design. Perfect for family fun and entertaining.',
    price: 45000,
    size: '16x32 ft',
    depth: '3-6 ft',
    material: 'Fiberglass',
    condition: 'excellent',
    location: 'Austin, TX',
    images: [
      'https://images.pexels.com/photos/1130623/pexels-photo-1130623.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1109354/pexels-photo-1109354.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    seller: {
      name: 'Sarah Johnson',
      email: 'sarah.j@email.com',
      phone: '(555) 987-6543'
    },
    category: 'in-ground',
    features: ['Pool Deck', 'Diving Board', 'Pool Lights', 'Filtration System'],
    createdAt: '2024-01-12',
    isFeatured: true
  },
  {
    id: '3',
    title: 'Above Ground Pool - 24ft Round',
    description: 'High-quality above ground pool with steel frame construction. Easy to install and maintain.',
    price: 8900,
    size: '24 ft diameter',
    depth: '4 ft',
    material: 'Steel Frame',
    condition: 'new',
    location: 'Phoenix, AZ',
    images: [
      'https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    seller: {
      name: 'Pool Depot',
      email: 'sales@pooldepot.com',
      phone: '(555) 456-7890'
    },
    category: 'above-ground',
    features: ['Steel Frame', 'Ladder', 'Filter Pump', 'Pool Cover'],
    createdAt: '2024-01-10'
  },
  {
    id: '4',
    title: 'Luxury Hot Tub Spa - 8 Person',
    description: 'Premium hot tub with advanced jet system and energy-efficient design. Perfect for relaxation.',
    price: 12500,
    size: '8x8 ft',
    depth: '3 ft',
    material: 'Acrylic',
    condition: 'excellent',
    location: 'Denver, CO',
    images: [
      'https://images.pexels.com/photos/3616764/pexels-photo-3616764.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    seller: {
      name: 'Spa Solutions',
      email: 'info@spasolutions.com',
      phone: '(555) 321-0987'
    },
    category: 'hot-tub',
    features: ['LED Lighting', 'Bluetooth Audio', '56 Jets', 'Ozonator'],
    createdAt: '2024-01-08'
  },
  {
    id: '5',
    title: 'Family Pool - 18x36ft Rectangle',
    description: 'Perfect family pool with shallow and deep ends. Includes all necessary equipment for immediate use.',
    price: 32000,
    size: '18x36 ft',
    depth: '3-7 ft',
    material: 'Vinyl Liner',
    condition: 'good',
    location: 'Orlando, FL',
    images: [
      'https://images.pexels.com/photos/2767815/pexels-photo-2767815.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    seller: {
      name: 'Mike Wilson',
      email: 'mike.wilson@email.com',
      phone: '(555) 654-3210'
    },
    category: 'in-ground',
    features: ['Pool Heater', 'Automatic Cleaner', 'Safety Fence', 'Pool Lights'],
    createdAt: '2024-01-05'
  },
  {
    id: '6',
    title: 'Kiddie Pool Paradise - 12ft Round',
    description: 'Safe and fun kiddie pool with colorful design. Perfect for young children to enjoy water play.',
    price: 450,
    size: '12 ft diameter',
    depth: '2 ft',
    material: 'Inflatable PVC',
    condition: 'new',
    location: 'San Diego, CA',
    images: [
      'https://images.pexels.com/photos/8550798/pexels-photo-8550798.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    seller: {
      name: 'Kids Pool Store',
      email: 'hello@kidspoolstore.com',
      phone: '(555) 111-2222'
    },
    category: 'kiddie',
    features: ['Safety Valve', 'Drain Plug', 'Repair Kit', 'Fun Graphics'],
    createdAt: '2024-01-03'
  }
];