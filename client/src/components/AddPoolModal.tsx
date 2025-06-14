import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Pool } from '@/types/pool';

interface AddPoolModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddPool: (pool: Omit<Pool, 'id' | 'createdAt'>) => void;
}

export function AddPoolModal({ isOpen, onClose, onAddPool }: AddPoolModalProps) {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: '',
    size: '',
    depth: '',
    material: '',
    condition: 'new' as Pool['condition'],
    location: '',
    images: [''],
    seller: {
      name: '',
      email: '',
      phone: ''
    },
    category: 'in-ground' as Pool['category'],
    features: ['']
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const poolData: Omit<Pool, 'id' | 'createdAt'> = {
      ...formData,
      price: parseFloat(formData.price),
      images: formData.images.filter(img => img.trim() !== ''),
      features: formData.features.filter(feature => feature.trim() !== '')
    };

    onAddPool(poolData);
    onClose();
    
    // Reset form
    setFormData({
      title: '',
      description: '',
      price: '',
      size: '',
      depth: '',
      material: '',
      condition: 'new',
      location: '',
      images: [''],
      seller: {
        name: '',
        email: '',
        phone: ''
      },
      category: 'in-ground',
      features: ['']
    });
  };

  const updateFeature = (index: number, value: string) => {
    const newFeatures = [...formData.features];
    newFeatures[index] = value;
    setFormData(prev => ({ ...prev, features: newFeatures }));
  };

  const addFeature = () => {
    setFormData(prev => ({ ...prev, features: [...prev.features, ''] }));
  };

  const removeFeature = (index: number) => {
    const newFeatures = formData.features.filter((_, i) => i !== index);
    setFormData(prev => ({ ...prev, features: newFeatures }));
  };

  const updateImage = (index: number, value: string) => {
    const newImages = [...formData.images];
    newImages[index] = value;
    setFormData(prev => ({ ...prev, images: newImages }));
  };

  const addImage = () => {
    setFormData(prev => ({ ...prev, images: [...prev.images, ''] }));
  };

  const removeImage = (index: number) => {
    const newImages = formData.images.filter((_, i) => i !== index);
    setFormData(prev => ({ ...prev, images: newImages }));
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto px-6 md:px-10">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">List Your Pool</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Basic Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Basic Information</h3>
            
            <div>
              <Label htmlFor="title">Pool Title</Label>
              <Input
                id="title"
                required
                value={formData.title}
                onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                placeholder="e.g., Luxury Infinity Pool"
                className='mt-3'
              />
            </div>

            <div>
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                required
                value={formData.description}
                onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                placeholder="Describe your pool's features, condition, and what makes it special..."
                rows={4}
                className='mt-3'
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="price">Price (USD)</Label>
                <Input
                  id="price"
                  type="number"
                  required
                  value={formData.price}
                  onChange={(e) => setFormData(prev => ({ ...prev, price: e.target.value }))}
                  placeholder="45000"
                  className='mt-3'
                />
              </div>
              <div className='bg-white'>
                <Label htmlFor="category">Category</Label>
                <Select 
                  value={formData.category} 
                  onValueChange={(value: Pool['category']) => setFormData(prev => ({ ...prev, category: value }))}
                >
                  <SelectTrigger className='mt-3 bg-amber-50'>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="in-ground" className='bg-white'>In-Ground</SelectItem>
                    <SelectItem value="above-ground">Above Ground</SelectItem>
                    <SelectItem value="infinity">Infinity</SelectItem>
                    <SelectItem value="hot-tub">Hot Tub</SelectItem>
                    <SelectItem value="kiddie">Kiddie Pool</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Specifications */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Specifications</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="size">Size</Label>
                <Input
                  id="size"
                  required
                  value={formData.size}
                  onChange={(e) => setFormData(prev => ({ ...prev, size: e.target.value }))}
                  placeholder="e.g., 20x40 ft"
                  className='mt-3'
                />
              </div>
              <div>
                <Label htmlFor="depth">Depth</Label>
                <Input
                  id="depth"
                  required
                  value={formData.depth}
                  onChange={(e) => setFormData(prev => ({ ...prev, depth: e.target.value }))}
                  placeholder="e.g., 3-8 ft"
                  className='mt-3'
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="material">Material</Label>
                <Input
                  id="material"
                  required
                  value={formData.material}
                  onChange={(e) => setFormData(prev => ({ ...prev, material: e.target.value }))}
                  placeholder="e.g., Gunite, Fiberglass, Vinyl"
                  className='mt-3'
                />
              </div>
              <div>
                <Label htmlFor="condition">Condition</Label>
                <Select 
                  value={formData.condition} 
                  onValueChange={(value: Pool['condition']) => setFormData(prev => ({ ...prev, condition: value }))}
                >
                  <SelectTrigger className='mt-3'>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="new">New</SelectItem>
                    <SelectItem value="excellent">Excellent</SelectItem>
                    <SelectItem value="good">Good</SelectItem>
                    <SelectItem value="fair">Fair</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div>
              <Label htmlFor="location">Location</Label>
              <Input
                id="location"
                required
                value={formData.location}
                onChange={(e) => setFormData(prev => ({ ...prev, location: e.target.value }))}
                placeholder="e.g., Miami, FL"
                className='mt-3'
              />
            </div>
          </div>

          {/* Images */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Images</h3>
            {formData.images.map((image, index) => (
              <div key={index} className="flex gap-2">
                <Input
                  value={image}
                  onChange={(e) => updateImage(index, e.target.value)}
                  placeholder="Enter image URL"
                  className="flex-1"
                />
                {formData.images.length > 1 && (
                  <Button
                    type="button"
                    variant={"link"}
                    onClick={() => removeImage(index)}
                  >
                    Remove
                  </Button>
                )}
              </div>
            ))}
            <Button
              type="button"
              variant={"link"}
              onClick={addImage}
            >
              Add Another Image
            </Button>
          </div>

          {/* Features */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Features</h3>
            {formData.features.map((feature, index) => (
              <div key={index} className="flex gap-2">
                <Input
                  value={feature}
                  onChange={(e) => updateFeature(index, e.target.value)}
                  placeholder="e.g., LED Lighting, Heating System"
                  className="flex-1"
                />
                {formData.features.length > 1 && (
                  <Button
                    type="button"
                    variant={"link"}
                    onClick={() => removeFeature(index)}
                  >
                    Remove
                  </Button>
                )}
              </div>
            ))}
            <Button
              type="button"
              variant={"link"}
              onClick={addFeature}
            >
              Add Feature
            </Button>
          </div>

          {/* Seller Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Your Contact Information</h3>
            
            <div>
              <Label htmlFor="sellerName">Name</Label>
              <Input
                id="sellerName"
                required
                value={formData.seller.name}
                onChange={(e) => setFormData(prev => ({ 
                  ...prev, 
                  seller: { ...prev.seller, name: e.target.value }
                }))}
                placeholder="Your name or business name"
                className='mt-3'
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="sellerEmail">Email</Label>
                <Input
                  id="sellerEmail"
                  type="email"
                  required
                  value={formData.seller.email}
                  onChange={(e) => setFormData(prev => ({ 
                    ...prev, 
                    seller: { ...prev.seller, email: e.target.value }
                  }))}
                  placeholder="your@email.com"
                  className='mt-3'
                />
              </div>
              <div>
                <Label htmlFor="sellerPhone">Phone</Label>
                <Input
                  id="sellerPhone"
                  required
                  value={formData.seller.phone}
                  onChange={(e) => setFormData(prev => ({ 
                    ...prev, 
                    seller: { ...prev.seller, phone: e.target.value }
                  }))}
                  placeholder="(94) 444 44 04"
                  className='mt-3'
                />
              </div>
            </div>
          </div>

          {/* Submit */}
          <div className="flex justify-end space-x-4 pt-3">
            <Button type="button" variant={"link"} onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit" variant={"link"}>
              List Pool
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}