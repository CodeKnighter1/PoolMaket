import { useCreateCard } from "@/hooks/use-create-card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "./ui/dialog";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Button } from "./ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { PoolSchema } from "@/lib/validation";
import { cardStore } from "@/store/card.store";
import $api from "@/http/api";
import { useState } from "react";

function CreateCard() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { isOpen, onClose } = useCreateCard();
  const { cards, setCards } = cardStore();

  const { register, handleSubmit, formState: { errors }, setValue, reset } = useForm({
    resolver: zodResolver(PoolSchema),
    defaultValues: {
      title: '',
      description: '',
      price: 0,
      size: '',
      depth: '',
      material: '',
      condition: 'new',
      location: '',
      images: [],
      seller: { name: '', email: '', phone: '' },
      category: 'in-ground',
      features: [],
      createdAt: new Date().toISOString(),
      isFeatured: false,
    },
  });

  const onSubmit = async (values) => {
    setLoading(true);
    setError(null);
    try {
      const res = await $api.post('/card/create', values);
      setCards([...cards, res.data.card]);
      reset();
      onClose();
    } catch (error) {
      const message = error.message || 'Failed to create card. Please check your network connection.';
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent
        className="max-w-3xl max-h-[90vh] overflow-y-auto px-6 md:px-10"
        inert={isOpen ? false : true}
      >
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">List Your Pool</DialogTitle>
          <DialogDescription>Fill out the details to list your pool for sale.</DialogDescription>
        </DialogHeader>
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Basic Information</h3>
            <div>
              <Label htmlFor="title">Pool Title</Label>
              <Input id="title" {...register('title')} placeholder="e.g., Luxury Infinity Pool" className="mt-1" />
              {errors.title && <p className="text-red-500 text-sm">{errors.title.message}</p>}
            </div>
            <div>
              <Label htmlFor="description">Description</Label>
              <Textarea id="description" {...register('description')} placeholder="Describe your pool..." rows={4} className="mt-1" />
              {errors.description && <p className="text-red-500 text-sm">{errors.description.message}</p>}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="price">Price (USD)</Label>
                <Input id="price" type="number" {...register('price', { valueAsNumber: true })} placeholder="45000" className="mt-1" />
                {errors.price && <p className="text-red-500 text-sm">{errors.price.message}</p>}
              </div>
              <div>
                <Label htmlFor="category">Category</Label>
                <Select onValueChange={(value) => setValue('category', value)} defaultValue="in-ground">
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="in-ground">In-Ground</SelectItem>
                    <SelectItem value="above-ground">Above Ground</SelectItem>
                    <SelectItem value="infinity">Infinity</SelectItem>
                    <SelectItem value="hot-tub">Hot Tub</SelectItem>
                    <SelectItem value="kiddie">Kiddie Pool</SelectItem>
                  </SelectContent>
                </Select>
                {errors.category && <p className="text-red-500 text-sm">{errors.category.message}</p>}
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Specifications</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="size">Size</Label>
                <Input id="size" {...register('size')} placeholder="e.g., 20x40 ft" className="mt-1" />
                {errors.size && <p className="text-red-500 text-sm">{errors.size.message}</p>}
              </div>
              <div>
                <Label htmlFor="depth">Depth</Label>
                <Input id="depth" {...register('depth')} placeholder="e.g., 3-8 ft" className="mt-1" />
                {errors.depth && <p className="text-red-500 text-sm">{errors.depth.message}</p>}
              </div>
              <div>
                <Label htmlFor="material">Material</Label>
                <Input id="material" {...register('material')} placeholder="e.g., Gunite, Fiberglass" className="mt-1" />
                {errors.material && <p className="text-red-500 text-sm">{errors.material.message}</p>}
              </div>
              <div>
                <Label htmlFor="condition">Condition</Label>
                <Select onValueChange={(value) => setValue('condition', value)} defaultValue="new">
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Select condition" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="new">New</SelectItem>
                    <SelectItem value="excellent">Excellent</SelectItem>
                    <SelectItem value="good">Good</SelectItem>
                    <SelectItem value="fair">Fair</SelectItem>
                  </SelectContent>
                </Select>
                {errors.condition && <p className="text-red-500 text-sm">{errors.condition.message}</p>}
              </div>
            </div>
            <div>
              <Label htmlFor="location">Location</Label>
              <Input id="location" {...register('location')} placeholder="e.g., Miami, FL" className="mt-1" />
              {errors.location && <p className="text-red-500 text-sm">{errors.location.message}</p>}
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Images</h3>
            <Input {...register('images.0')} placeholder="e.g., https://example.com/pool.jpg" className="mt-1" />
            {errors.images?.[0] && <p className="text-red-500 text-sm">{errors.images[0].message}</p>}
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Features</h3>
            <Input {...register('features.0')} placeholder="e.g., Heated, LED Lighting" className="mt-1" />
            {errors.features?.[0] && <p className="text-red-500 text-sm">{errors.features[0].message}</p>}
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Your Contact Information</h3>
            <div>
              <Label htmlFor="sellerName">Name</Label>
              <Input id="sellerName" {...register('seller.name')} placeholder="Your name" className="mt-1" />
              {errors.seller?.name && <p className="text-red-500 text-sm">{errors.seller.name.message}</p>}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="sellerEmail">Email</Label>
                <Input id="sellerEmail" type="email" {...register('seller.email')} placeholder="your@email.com" className="mt-1" />
                {errors.seller?.email && <p className="text-red-500 text-sm">{errors.seller.email.message}</p>}
              </div>
              <div>
                <Label htmlFor="sellerPhone">Phone</Label>
                <Input id="sellerPhone" {...register('seller.phone')} placeholder="(94) 444 44 04" className="mt-1" />
                {errors.seller?.phone && <p className="text-red-500 text-sm">{errors.seller.phone.message}</p>}
              </div>
            </div>
          </div>
          <div className="flex justify-end space-x-4 pt-3">
            <Button type="button" variant="outline" onClick={onClose} disabled={loading}>
              Cancel
            </Button>
            <Button type="submit" disabled={loading}>
              List Pool
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default CreateCard;