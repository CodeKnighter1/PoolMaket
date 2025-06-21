import { z } from 'zod';

export const PoolSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  description: z.string().min(1, 'Description is required'),
  price: z.number().positive('Price must be positive'),
  size: z.string().min(1, 'Size is required'),
  depth: z.string().min(1, 'Depth is required'),
  material: z.string().min(1, 'Material is required'),
  condition: z.string().min(1, 'Condition is required'),
  location: z.string().min(1, 'Location is required'),
  images: z.array(z.string().url()).min(1, 'At least one image is required'),
  seller: z.object({
    name: z.string().min(1, 'Seller name is required'),
    email: z.string().email('Invalid email'),
    phone: z.string().min(1, 'Phone is required'),
  }),
  category: z.string().min(1, 'Category is required'),
  features: z.array(z.string()).optional(),
  createdAt: z.string().datetime(),
  isFeatured: z.boolean(),
});