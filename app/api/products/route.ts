import { NextResponse } from 'next/server';

// Mock product data - in production, this would come from the database
const mockProducts = [
  {
    id: 1,
    name: 'Wireless Headphones',
    description: 'High-quality wireless headphones with noise cancellation',
    price: 129.99,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop',
    stock: 50,
    category: 'Electronics',
  },
  {
    id: 2,
    name: 'Smart Watch',
    description: 'Feature-rich smartwatch with health tracking',
    price: 249.99,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop',
    stock: 30,
    category: 'Electronics',
  },
  {
    id: 3,
    name: 'USB-C Cable',
    description: 'Durable and fast charging USB-C cable',
    price: 19.99,
    image: 'https://images.unsplash.com/photo-1609034227505-5876f6aa4e90?w=500&h=500&fit=crop',
    stock: 100,
    category: 'Accessories',
  },
  {
    id: 4,
    name: 'Portable Speaker',
    description: 'Compact portable speaker with excellent sound',
    price: 79.99,
    image: 'https://images.unsplash.com/photo-1589003077984-894e133814c9?w=500&h=500&fit=crop',
    stock: 40,
    category: 'Audio',
  },
  {
    id: 5,
    name: 'Phone Case',
    description: 'Protective and stylish phone case',
    price: 24.99,
    image: 'https://images.unsplash.com/photo-1592286927505-1def25e2c81d?w=500&h=500&fit=crop',
    stock: 200,
    category: 'Accessories',
  },
  {
    id: 6,
    name: 'Screen Protector',
    description: 'Tempered glass screen protector',
    price: 14.99,
    image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=500&h=500&fit=crop',
    stock: 150,
    category: 'Accessories',
  },
  {
    id: 7,
    name: 'Laptop Stand',
    description: 'Adjustable aluminum laptop stand',
    price: 49.99,
    image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500&h=500&fit=crop',
    stock: 35,
    category: 'Accessories',
  },
  {
    id: 8,
    name: 'Keyboard',
    description: 'Mechanical keyboard with RGB lighting',
    price: 149.99,
    image: 'https://images.unsplash.com/photo-1587829191301-dc798b83add3?w=500&h=500&fit=crop',
    stock: 25,
    category: 'Electronics',
  },
];

export async function GET() {
  try {
    // In production, fetch from database using Prisma
    // const products = await prisma.product.findMany();
    return NextResponse.json(mockProducts);
  } catch (error) {
    console.error('Error fetching products:', error);
    return NextResponse.json(
      { error: 'Failed to fetch products' },
      { status: 500 }
    );
  }
}
