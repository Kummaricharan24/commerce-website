'use client';

interface HeaderProps {
  cartCount: number;
  onCartClick: () => void;
}

export default function Header({ cartCount, onCartClick }: HeaderProps) {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-primary">E-Shop</h1>
        </div>

        <nav className="hidden md:flex gap-6 items-center">
          <a href="#" className="text-gray-700 hover:text-secondary transition-colors">
            Home
          </a>
          <a href="#" className="text-gray-700 hover:text-secondary transition-colors">
            Products
          </a>
          <a href="#" className="text-gray-700 hover:text-secondary transition-colors">
            Categories
          </a>
        </nav>

        <button
          onClick={onCartClick}
          className="relative bg-secondary text-white px-6 py-2 rounded-md hover:bg-blue-600 transition-colors font-semibold flex items-center gap-2"
        >
          🛒 Cart
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">
              {cartCount}
            </span>
          )}
        </button>
      </div>
    </header>
  );
}
