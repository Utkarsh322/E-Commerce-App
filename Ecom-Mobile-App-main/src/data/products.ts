import { Product, Category } from '../types';

export const CATEGORIES: Category[] = [
  { id: '1', name: 'Shoes', image: 'https://picsum.photos/200/200?random=1' },
  { id: '2', name: 'Watches', image: 'https://picsum.photos/200/200?random=2' },
  { id: '3', name: 'Audio', image: 'https://picsum.photos/200/200?random=3' },
  { id: '4', name: 'Clothing', image: 'https://picsum.photos/200/200?random=4' },
  { id: '5', name: 'Accessories', image: 'https://picsum.photos/200/200?random=5' },
];

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Nike Air Max 270',
    price: 150,
    image: 'https://picsum.photos/400/400?random=11',
    rating: 4.8,
    category: 'Shoes',
    description: 'The Nike Air Max 270 delivers visible cushioning under every step. Updated for modern comfort, it nods to the original 1991 Air Max 180.',
  },
  {
    id: '2',
    name: 'Chronos Ivory Watch',
    price: 299,
    image: 'https://picsum.photos/400/400?random=12',
    rating: 4.7,
    category: 'Watches',
    description: 'A premium timepiece with a sleek ivory face and stainless steel hardware. Perfect for both casual and formal occasions.',
  },
  {
    id: '3',
    name: 'Sonic Pro Wireless',
    price: 199,
    image: 'https://picsum.photos/400/400?random=13',
    rating: 4.9,
    category: 'Audio',
    description: 'Experience studio-quality sound with Sonic Pro Wireless. Features active noise cancellation and 40-hour battery life.',
  },
  {
    id: '4',
    name: 'Urban Classic Low',
    price: 85,
    image: 'https://picsum.photos/400/400?random=14',
    rating: 4.5,
    category: 'Shoes',
    description: 'Timeless style meets modern comfort. These low-top sneakers are essential for any streetwear enthusiast.',
  },
  {
    id: '5',
    name: 'Sprint V2 Sneakers',
    price: 120,
    image: 'https://picsum.photos/400/400?random=15',
    rating: 4.6,
    category: 'Athletic',
    description: 'Lightweight and responsive, the Sprint V2 is designed for your fastest runs. Breathable mesh keeps you cool.',
  },
  {
    id: '6',
    name: 'Premium Leather Belt',
    price: 45,
    image: 'https://picsum.photos/400/400?random=16',
    rating: 4.4,
    category: 'Accessories',
    description: 'Handcrafted from full-grain leather, this belt adds a touch of sophistication to any outfit.',
  },
];
